<script setup>
   import { defineProps } from 'vue';
   import CaurPlay from './curplay.vue'
   import Setting from "../../components/showlist/setting.vue"
   import {onLoad} from '@dcloudio/uni-app'
   import { SongdetailApi } from '../../base/api/index.js'
   import { ref } from "vue";
   import { useMusicstore } from '../../store/music.js'
   
   
   const showList=ref(false) //例表显示隐藏
   const selectSong=ref([])
   const useStore=useMusicstore ()
   console.log(useStore.musicLove) //当前歌曲
   
   //跳转播放页
   const playPage=()=>{
     uni.switchTab({
   	 url: `/pages/musicPlay/musicPlay`
     })
   }
  
   
   
</script>


<template>
	<view>
		<view class="footer" >
			<view class="circle" @click="playPage">
				<view class="img"><image :src="useStore.musicLove.al.picUrl" ></image></view>
			</view>
			<view class="name" @click="playPage">{{useStore.musicLove.name}}</view>
			<p class="logo">
				<image v-if="useStore.isPlay " src="../../icon/songlist/icon-bfang.png"/>
				<image v-else   src="../../icon/songlist/icon-xiaz.png"/>
			</p>
			<p class="logo2" @click="showList=!showList"><image src="../../icon/songlist/icon-mus.png"/></p>

		</view>
		<CaurPlay v-if="showList" />
	</view>
	
	
</template>


<style lang="scss" scoped>
	.footer{
		height:rpx(40);
		display:flex;
		align-items: center;
		padding:0 rpx(10);
	}
	
	.circle{
		width:rpx(39);
		height:rpx(39);
		border-radius: 50%;
		background: black;
		display: flex;
		align-items: center;
		justify-content: center;
		.img{
			width:rpx(25);
			height:rpx(25);
			border-radius: 50%;
			background: lightblue;
			image{
				width:100%;
				height:100%;
				border-radius: 50%;
			}
		}
	}
	
	.name{
		flex:1;
		margin:0 rpx(8);
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow:ellipsis;
		font-size: rpx(14);
	}
	.logo{
		width:rpx(25);
		height:rpx(25);
		margin:0 rpx(15);
		z-index: 100;
		// 图片
		image{
			width:rpx(25);
			height:rpx(25);
		}
	}
	.logo2{
		width:rpx(20);
		height:rpx(25);
		z-index: 100;
		image{
			width:rpx(23);
			height:rpx(23);
		}
	}
</style>