export const baseUrl = "http://zyxcl.xyz/music_api"


<<<<<<< HEAD
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
=======
export const getLoginCellphone = () => {
	console.log('调用接口');
	uni.request({

		url: baseUrl + '/music_api/login/cellphone',

		success: res => {
			console.log(res);
		},
		fail: err => {
			console.log(err);
		}
>>>>>>> dym
	})
}



//搜索建议接口
export const searchSuggestApi = (val) =>{
	return request({url:'/search/suggest',data:{keywords:val}} )
}

// //搜索接口
export const searchApi = (val) =>{
	return request({url:'/search',data:{keywords:val}})
}


//轮播图
export const bannerApi = () => {
	return request({ url: '/banner' })
}
<<<<<<< HEAD

//所有榜单
export const toplistApi = () => {
	return request({ url: '/toplist' })
}

//推荐歌单
export const personalizedApi = (num) => {
	return request({ url: '/personalized',data:{limit : num} })
}
=======
>>>>>>> dae45fb736d3bb4c6b07eac8a9904c1ea6471b60
