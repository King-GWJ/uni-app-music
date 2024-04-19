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

//
 // export const playlistDetailApi = (id) => {
	//   return request({ url: '/playlist/detail', data: { id } })
	// }
	export const dragonBalltApi = () => {
	  return request({ url: '/music_api/homepage/dragon/ball' })
	}