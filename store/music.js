import {
	defineStore
} from "pinia"
import {
	watch,
	ref
} from "vue"
import {
	songUrlApi,
	mvDetailApi,
} from "../base/api/index.js"

export const useMusicstore = defineStore("musicStore", () => {

	//音频对象
	const audio = uni.createInnerAudioContext()
	//是否在播放
	const isplay = ref(false)
	//歌单例表
	const songList = ref([])
	//切换页面时候的全部音乐列表
	const musicList = ref([])
	//切换页面时候选择的音乐数据
	const musicLove = ref([])
	//切换页面时候的音乐下标
	const musicIndex = ref(null)
	//音乐的url
	const musicBack = ref('')
	//播放模式 1顺序播放 2单曲循环 3随机播放
	const musicMode = ref(2)
	// 播放的计时器
	const musicTimer = ref(null)
	// 音乐播放时长
	const musicTime = ref({
		points: '00',
		seconds:'00'
	})
	// 音乐当前播放时间
	const musicNowTime = ref({
		points: '00',
		seconds:'00'
	})
	// 历史播放音乐
	const musicHistory = ref([])
	// 音乐类型
	const musicType = ref('')
	// MV
	const musicLookMv = ref('')

	// 调接口播放音乐
	const musicApi = () => {
		songUrlApi(musicList.value[musicIndex.value].id,'standard').then(res => {
			musicBack.value = res.data[0].url
			audio.src = musicBack.value
			audio.autoplay = true
			audio.loop = true
			isplay.value = true
		})
	}
	
	// 清除定时器，音乐播放时间归零
	const musicTimerRemove = () => {
		clearInterval(musicTimer.value)
		musicNowTime.value.seconds = '00'
		musicNowTime.value.points = '00'
		musicTime.value.seconds = '00'
		musicTime.value.points = '00'
	}

	// 获取全部音乐，当前音乐，当前音乐下标
	const musicAllList = (l,t,i,n) => { 
		musicList.value = l
		musicLove.value = t
		musicIndex.value = i
		musicType.value = n
		clearInterval(musicTimer.value)
		const arr = musicHistory.value.find(item => item.name === musicType.value)
		if(arr){
			const index = musicHistory.value.findIndex(item => item.name === musicType.value)
			if(musicHistory.value[index].music.find(item => item.name === musicLove.value.name)){
			}else{
				musicHistory.value[index].music.push(musicLove.value)
			}
			
		}else{
			musicHistory.value.push({
				name: musicType.value,
				music: [musicLove.value]
			})
			
		}
	}

	// 搜索调这个方法
	const musicSearch = (t,i) => {
		// 搜索的音乐push到musicList全部数组里面 并且放在数组第一个位置
		// t点击的音乐信息 i 音乐的id
		const index = musicList.value.findIndex(item => item.id === t.id)
		if(index === -1){
			musicList.value.unshift(t)
			musicLove.value = musicList.value[0]
			musicIndex.value = 0
		}else{
			musicLove.value = musicList.value[index]
			musicIndex.value = index
		}
		musicTimerRemove()
		musicApi()
	}
	
	// 监听音乐数组改变获取音乐播放的rul
	const musicUrlList =watch(musicLove,(newValue,oldValue) => {
		musicLove.value = musicList.value[musicIndex.value]
		musicApi()
		musicTimerRemove()
	})
	
	// 监听当前播放音乐下标改变获取rul
	const musicUrlIndex = watch(musicIndex,(newValue,oldValue) => {
		musicLove.value = musicList.value[musicIndex.value]
		musicTimerRemove()
		musicApi()
	})

	// 切换上一首或者下一首  同时判断是不是第一首或者最后一首
	const musicSubtract = (num) => {
		clearInterval(musicTimer.value)
		isplay.value = false
		musicIndex.value += num
		if (musicIndex.value < 0) {
			musicIndex.value = musicList.value.length - 1
		} else if (musicIndex.value === musicList.value.length) {
			musicIndex.value = 0
		}
	}

	//播放 和 暂停
	const play=()=>{
		if(!audio.paused){
			audio.pause()
			isplay.value = false
			clearInterval(musicTimer.value)
		}else{
			audio.play()
			isplay.value = true
			computeMusic()
		}
	}

	//切换播放模式
	const musicToggle = () => {
		musicMode.value += 1
		if (musicMode.value > 3) {
			musicMode.value = 1
		}
	}

	//添加到下一首
	const musicBehind = (t) => {
		if(musicList.value.length === 0){
			musicList.value.push(t)
			musicLove.value = t
			musicIndex.value = 0
		}else{
			musicList.value.splice(musicIndex.value,0,t)
		}
		
	}
	
	// 获取音乐时长
	audio.onCanplay(() => {
		computeMusic()
	});
	
	// 计算音乐播放时间
	const computeMusic = () => {
		musicTime.value.points = Math.floor(audio.duration / 60)  > 10 ? Math.floor(audio.duration / 60) + '' : '0' + Math.floor(audio.duration / 60)
		musicTime.value.seconds = Math.floor(audio.duration - Number(musicTime.value.points) * 60) > 10 ? Math.floor(audio.duration - Number(musicTime.value.points) * 60) + '' : '0' + Math.floor(audio.duration - Number(musicTime.value.points) * 60)
		musicTimer.value = setInterval(() => {
			let a = Number(musicNowTime.value.seconds) + 1
			musicNowTime.value.seconds = a >= 10 ? a + '' : '0' + a
			if(musicNowTime.value.seconds === '60'){
				musicNowTime.value.seconds = '00' 
				let b = Number(musicNowTime.value.points) + 1
				musicNowTime.value.points = b >= 10 ? b + '' : '0' + b
			}
			if(musicNowTime.value.seconds === musicTime.value.seconds && musicNowTime.value.points === musicTime.value.points){
				musicTimerRemove()
				if(musicMode.value === 1){
					// 列表循环
					audio.loop = false
					musicSubtract(1)
				}else if(musicMode.value === 2){
					// 单曲循环
					audio.loop = true
				}else if(musicMode.value === 3){
					// 随机播放
					audio.loop = false
					let i = musicList.value.length -1
					musicSubtract(Math.floor(Math.random() * i) + 1)
				}
			}
		},1000)
	}

	// 定义一个函数，将时间戳转换为年月日格式
	const timestampToYMD = (timestamp) => {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}.${month}.${day}`;
	}
	
	
	//删除一个历史播放记录
	const musicHistoryOne = (i,t) => {
		// i 当前什么类型音乐的下标 t 当前音乐信息
		const index = musicHistory.value[i].music.findIndex(item => item.id === t.id)
		musicHistory.value[i].music.splice(index,1)
	}
	
	//删除所有历史播放记录
	const musicHistoryAll = () => {
		musicHistory.value = []
	}

	//mv
	const musicMv = (id) => {
		mvDetailApi(id).then(res => {
			musicLookMv.value = res.data.url
		})
	}
	return {
		audio,
		isplay,
		play,
		musicAllList,
		musicList,
		musicIndex,
		musicLove,
		musicSubtract,
		musicSearch,
		musicBack,
		musicMode,
		musicToggle,
		musicBehind,
		musicTime,
		musicNowTime,
		musicHistory,
		musicType,
		timestampToYMD,
		musicHistoryOne,
		musicHistoryAll,
		musicMv,
		musicLookMv,
	}
})