import {defineStore} from 'pinia'
import {ref} from 'vue'
import {switchTab} from '/base/utils'
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
            if (res.code === 200) {
                setAccount(res.data.profile)
            }
        })
    }

    const setAccount = (value) => {
        profile.value = value
    }

    //获取用户信息
    const getAccount = () => {
        userAccount().then(res=>{
            if(res.code === 200){
                userDetailApi(res.account.id).then(res=>{
                    setAccount(res.profile)
                })
            }
        })
    }

    //登录
    const getLogin = (type, account = '', password = '') => {
        switch (type) {
            case 'email':
                emailLoginApi(account, password).then(res => {
                    storeData(res)
                })
                break;
            case 'phone':
                phoneLoginApi(account, password).then(res => {
                    storeData(res)
                })
                break;
            case 'anonimous':
                anonimousLoginApi().then(res => {
                    if (res.code === 200) {
                        uni.setStorageSync('curCookie', res.cookie)
                        profile.value = res
                        switchTab("/pages/index/index")
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
                    uni.setStorageSync('curCookie', res.cookie)
                    clearInterval(interval)
                    switchTab("/pages/index/index")
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
    const storeData = (res) => {
        if (res.code === 200) {
            uni.setStorageSync('curCookie', res.cookie)
            setAccount(res.profile)
            switchTab("/pages/index/index")
        }
    }

    return {
        profile,
        getProfile,
        getLogin,
        getCheckQr,
        getAccount
    }
});