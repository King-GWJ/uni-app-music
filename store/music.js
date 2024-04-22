import { defineStore } from "pinia"
import { computed , watch , ref} from "vue"
import { songDetailApi , songUrlApi} from "../base/api/index.js"

export const useMusicstore=defineStore("music",()=>{
	
	//音频对象
	const audio=uni.createInnerAudioContext()
	//当前播放列表
	const curPlaylist=ref(0)
	//当前播放歌曲下标
	const curIndex=ref(0)
	//是否在播放
	const isplay=ref(false)
	
	//当前播放歌曲详情
	const curSongdetail=computed(()=>{
		// 判断播放列表是否为空
		if(curSonglist.length===0) return {}
		// 从播放列表中获取当前歌曲的详情
		// ...curPlaylist.value[state.curIndex]
		// arStr : curPlaylist.value[curIndex.value].ar.map(v => v.name).join('/')
	})
	
	
	
	const playSongs=async(ids)=>{
		//获取歌曲详情
		const res=await songDetailApi(ids)
		console.log(res)
		//获取音乐url
		const resUrl=await songUrlApi(id)
		curPlaylist.value = res.songs.map(item => {
		      return {
		        ...item,
		        url: resUrl.data.find(v => v.id === item.id).url
		      }
		    })
		    curIndex.value = 0
		
		
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
		play
	}
	
})