<script setup>
    import {onShow, onHide} from '@dcloudio/uni-app'
    import {ref} from "vue";
    import {bannerApi, logoutApi, newsongApi, personalizedApi} from '/base/api'
    import {navigateTo} from '/base/utils'
    import navIcons from "/base/data/navIcons";

    const banners = ref([])
    const showLeft = ref(null);
    const isLogin = ref(false)
    const playListTJ = ref([])
    const musicList = ref([])

    const pageLogin = '/pages/login/login'
    const pageSearch = '/pages/search/search'
    const pageMusicPlay = '/pages/musicPlay/musicPlay'

    bannerApi().then(res => {
        banners.value = res.banners
    })

    personalizedApi().then(res => {
        playListTJ.value = res.result
    })

    newsongApi(12).then(res => {
        musicList.value = convertTo3DArray(res.result)
    })

    const convertTo3DArray = (arr) => {
        const twoDimArray = [];
        for (let i = 0; i < arr.length / 3; i++) {
            twoDimArray.push(arr.slice(i * 3, (i + 1) * 3));
        }
        return twoDimArray;
    }


    const showDrawer = () => {
        showLeft.value.open()
    }
    const closeDrawer = () => {
        showLeft.value.close()
    }

    const curCookie = uni.getStorageSync("curCookie");

    onShow(() => {
        isLogin.value = !!curCookie;
    })
    onHide(() => {
        isLogin.value = !!curCookie;
    })

    //退出登录
    const getLogout = () => {
        logoutApi().then(res => {
            if (res.code === 200) {
                uni.setStorageSync('curCookie', "")
                isLogin.value = false
                closeDrawer()
            }
        })
    }

    const getDetail = (id) => {
        navigateTo("/pages/acquiesce/acquiesce?id=" + id)
    }


</script>

<template>
    <view class="content">
        <view class="header">
            <uni-icons class="bars" type="bars" size="24" @click="showDrawer"></uni-icons>
            <view class="search" @click="navigateTo(pageSearch)">
                <uni-search-bar placeholder="搜索" bgColor="#EEEEEE" readonly />
            </view>
        </view>
        <view class="main">
            <view class="swiper-wrap">
                <swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)" indicator-active-color="#ffffff" autoplay circular>
                    <swiper-item v-for="item in banners" :key="item.targetId">
                        <image :src="item.imageUrl" mode="widthFix"></image>
                    </swiper-item>
                </swiper>
            </view>

            <swiper class="icon-swiper" display-multiple-items="5">
                <swiper-item v-for="item in navIcons" :key="item.id">
                    <image :src="item.iconUrl" mode="widthFix" @click="navigateTo(item.url)"></image>
                    <view class="icon-name">
                        {{ item.name }}
                    </view>
                </swiper-item>
            </swiper>

            <uni-section type="line" title="推荐歌单">
                <view class="playlist">
                    <view class="playlist-item" v-for="item in playListTJ" :key="item.id" @click="getDetail(item.id)">
                        <image :src="item.picUrl" mode="widthFix"></image>
                        <view class="playlist-item-name">
                            {{ item.name }}
                        </view>
                    </view>
                </view>
            </uni-section>

            <uni-section type="line" title="新歌新碟">
                <view class="newsong">
                    <view class="musiclist" v-for="value in musicList">
                        <view class="musiclist-item" v-for="item in value" :key="item.id" @click="navigateTo(pageMusicPlay)">
                            <image :src="item.picUrl" mode="widthFix"></image>
                            <view class="musiclist-item-name">
                                {{ item.name }}
                            </view>
                        </view>
                    </view>
                </view>
            </uni-section>

        </view>
        <uni-drawer ref="showLeft" mode="left" :width="300">
            <view class="close">
                <button v-show="!isLogin" @click="()=>{
                    navigateTo(pageLogin)
                    closeDrawer()
                }">
                    <text class="word-btn-white">登录</text>
                </button>

                <button v-show="isLogin" @click="getLogout">
                    <text class="word-btn-white">退出登录</text>
                </button>
            </view>
        </uni-drawer>
    </view>
</template>

<style lang="scss" scoped>
    .content {
        width: 100%;
        height: 100%;
        position: relative;

        .header {
            padding: 30rpx;
            display: flex;
            width: 100%;
            box-sizing: border-box;
            align-items: center;

            .search {
                flex: 1;
                border-radius: 40rpx;
                margin-left: 20rpx;

                .uni-searchbar {
                    padding: 0;
                }
            }
        }

        .main {
            width: 100%;
            height: 100%;

            .swiper-wrap {
                padding: 30rpx;

                .swiper {
                    border-radius: 20rpx;
                    overflow: hidden;
                    height: 256rpx;

                    image {
                        width: 100%;
                    }
                }
            }

            .icon-swiper {
                height: 150rpx;

                swiper-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                image {
                    width: 80rpx;
                    height: 80rpx;
                    background: $theme-color;
                    border-radius: 50%;
                }

                .icon-name {
                    font-size: 12px;
                    margin-top: 16rpx;
                }
            }

            .playlist {
                display: flex;
                flex-wrap: nowrap;
                padding: 0 30rpx;
                overflow: auto;

                .playlist-item {
                    width: 200rpx;
                    flex-shrink: 0;
                    margin-right: 20rpx;

                    image {
                        width: 100%;
                        height: 200rpx;
                        border-radius: 10rpx;
                    }

                    .playlist-item-name {
                        font-size: 24rpx;
                        height: 70rpx;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }

            .playlist::-webkit-scrollbar {
                display: none;
            }

            .newsong {
                display: flex;
                width: 100%;
                flex-wrap: nowrap;
                overflow: auto;
                padding: 0 30rpx;

                .musiclist {
                    display: flex;
                    flex-direction: column;
                    .musiclist-item {
                        display: flex;
                        align-items: center;
                        margin-right: 20rpx;
                        margin-bottom: 15rpx;

                        image {
                            width: 80rpx;
                            height: 80rpx;
                            margin-right: 15rpx;
                            border-radius: 10rpx;
                        }

                        .musiclist-item-name {
                            font-size: 24rpx;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                    }
                }
            }


            .newsong::-webkit-scrollbar {
                display: none;
            }


        }

    }


</style>
