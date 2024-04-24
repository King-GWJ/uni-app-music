import {
    defineStore
} from 'pinia'
import {
    ref
} from 'vue'
import {
    emailLoginApi,
    phoneLoginApi,
    loginStatusApi,
    anonimousLoginApi,
    qrCheckApi,
    userAccount,
    userDetailApi
} from '/base/api'

export const useUserStore = defineStore('user', () => {

    //用户信息
    const profile = ref(null)

    //获取登录状态
    const getProfile = () => {
            loginStatusApi().then(res => {
                if (res.data.code === 200) {
                    storeData(res.data, false)
                }
            })
    }

    //获取用户信息
    const getAccount = () => {
        userAccount().then(res => {
            if (res.code === 200 && res.account) {
                userDetailApi(res.account.id).then(res => {
                    storeData(res.false)
                })
            }
        })
    }

    //登录
    const getLogin = (type, account = '', password = '') => {
        switch (type) {
            case 'email':
                emailLoginApi(account, password).then(res => {
                    storeData(res, true)
                })
                break;
            case 'phone':
                phoneLoginApi(account, password).then(res => {
                    storeData(res, true)
                })
                break;
            case 'anonimous':
                anonimousLoginApi().then(res => {
                    if (res.code === 200) {
                        storeData(res, true)
                    }
                })
                break;
        }
    }

    //二维码登录
    const getCheckQr = (key) => {
        const interval = setInterval(() => {
            qrCheckApi(key).then(res => {
                if (res.code === 803) {
                    storeData(res, true)
                    clearInterval(interval)
                }
            })
        }, 2000);

        setTimeout(() => {
            if (interval) {
                clearInterval(interval)
            }
        }, 30000)
    }

    //存储用户信息
    const storeData = (res, isLogin) => {
        if (res.cookie) {
            uni.setStorageSync('curCookie', res.cookie)
        }

        if (res.profile) {
            profile.value = res.profile
            uni.setStorageSync('profile', res.profile)
        }

        if (isLogin) {
            uni.navigateBack()
        }
    }

    const setProfileData = () => {
        if (profile.value) {
            return profile.value
        } else {
            if (uni.getStorageSync("profile")) {
                return uni.getStorageSync("profile")
            } else {
                getAccount()
            }
        }
        return ''
    }

    return {
        profile,
        getProfile,
        getLogin,
        getCheckQr,
        setProfileData
    }
});

