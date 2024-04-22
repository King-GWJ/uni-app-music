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
	
	// 获取全部音乐，当前音乐，当前音乐下标
	const musicAllList = (l,t,i) => { 
		musicList.value = l
		musicLove.value = t
		musicIndex.value = i
		console.log(musicLove);
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
	const musicUrl = watch(musicIndex,(newValue,oldValue) => {
		songUrlApi(musicList.value[musicIndex.value].id,'standard').then(res => {
			musicBack.value = res.data[0].url
			console.log(musicBack);
		})
	})
	
	// 切换上一首或者下一首  同时判断是不是第一首或者最后一首
	const musicSubtract = (num) => {
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
		if(audio.pushed){
			audio.play()
			isplay.value=true
		}else{
			audio.pushe()
			isplay.value=false
		}
	}
	
	return{
		audio,
		curPlaylist,
		curIndex,
		isplay,
		curSongdetail,
		playSongs,
		play,
		musicAllList,
		musicList,
		musicIndex,
		musicLove,
		musicSubtract,
		musicSearch,
		musicBack,
		
	}
	
})