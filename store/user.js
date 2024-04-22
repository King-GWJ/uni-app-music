import {defineStore} from 'pinia'
import {ref} from 'vue'
import {
    emailLoginApi,
    phoneLoginApi,
    loginStatusApi,
    anonimousLoginApi, qrCheckApi,
} from '/base/api'

export const useUserStore = defineStore('user', () => {

    //用户信息
    const account = ref(null)
    const profile = ref(null)

    const getProfile = () => {
        loginStatusApi().then(res => {
            if (res.code === 200) {
                account.value = res.data.account
                profile.value = res.data.profile
            }
        })
    }

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
                        uni.navigateBack()
                    }
                })
                break;

        }
    }

    const getCheckQr = (key) => {
        const interval = setInterval(() => {
            qrCheckApi(key).then(res => {
                if (res.code === 803) {
                    uni.setStorageSync('curCookie', res.cookie)
                    clearInterval(interval)
                    uni.navigateBack()
                }
            })
        }, 2000);

        setTimeout(() => {
            if (interval) {
                clearInterval(interval)
            }
        }, 30000)
    }

    const storeData = (res) => {
        if (res.code === 200) {
            uni.setStorageSync('curCookie', res.cookie)
            account.value = res.account
            profile.value = res.profile
            uni.navigateBack()
        }
    }

    return {
        account,
        profile,
        getProfile,
        getLogin,
        getCheckQr
    }
});