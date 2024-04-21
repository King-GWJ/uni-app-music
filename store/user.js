import {defineStore} from 'pinia'
import {ref} from 'vue'
import {
    emailLoginApi,
    phoneLoginApi,
    loginStatusApi,
    anonimousLoginApi,
    qrKeyApi,
    qrCreateApi
} from '/base/api'

export const useUserStore = defineStore('user', () => {

    //用户信息
    const account = ref(null)
    const profile = ref(null)


    const getProfile = () => {
        loginStatusApi().then(res => {
            account.value = res.data.account
            profile.value = res.data.profile
            if (res.code === 200 && res.data.profile && res.data.account) {
                anonimousLoginApi().then(res => {
                    if (res.code === 200) {
                        uni.setStorageSync('userCookie', res.cookie)
                        profile.value = res
                    }
                })
            }
        })
    }

    const getLogin = (type, account, password) => {
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
        }
    }

    const storeData = (res) => {
        uni.setStorageSync('userCookie', res.cookie)
        uni.setStorageSync('userToken', res.token)
        account.value = res.account
        profile.value = res.profile
    }

    return {
        account,
        profile,
        getProfile,
        getLogin,
    }
});