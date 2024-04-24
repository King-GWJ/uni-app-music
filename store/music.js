import { defineStore } from "pinia"
import { computed , watch , ref} from "vue"
import { songDetailApi , songUrlApi} from "../base/api/index.js"

export const useMusicstore=defineStore("musicStore",()=>{
	
	//音频对象
	const audio=uni.createInnerAudioContext()
	//当前播放列表
	const curPlaylist=ref([])
	//当前播放歌曲下标
	const curIndex=ref(0)
	//是否在播放
	const isplay=ref(false)
	//歌单例表
	const songList=ref([])
	//切换页面时候的全部音乐列表
	const musicList = ref([])
	//切换页面时候选择的音乐数据
	const musicLove = ref([])
	//切换页面时候的音乐下标
	const musicIndex = ref(0)
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

	
	// 获取全部音乐，当前音乐，当前音乐下标
	const musicAllList = (l,t,i) => { 
		musicList.value = l
		musicLove.value = t
		musicIndex.value = i
		console.log(l);
		console.log('下标',i);
	}
	
	// 搜索调这个方法
	const musicSearch = (item,id) => {
		// 搜索的音乐push到musicList全部数组里面 并且放在数组第一个位置
		// item 点击的音乐信息 id 音乐的id
		musicList.value.unshift(item)
		musicIndex.value = 0
		musicLove.value = musicList.value[musicIndex.value]
		
	}
	
	// 监听音乐数组改变获取音乐播放的rul
	const musicUrl = watch(musicLove,(newValue,oldValue) => {
		clearInterval(musicTimer.value)
		musicNowTime.value.seconds = '00'
		musicNowTime.value.points = '00'
		musicTime.value.seconds = '00'
		musicTime.value.points = '00'
		songUrlApi(musicList.value[musicIndex.value].id,'standard').then(res => {
			console.log(res);
			musicBack.value = res.data[0].url
			audio.src=musicBack.value
			audio.autoplay = true
			audio.loop = true
		})
	})
	
	// 切换上一首或者下一首  同时判断是不是第一首或者最后一首
	const musicSubtract = (num) => {
		isplay.value = false
		musicIndex.value += num
		if(musicIndex.value < 0){
			musicIndex.value = musicList.value.length -1
		}else if(musicIndex.value === musicList.value.length){
			musicIndex.value = 0
		}
		musicLove.value = musicList.value[musicIndex.value]
	}
	
	//播放
	const play=()=>{
		console.log(isplay.value);
		if(!audio.paused){
			audio.pause()
			isplay.value = true
			clearInterval(musicTimer.value)
		}else{
			audio.play()
			isplay.value = false
			computeMusic()
		}
	}
	
	//切换播放模式
	const musicToggle = () => {
		musicMode.value += 1
		if(musicMode.value > 3){
			musicMode.value = 1
		}
	}
	
	//添加到下一首
	const musicBehind = (t,i) => {
		musicList.value.splice(musicIndex.value,0,t)
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
				clearInterval(musicTimer.value)
				musicNowTime.value.seconds = '00'
				musicNowTime.value.points = '00'
				musicTime.value.seconds = '00'
				musicTime.value.points = '00'
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
		},50)
	}
	
	return{
		audio,
		curPlaylist,
		curIndex,
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
	}
	
})