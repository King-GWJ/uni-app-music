import {defineStore} from 'pinia'
import {ref} from 'vue'
import {emailLoginApi, phoneLoginApi, loginStatusApi} from '/base/api'

export const useUserStore = defineStore('user', () => {

    //用户信息
    const account = ref(null)
    const profile = ref(null)

    const getProfile = () => {
        loginStatusApi().then(res => {
            profile.value = res.data.profile
            profile.value = res.data.account
        })
    }

    const getLogin = (email, password) => {
        emailLoginApi(email, password).then(res => {
            uni.setStorageSync('userCookie', res.cookie)
            uni.setStorageSync('userToken', res.token)
            account.value = res.account
            profile.value = res.profile
            getProfile()
        })
    }


    return {
        account,
        profile,
        getProfile,
        getLogin
    }
});