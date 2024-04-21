export const baseUrl = "http://121.89.213.194:5001/"

// 封装请求函数
export const request = ({url, method = 'GET', data = {}, header = {}}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: "/music_api" + url,
            method,
            data: {
                cookie: uni.getStorageSync('userCookie') || '',
                ...data
            },
            header,
            withCredentials: true, // 跨域请求携带 cookie
            success: res => {
                resolve(res.data)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}

//搜索建议接口
export const searchSuggestApi = (val) => {
	return request({
		url: '/search/suggest',
		data: {
			keywords: val
		}
	})
}

// //搜索接口
export const searchApi = (val) => {
	return request({
		url: '/search',
		data: {
			keywords: val
		}
	})
}

// 游客登录
export const anonimousLoginApi = () => {
    return request({
        url: '/register/anonimous',
        method: 'GET'
    })
}

// 邮箱登录
export const emailLoginApi = (email, password) => {
    return request({
        url: '/login',
        method: 'GET',
        data: {
            email,
            password
        }
    })
}

// 手机号登录
export const phoneLoginApi = (phone, password) => {
    return request({
        url: '/login/cellphone',
        method: 'GET',
        data: {
            phone,
            password
        }
    })
}

// 二维码 key 生成接口
export const qrKeyApi = () => {
    return request({
        url: '/login/qr/key',
        method: 'GET',
        data: {
            timestamp: Date.now()
        }
    })
}

// 二维码生成接口
export const qrCreateApi = (key) => {
    return request({
        url: '/login/qr/create?qrimg',
        method: 'GET',
        data: {
            key,
            timestamp: Date.now()
        }
    })
}

// 二维码检测扫码状态接口
export const qrCheckApi = (key) => {
    return request({
        url: '/login/qr/check',
        method: 'GET',
        data: {
            key,
            timestamp: Date.now()
        }
    })
}

// 登录状态
export const loginStatusApi = () => {
    return request({
        url: '/login/status',
    })
}

//轮播图
export const bannerApi = () => {
	return request({
		url: '/banner'
	})
}

// 博客列表
export const voiceApi = () => {
	return request({
		url: '/voicelist/search'
	})
}

// 数字专辑-新碟上架
export const valbumApi = (val) => {
	return request({
		url: '/album/list',
		data: {
			limit: val.limit,
			offset: val.offset
		}
	})
}