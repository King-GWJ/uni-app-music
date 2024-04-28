
<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import Share from "../../components/showlist/share.vue"
	 import Curplay from "../../components/showlist/curplay.vue"
	import { useMusicstore } from '../../store/music.js'
	import { useUserStore } from '../../store/user.js'
	import {ref} from  'vue'
	
	const list=ref(['歌词','百科'])
	const useStore=useMusicstore ()
	const shareShow=ref(false) //分享显示隐藏
	const isCollect=ref(false) //添加收藏
	const showPlay=ref(false) 
	const curIndex=ref(0)  //当前下标
	const lyricGc=ref()
	
	//返回上一页
	const Backprve=()=>{
		uni.navigateBack({
			delta: 1
		});
	}

    //点击收藏
    const Collect=()=>{
    	isCollect.value=!isCollect.value
    }
	
	//获取歌词数据
	const lyric=useStore.musicLyric.split('\n')
    lyricGc.value = lyric.map(v => 
		v.slice(11)
	)
	// 拖拽播放进度
	const musicChange = (e) => {
		console.log(e.detail.value);
		useStore.musicTransform(e.detail.value)
	}
	
	
	const changeTab=(e)=>{
		curIndex.value=e.detail.current
	}
	
</script>


<template>
	<view class="lyric" >
		<!-- 顶部 -->
		<view class="header" @click.stop="">
			<p class="img" @click="Backprve">
				<image src="../../icon/songlist/icon-bback.png"></image>
			</p>
			<view class="title">
				<view>{{useStore.musicLove.name}}</view>
				<!-- <view>{{123}}</view> -->
			</view>
			<p  class="img" @click="shareShow=true">
				<image src="../../icon/songlist/icon-fenxiang.png" />
			</p>
		</view>
		<!-- 歌词 -->
		<view class="lyricContent">
			<view class="nav"  @click.stop="">
				<view class="geci">
					<view :class="['text',{active:curIndex===index}]" @click="curIndex=index" v-for="(item,index) in list" :key="item">{{item}}</view>
				</view>
			</view>
			<swiper class="swiper" :current="curIndex" @change="changeTab" >
				<swiper-item  > 
					<view class="swiper-item uni-bg-red">
						<ul>
							<li :class="curIndex===index" v-for="(item,index) in lyricGc" :key="item" >{{item}}</li>
						</ul>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<view class="music baik"></view>
						<view class="music song"></view>
						<view class="songList"></view>
						<view class="boke"></view>
					</view>
				</swiper-item>
			</swiper>		
		</view>
		<!-- 添加收藏 -->
		<view class="playLogo" @click.stop="">
			 <view class="collect">
			 	<view class="col" @click="Collect()">
			 		<image v-if="isCollect"  src="../../icon/songlist/icon-collect.png"></image>
			 		<image v-else src="../../icon/songlist/icon-collent.png"></image>
			 	</view>
			 	<p class="talk">
			 		<image src="../../icon/songlist/icon-sh.png" />
			 	</p>
			 </view>
			 <view class="volume" >
			 	<view class="time">{{useStore.musicNowTime.points}}:{{useStore.musicNowTime.seconds}}</view>
				<view class="slider">
					<slider  class="sliders" @change="musicChange"  min="0" :max="Number(useStore.musicTime.points) * 60 + Number(useStore.musicTime.seconds)" :value="Number(useStore.musicNowTime.points) * 60 + Number(useStore.musicNowTime.seconds)"  block-size="12" activeColor="#1890ff"></slider>
				</view>
				<view class="time">{{useStore.musicTime.points}}:{{useStore.musicTime.seconds}}</view>
			 </view> 
			 <!-- 播放 -->
			 <view class="play">
			 	<view class="mode" @click="useStore.musicToggle()">
			 		<image  v-if="useStore.musicMode === 1 " src="../../icon/songlist/icon-liebiaoxunhuan.png" />
			 		<image  v-else-if="useStore.musicMode === 2 " src="../../icon/songlist/icon-danquxunhuan.png" />
			 		<image  v-else-if="useStore.musicMode === 3 " src="../../icon/songlist/icon-meiti-suijibofang.png" />
			 	</view>
			 	<!-- 切换 -->
			 	<view :class="['code',{codeClick: useStore.musicBack.length < 1}]">
			 		<image @click="subtract(-1)"  src="../../icon/songlist/icon-shangyishou.png"></image>
			 		<view @click="useStore.play()">
			 			<image v-if="useStore.isplay"  src="../../icon/songlist/icon-a.png" />
			 			<image v-else src="../../icon/songlist/icon-bofang.png" />
			 		</view>
			 		<image   @click="subtract(1)" src="../../icon/songlist/icon-nn.png"></image>
			 	</view>
			 	<span @click="showPlay=true">
			 		<image src="../../icon/songlist/icon-liebiao.png" />
			 	</span>
			 </view>
			 <footer>
			 	<p>
			 		<image src="../../icon/songlist/icon-qiehuan.png" />
			 	</p>
			 	<p>
			 		<image src="../../icon/songlist/icon-xiazai.png" />
			 	</p>
			 	<p >
			 		<image src="../../icon/songlist/icon-shenglve.png" />
			 	</p>
			 </footer>
		</view>
		<Share v-if="shareShow" @click.stop.prevent="shareShow=false"/>   //分享页
		<Curplay  v-if="showPlay" @click.stop.prevent="showPlay=false"/>  //当前和历史播放
	</view>
	
