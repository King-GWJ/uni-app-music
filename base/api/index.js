export const baseUrl = "http://zyxcl.xyz"


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
	})
}