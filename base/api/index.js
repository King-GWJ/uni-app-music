export const baseUrl = "http://zyxcl.xyz/music_api"


// 封装请求函数
export const request = ({ url, method = 'GET', data = {}, header = {} }) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method,
			data: {
				cookie: uni.getStorageSync('curCookie') || '',
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

//搜索接口
export const searchApi = (val) =>{
	uni.request({
		// #ifdef H5
		url: '/music_api/search/suggest',
		// #endif
		// #ifndef H5
		url: baseUrl + '/music_api/search/suggest',
		// #endif
		data:{
			keywords: val
		},
		success:res =>{
			return res
		},
		fail: res => {
			
			return res
		}
	})
}


//轮播图
export const bannerApi = () => {
	return request({ url: '/banner' })
}
