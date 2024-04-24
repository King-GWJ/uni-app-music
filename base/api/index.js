// export const baseUrl = "http://121.89.213.194:5001"
export const baseUrl = "https://zyxcl.xyz/music/api"

// 封装请求函数
export const request = ({
	url,
	method = 'GET',
	data = {},
	header = {}
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: "/music_api" + url,
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
export const searchApi = (val, offset) => {
	return request({ url: '/search', data: { keywords: val, offset: offset } })
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

// 退出登录
export const logoutApi = () => {
	return request({
		url: '/logout',
		method: 'GET'
	})
}

// 退出登录
export const userAccount = () => {
	return request({
		url: '/user/account',
		method: 'GET'
	})
}

// 获取用户详情
export const userDetailApi = (uid) => {
	return request({
		url: '/user/detail',
		method: 'GET',
		data: {
			uid,
		}
	})
}
// 获取用户歌单
export const userPlayListApi = (uid) => {
	return request({
		url: '/user/playlist',
		method: 'GET',
		data: {
			uid,
			timestamp: Date.now()
		}
	})
}

//轮播图
export const bannerApi = () => {
	return request({
		url: '/banner'
	})
}

// 博客列表
export const voiceApi = (val) => {
	return request({
		url: '/voicelist/search',
		data: {
			limit: val.limit,
			offset: val.offset
		}
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

//所有榜单
export const toplistApi = () => {
	return request({
		url: '/toplist'
	})
}

//推荐歌单
export const personalizedApi = (num) => {
	return request({
		url: '/personalized',
		data: {
			limit: num
		}
	})
}

//推荐新音乐
export const newsongApi = (num) => {
	return request({
		url: '/personalized/newsong',
		data: {
			limit: num
		}
	})
}

//每日推荐歌曲
export const songsApi = () => {
	return request({
		url: '/recommend/songs',
	})
}

//热搜列表
export const hotApi = () => {
	return request({
		url: '/search/hot'
	})
}



//获取歌单所有歌曲
export const trackAllApi = (id, limit, offset) => {
	return request({
		url: '/playlist/track/all',
		data: {
			id: id,
			limit: limit,
			offset: offset
		}
	}, )
}


// 最新专辑
export const newestApi = () => {
	return request({
		url: '/album/newest',
	})
}

// 电台banner
export const djBannerApi = () => {
	return request({
		url: '/dj/banner',
	})
}

// 电台推荐
export const personalizeApi = (val) => {
	return request({
		url: '/dj/personalize/recommend',
		data: {
			limit: val
		}
	})
}
// 歌单详情
export const SongdetailApi = (id) => {
	return request({ url: '/playlist/detail', data: { id } })
}

// 歌曲详情
export const songDetailApi = (ids) => {
	return request({
		url: '/song/detail',
		data: {
			ids
		}
	})
}

// 歌词
export const lyricApi = (id) => {
	return request({
		url: '/lyric',
		data: {
			id
		}
	})
}

// 评论
export const commentApi = (type, id) => {
	return request({
		url: `/comment/${type}`,
		data: {
			id
		}
	})
}

// 音乐播放url
export const songUrlApi = (id,level) => {
  return request({
    url: '/song/url/v1',
    data: {
      id: id,
	  level: level
    }
  })
}

// 用户关注列表
export const userFollowApi = (val) => {
  return request({
    url: '/user/follows',
    data: {
      uid: val.uid,
    }
  })
}

// 获取用户粉丝列表
export const userFollowedsApi = (val) => {
  return request({
    url: '/user/followeds',
    data: {
      uid: val.uid,
	  limit:val.limit || 30
    }
  })
}

//歌单添加删除歌曲
export const playListChange = (op,pid,tracks) =>{
	return request({
		url:'/playlist/tracks',
		data:{
			op,
			pid,
			tracks,
			timestamp: Date.now()
		}
	})
}
