<script setup>
    import {onLoad, onShow} from '@dcloudio/uni-app'
    import {ref, watch} from "vue";
    import {navigateTo, reLaunch, switchTab} from "../../base/utils";
    import {SongdetailApi, trackAllApi} from "../../base/api";
    import {useMusicstore} from "../../store/music";

    const launchOptionsSync = uni.getLaunchOptionsSync();
    const userStore = useMusicstore();

    const pageSearch = '/pages/search/search'

    const songListDetail = ref(null)
    const detailList = ref(null)
    const songsList = ref(null)
    const songsTitle = ref("")

    onLoad((option) => {
        if (typeof option.id !== 'undefined') {
            songsTitle.value = option.title
            SongdetailApi(option.id).then(res => {
                console.log("ggg", res)
                songListDetail.value = res
            })
            trackAllApi(option.id).then(res => {
                songsList.value = res.songs
            })
        }
    })

    watch(songListDetail, () => {
        detailList.value = songListDetail.value.playlist
    })

    const getTageBack = () => {
        reLaunch("/" + launchOptionsSync.path)
    }

    const getMusicPlay = (index) => {
        userStore.musicAllList(songsList.value, songsList.value[index], index, songsTitle.value)
        reLaunch("/pages/musicPlay/musicPlay")
    }


</script>

<template>
    <view class="songsList">
        <view class="header">
            <uni-icons color="#ffffff" type="left" size="26" @click="getTageBack"></uni-icons>
            <text>歌单</text>
            <view>
                <uni-icons color="#ffffff" type="search" size="26" @click="navigateTo(pageSearch)"></uni-icons>

            </view>
        </view>
        <view class="details">
            <view class="details_content">
                <view class="details_content_icon">
                    <image class="content_imag" :src="detailList.coverImgUrl" mode="widthFix" @click="navigateTo(item.url)"></image>
                    <view class="play_num">
                        <text>{{ detailList.playCount }}</text>
                    </view>
                </view>
                <view class="content_view">
                    <text>{{ detailList?.name }}</text>
                    <view class="content_view_user">
                        <image class="content_view_user_imag" :src="detailList.creator.avatarUrl" mode="widthFix"></image>
                        <text class="content_view_user_text">{{ detailList.creator.nickname }}</text>
                    </view>
                    <view class="content_view_type">
                        <view class="content_view_type_content" v-for="item in detailList.algTags">
                            <text>{{ item }}</text>
                            <uni-icons color="#ffffff" type="right" size="10" @click="getTageBack"></uni-icons>

                        </view>
                    </view>
                </view>
            </view>

            <text class="details_remark">{{ detailList?.description }}</text>

            <view class="details_controls">
                <view class="item">
                    <view class="item_content">
                        <image class="item_content_imag" src="/icon/icon-share.png" mode="widthFix"></image>
                        <text>1234</text>
                    </view>
                </view>
                <view class="item">
                    <view class="item_content">
                        <image class="item_content_imag" src="/icon/icon-massage.png" mode="widthFix"></image>
                        <text>1234</text>
                    </view>
                </view>
                <view class="item">
                    <view class="item_content">
                        <image class="item_content_imag" src="/icon/icon-share.png" mode="widthFix"></image>
                        <text>1234</text>
                    </view>
                </view>
            </view>

        </view>
        <view class="main">
            <view class="main_top" @click="getMusicPlay(0)">
                <image class="main_top_imag" src="/icon/icon-play.png" mode="widthFix"></image>
                <text>播放全部</text>
                <text class="main_top_text">({{ songsList?.length }})</text>
            </view>
            <view class="main_content" v-for="(item,index) in songsList" :key="item.id">
                <view class="main_content_list">
                    <text>{{ index + 1 }}</text>
                    <view class="main_content_list_content" @click="getMusicPlay(index)">
                        <view class="main_content_list_content_title">
                            <text>{{ item.name }}</text>
                            <text>{{ item.ar[0].name }} - {{ item.al.name }}</text>
                        </view>


                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
    .songsList {
        width: 100%;
        height: 100%;
        background-color: #7b767f;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-top: 30rpx;

        .header {
            width: 100%;
            padding: 0 30rpx;
            box-sizing: border-box;
            display: flex;
            color: #ffffff;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
        }

        .details {
            padding: 0 30rpx;
            box-sizing: border-box;
            margin-top: 30rpx;
            display: flex;
            flex-direction: column;
            color: #FFFFFF;

            .details_content {
                display: flex;
                align-items: center;

                .details_content_icon {
                    width: 200rpx;
                    height: 200rpx;
                    margin-right: 20rpx;
                    position: relative;
                    .content_imag {
                        width: 100%;
                        height: 100%;
                        background: #7b767f;
                        border-radius: 10%;
                    }
                    .play_num{
                        position: absolute;
                        top: 15rpx;
                        right: 15rpx;

                    }
                }

                .content_view {
                    display: flex;
                    flex-direction: column;

                    .content_view_user {
                        display: flex;
                        align-items: center;
                        margin: 10rpx 0;

                        .content_view_user_imag {
                            width: 50rpx;
                            height: 50rpx;
                            background: #7b767f;
                            border-radius: 50%;
                        }

                        .content_view_user_text {
                            font-size: 12px;
                            color: #e4e1e6;
                            margin: 0 10rpx;
                        }
                    }

                    .content_view_type {
                        display: flex;
                        align-items: center;
                        font-size: 10px;
                        color: #FFFFFF;
                        margin-top: 10rpx;

                        .content_view_type_content {
                            background-color: #938e97;
                            padding: 6rpx 6rpx 6rpx 10rpx;
                            margin-right: 10rpx;
                            border-radius: 10rpx;

                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }

            .details_remark {
                font-size: 12px;
                color: #e4e1e6;
                margin: 25rpx 0;

            }

            .details_controls{
                display: flex;
                justify-content: space-around;
                margin-bottom: 30rpx;
                .item{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #99949d;
                    width: 200rpx;
                    height: 85rpx;
                    border-radius: 50rpx;
                    .item_content{
                        display: flex;
                        align-items: center;
                        .item_content_imag{
                            width: 30rpx;
                            height: 30rpx;
                            margin-right: 10rpx;
                        }
                    }
                }
            }
        }

        .main {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-bottom: 80rpx;
            background-color: #FFFFFF;
            border-radius: 40rpx 40rpx 0 0;

            .main_top {
                position: sticky;
                top: 0;
                background-color: #FFFFFF;
                padding: 30rpx;
                display: flex;
                align-items: center;
                border-bottom: 1rpx solid #cbcacd;
                border-radius: 40rpx 40rpx 0 0;
                margin-bottom: 30rpx;

                .main_top_imag {
                    width: 35rpx;
                    height: 35rpx;
                    margin-right: 15rpx;
                }

                .main_top_text {
                    font-size: 11px;
                    margin-left: 5px;
                }
            }

            .main_content {
                flex: 1;
                padding: 0 30rpx;
                margin-bottom: 30rpx;

                &:last-child {
                    margin-bottom: 0;
                }

                .main_content_list {
                    display: flex;
                    align-items: center;

                    .main_content_list_content {
                        flex: 1;
                        margin-left: 30rpx;

                        .main_content_list_content_title {
                            display: flex;
                            flex-direction: column;
                        }
                    }
                }
            }
        }
    }
</style>