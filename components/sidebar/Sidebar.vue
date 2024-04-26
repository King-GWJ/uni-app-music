<script setup>
    import {onShow} from '@dcloudio/uni-app'
    import {defineExpose, ref} from "vue";
    import {navigateTo, switchTab} from '/base/utils'
    import {useUserStore} from "../../store/user";
    import {logoutApi} from "../../base/api";
    import sidebarData from "/base/data/sidebarData";


    const userStore = useUserStore()

    const profile = ref(userStore.profile)
    const showLeft = ref(null)
    const isLogin = ref(false)
    const pageLogin = '/pages/login/login'
    const pageMine = '/pages/mine/mine'

    const curCookie = uni.getStorageSync("curCookie");

    onShow(() => {
        isLogin.value = !!curCookie;
        if (!profile.value) {
            profile.value = userStore.setProfileData()
        }
    })
    const showDrawer = () => {
        showLeft.value.open()
    }
    const closeDrawer = () => {
        showLeft.value.close()
    }

    defineExpose({
        showDrawer,
        closeDrawer
    });

    //退出登录
    const getLogout = () => {
        logoutApi().then(res => {
            if (res.code === 200) {
                uni.removeStorageSync("curCookie")
                uni.removeStorageSync("profile")
                isLogin.value = false
                closeDrawer()
            }
        })
    }

    //去登录
    const getLogin = () => {
        if (isLogin.value) {
            switchTab(pageMine)
        } else {
            navigateTo(pageLogin)
        }
        closeDrawer()
    }
</script>

<template>
    <uni-drawer ref="showLeft" mode="left" :width="300">
        <view class="drawer">
            <view class="header">
                <view class="user">
                    <image :src="profile ? profile.avatarUrl :'/icon/icon-avatar.png'" mode="widthFix" class="user-img"></image>
                    <view class="user-name"
                          @click="getLogin()">
                        <text>
                            {{ profile ? profile.nickname : '立即登录' }}
                        </text>
                        <uni-icons type="right"></uni-icons>
                    </view>
                </view>
            </view>
            <view class="main">
<!--                <uni-card :is-shadow="true" :isFull="false" v-for="(value ,index) in sidebarData" :key="index">-->
<!--                    <view class="view" v-for="item in value" :key="item.key">-->
<!--                        <image :src="item.icon" mode="widthFix"></image>-->
<!--                        <text :style="{color: item.color}">{{ item.title }}</text>-->
<!--                    </view>-->
<!--                </uni-card>-->
                <uni-card :is-shadow="true" :isFull="false" v-if="isLogin">
                    <view class="view">
                        <image src="/icon/icon-toggle.png" mode="widthFix"></image>
                        <text>切换账号</text>
                    </view>
                    <view class="view"
                          @click="getLogout()"
                    >
                        <image src="/icon/icon-switch.png" mode="widthFix"></image>
                        <text style="color: #FF0000">退出登录</text>
                    </view>
                </uni-card>
            </view>
        </view>
    </uni-drawer>
</template>

<style scoped lang="scss">
    .drawer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f7f7f7;
    }

    .header {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20rpx;

        .user {
            display: flex;
            align-items: center;

            .user-img {
                width: 50rpx;
                height: 50rpx;
                margin: 15rpx;
                border-radius: 50%;
            }

            .user-name {
                font-size: 14px;
                display: flex;
                align-items: center;
            }
        }
    }
    .main{
        flex: 1;
        overflow: hidden;
        overflow-y: scroll;
        color: #666d77;
        image{
            width: 40rpx;
            height: 40rpx;
            margin-right: 10rpx;
        }
        .view{
            display: flex;
            align-items: center;
            margin-top: 18rpx;
            &:first-child{
                margin-top: 0;
            }
        }
    }
</style>