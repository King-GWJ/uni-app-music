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
            if (res.code === 200) {
                storeData(res)
            }
        })
    }

    //获取用户信息
    const getAccount = () => {
        userAccount().then(res => {
            if (res.code === 200 && res.account) {
                userDetailApi(res.account.id).then(res => {
                    storeData(res)
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
                        storeData(res)
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
                    storeData(res)
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
    const storeData = (res) => {
        if (res.cookie) {
            uni.setStorageSync('curCookie', res.cookie)
        }

        if (res.profile) {
            profile.value = res.profile
            uni.setStorageSync('profile', res.profile)
        }
        uni.navigateBack()
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
        getAccount,
        setProfileData
    }
});

