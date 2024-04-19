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