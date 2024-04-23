<script setup>
    import {onShow} from '@dcloudio/uni-app'
    import {defineExpose, ref} from "vue";
    import {navigateTo} from '/base/utils'
    import {useUserStore} from "../../store/user";
    import {logoutApi} from "../../base/api";

    const userStore = useUserStore()
    const profile = userStore.profile;

    const showLeft = ref(null)
    const isLogin = ref(false)
    const pageLogin = '/pages/login/login'

    const curCookie = uni.getStorageSync("curCookie");

    onShow(() => {
        isLogin.value = !!curCookie;
        if(!profile) {
            userStore.getAccount()
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
                uni.setStorageSync('curCookie', "")
                isLogin.value = false
                closeDrawer()
            }
        })
    }
</script>

<template>
    <uni-drawer ref="showLeft" mode="left" :width="300">
        <view class="close">
            <view class="user" v-show="isLogin">
                <image :src="profile?.avatarUrl" mode="widthFix" class="user-img"></image>
                <view class="user-name">
                    {{ profile?.nickname }}
                </view>
            </view>
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
</template>

<style scoped lang="scss">
    .close {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20rpx;

        .user {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;

            .user-img {
                width: 100rpx;
                height: 100rpx;
                margin: 15rpx;
                background: $theme-color;
                border-radius: 50%;
            }
        }
    }

</style>