</template>



<style lang="scss" scoped>
	
	.lyric{
		position: fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		background:#696969;
		// background:rgba(0,0,0,.5)
		z-index: 2;
		color:#D3D3D3;
		font-size: rpx(14);
		
	}
	image{
		width:rpx(27);
		height:rpx(27);
	}
	
   .header{
		height:rpx(40);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0 15px;
		z-index: 1;
		p{
			width:rpx(27);
			height:rpx(27);
			image{
				width:rpx(27);
				height:rpx(27);
			}
		}
		.title{
			margin-top:20px;
		}
		.bangdan{
			flex:1;
		}
		.img{
			margin-top:rpx(20);
		}
		
	}
	
	// <!-- 歌词 -->
	.lyricContent{
		margin-top:rpx(25);
		height:rpx(370);
		display: flex;
		flex-direction: column;
		.nav{
			height:rpx(40);
			display: flex;
			align-items: center;
			justify-content: center;
			.geci{
				width:rpx(150);
				height:rpx(30);
				border:1px solid #C0C0C0;
				border-radius: rpx(15);
				display: flex;
				align-items: center;
				.text{
					width:80px;
					height:rpx(25);
					line-height: rpx(25);
					margin:0 rpx(5);
					text-align: center;
					color:#fff;
					border-radius: rpx(15);
					&.active{
						background: #C0C0C0;
					}
				}
			}
			
		}
		.swiper{
			display:flex;
			justify-content: center;
			align-items: center;
			height:310px;
			overflow-y: hidden;
		}
		// 歌词
		ul{
			margin-top:rpx(10);
			list-style: none;
			overflow-y: auto;
			height: 310px;
			padding:0;
			margin:0;
			padding-bottom:rpx(10);
			li{
				text-align: center;
				line-height: rpx(35);
				transition: opacity 0.5s;
				.active {
				  color:#F0E68C; 
				}
			}
			
		}
		.music{
			height:rpx(100);
			background-color: rgba(200, 200, 200, 0.5)
		}
	}
	.playLogo{
		display: flex;
		flex-direction: column;
	}
	
	.collect{
		display: flex;
		height:rpx(40);
		padding:0 rpx(20);
		justify-content: space-between;
		// background:skyblue;
	}
	.volume{
		height:rpx(30);
		padding:0 rpx(15);
		display:flex;
		justify-content: space-between;
		.slider{
			flex:1;
			margin-top: rpx(-4);
		}
		.time{
			width:rpx(40);
			height:100;
			line-height:rpx(30);
			text-align: center;
			color:#fff;
		    z-index: 1;
		}
		
	}
	// <!-- 播放 -->
	.play{
		display: flex;
		align-items: center;
		height:rpx(90);
		padding:0 rpx(20);
		justify-content: space-between;
		
	}
	// <!-- 切换 -->
	.code{
		display: flex;
		height:rpx(50);
		align-items: center;
		width:rpx(190);
		justify-content: space-between;	
	}
	footer{
		height:rpx(60);
		// background: darkred;
		padding:0 rpx(60);
		display:flex;
		align-items: center;
		justify-content: space-between;
	
		p {
			image {
				width: rpx(25);
				height: rpx(25);
			}
		}
	}
	
</style>