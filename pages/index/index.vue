<script setup>
    import {ref} from "vue";
    import {bannerApi} from '/base/api'
    import {link} from '/base/utils'
    import navIcons from "/base/data/navIcons";

    const banners = ref([])
    const showLeft = ref(null);

    const pageLogin = '/pages/login/login'
    const pageSearch = '/pages/search/search'

    bannerApi().then(res => {
        banners.value = res.banners
    })

    const showDrawer = () => {
        showLeft.value.open()
    }
    const closeDrawer = () => {
        showLeft.value.close()
    }
</script>

<template>
    <view class="content">
        <view class="header">
            <uni-icons class="bars" type="bars" size="24" @click="showDrawer"></uni-icons>
            <view class="search" @click="link(pageSearch)">
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
                    <image :src="item.iconUrl" mode="widthFix" @click="link(item.url)"></image>
                    <view class="icon-name">
                        {{ item.name }}
                    </view>
                </swiper-item>
            </swiper>

            <uni-section type="line" title="推荐歌单">
                <view class="playlist">
                    <view class="playlist-item" v-for="item in playlist" :key="item.id" @click="goDetail(item.id)">
                        <image :src="item.coverImgUrl" mode="widthFix"></image>
                        <view class="playlist-item-name">
                            {{ item.name }}
                        </view>
                    </view>
                </view>
            </uni-section>
        </view>
        <uni-drawer ref="showLeft" mode="left" width="70%">
            <view class="close">
                <button @click="()=>{
                    link(pageLogin)
                    closeDrawer()
                }">
                    <text class="word-btn-white">登录</text>
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


        }

    }


</style>
