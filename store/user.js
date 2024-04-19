import {defineStore} from 'pinia'
import {ref} from 'vue'
import {loginApi, loginStatusApi} from '/base/api'


export const useUserStore = defineStore('user', () => {
  const formData = ref({
    email: '',
    password: ''
  })
  //用户信息
  const userInfo = ref(null)

  const profile = ref(null)

  const getProfile = () => {
    loginStatusApi().then(res => {
      console.log("ggg:::",res)
      profile.value = res.data.profile
      profile.value = res.data.account
    })
  }

  const getLogin = (email, password) => {
    loginApi(email, password).then(res=>{
      console.log("ggg:",res)
      uni.setStorageSync('userCookie', res.cookie)
      uni.setStorageSync('userToken', res.token)
      userInfo.value = res.account
      profile.value = res.profile
      getProfile()
    })
  }


  return {
    formData,
    userInfo,
    profile,
    getProfile,
    getLogin
  }
});