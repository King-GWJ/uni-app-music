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
    return request({url: '/search/suggest', data: {keywords: val}})
}

// //搜索接口
export const searchApi = (val) => {
    return request({url: '/search', data: {keywords: val}})
}

// 登录
export const loginApi = (email, password) => {
    console.log("ggg", email)
    console.log("ggg", password)
    return request({
        url: '/login',
        method: 'GET',
        data: {
            email,
            password
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
    return request({url: '/banner'})
}

//所有榜单
export const toplistApi = () => {
    return request({url: '/toplist'})
}

//推荐歌单
export const personalizedApi = (num) => {
    return request({url: '/personalized', data: {limit: num}})
}
