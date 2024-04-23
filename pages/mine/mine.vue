<script setup>
    import {onShow} from '@dcloudio/uni-app'
    import Sidebar from "../../components/sidebar/Sidebar.vue";
    import {ref} from "vue";
    import {navigateTo} from "../../base/utils";
    import {useUserStore} from "../../store/user";

    const pageSearch = '/pages/search/search'
    const pageLogin = '/pages/login/login'

    const userStore = useUserStore()
    const profile = userStore.profile;
    const isLogin = ref(false)
    const sidebar = ref(null)
    const curCookie = uni.getStorageSync("curCookie");

    onShow(() => {
        isLogin.value = !!curCookie;
        if (!profile) {
            userStore.getAccount()
        }
    })

</script>

<template>
    <view class="content">
        <view class="header">
            <uni-icons class="bars" type="bars" size="24" @click="()=>{sidebar.showDrawer()}"></uni-icons>
            <uni-icons class="bars" type="search" size="24" @click="navigateTo(pageSearch)"></uni-icons>
        </view>
        <view class="main">
            <view class="login">
                <image :src="profile?.avatarUrl" mode="widthFix" class="login-img"></image>
                <view class="login-name" v-show="isLogin">
                    {{ profile?.nickname }}
                </view>
                <view class="login-name" v-show="!isLogin" @click="()=>{navigateTo(pageLogin)}">
                    立即登录
                </view>
            </view>
            <view class="connect">

            </view>
        </view>

        <Sidebar ref="sidebar" />

    </view>
</template>

<style lang="scss" scoped>
    .content {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #7d767c;

        .header {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 30rpx;
            box-sizing: border-box;
        }

        .main {
            width: 100%;
            height: 100%;

            .login {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                margin-top: 20rpx;

                .login-img {
                    width: 140rpx;
                    height: 140rpx;
                    margin: 15rpx;
                    background: $theme-color;
                    border-radius: 50%;
                }
            }

            .connect {
                width: 100%;
                height: 100%;
                background-color: #FFFFFF;
                border-radius: 40rpx 40rpx 0;
                margin-top: 100rpx;
            }
        }

    }
</style>