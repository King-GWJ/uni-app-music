<script setup>
    import {onShow} from '@dcloudio/uni-app'
    import Sidebar from "../../components/sidebar/Sidebar.vue";
    import TabToggle from "../../components/tab/TabToggle.vue";
    import {ref, watch} from "vue";
    import {navigateTo} from "../../base/utils";
    import {useUserStore} from "../../store/user";
    import {userPlayListApi} from "../../base/api";

    const curCookie = uni.getStorageSync("curCookie");

    const pageSearch = '/pages/search/search'
    const pageLogin = '/pages/login/login'

    const userStore = useUserStore()

    const profile = ref(userStore.profile)
    const isLogin = ref(false)
    const sidebar = ref(null)
    const tabIndex = ref(0)
    const playList = ref([])

    onShow(() => {
        isLogin.value = !!curCookie;
        if (!profile.value) {
            profile.value = userStore.setProfileData()
        } else {
            userPlayListApi(profile.value?.userId).then(res => {
                playList.value = res.playlist
            })
        }
    })

    watch(profile, () => {
        userPlayListApi(profile.value?.userId).then(res => {
            playList.value = res.playlist
        })
    })

    const tabList = ref([
        {
            isSelect: true,
            name: "音乐",
        },
        {
            isSelect: false,
            name: "播客",
        },
        {
            isSelect: false,
            name: "动态",
        },
    ])
    const getTabIndex = (index) => {
        tabIndex.value = index
    }
</script>

<template>
    <view class="content" style="height: 100%;">
        <view class="header">
            <uni-icons class="bars" type="bars" size="24" @click="()=>{sidebar.showDrawer()}"></uni-icons>
            <uni-icons class="bars" type="search" size="24" @click="navigateTo(pageSearch)"></uni-icons>
        </view>
        <view class="main">
            <view class="login">
                <image :src="profile ? profile.avatarUrl :'/icon/icon-avatar.png'" mode="widthFix" class="login-img"></image>
                <view class="login-name" v-show="isLogin">
                    {{ profile?.nickname }}
                </view>
                <view class="login-name" v-show="!isLogin" @click="()=>{navigateTo(pageLogin)}">
                    立即登录
                </view>
            </view>
            <view class="connect">
                <TabToggle class="toggle" :tabList="tabList" @tabIndexEvent="getTabIndex" />
                <view v-if="tabIndex === 0" class="view">
<!--                    <uni-list :border="false" v-if="!isLogin">-->
<!--                        <uni-list-chat-->
<!--                            title="新建歌单"-->
<!--                            :to="pageLogin"-->
<!--                            avatar="/icon/icon-add.png"-->
<!--                        ></uni-list-chat>-->
<!--                    </uni-list>-->

                    <uni-list :border="false" v-for="(item,index) in playList" :key="index">
                        <uni-list-chat
                            :title="item.name"
                            :to='"/pages/songsList/songsList?id="+item.id+"&title=个人收藏"'
                            :avatar="item.coverImgUrl"
                            :note='item.trackCount+"首"'></uni-list-chat>
                    </uni-list>

                </view>
                <view v-if="tabIndex === 1" class="view">
                    播客
                </view>
                <view v-if="tabIndex === 2" class="view">
                    动态
                </view>

            </view>
        </view>

        <Sidebar ref="sidebar" />
    </view>
    <musicBar></musicBar>
</template>

<style lang="scss" scoped>
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        overflow-y: scroll;
        position: relative;
        background-color: rgba(125, 118, 124, 0.9);

        .header {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 30rpx;
            box-sizing: border-box;
        }

        .main {
            flex: 1;
            display: flex;
            flex-direction: column;

            .login {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 15rpx 0;

                .login-img {
                    width: 140rpx;
                    height: 140rpx;
                    margin: 15rpx;
                    border-radius: 50%;
                }
            }

            .connect {
                flex: 1;
                padding-bottom: 80rpx;
                background-color: #FFFFFF;
                border-radius: 40rpx 40rpx 0 0;

                .toggle {
                    position: sticky;
                    top: 0;
                    z-index: 1;
                    background-color: #FFFFFF;
                    border-radius: 40rpx 40rpx 0 0;
                }
            }
        }

    }
</style>