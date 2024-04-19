export const baseUrl = "http://zyxcl.xyz"

export const getLoginCellphone = () => {
	console.log('调用接口');
	uni.request({
		// #ifdef H5
		url: '/music_api/login/cellphone',
		// #endif
		// #ifndef H5
		url: baseUrl + '/music_api/login/cellphone',
		// #endif
		success: res => {
			console.log(res);
		},
		fail: err => {
			console.log(err);
		}
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

