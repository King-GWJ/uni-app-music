<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {songDetailApi,lyricApi,songUrlApi,SongdetailApi} from "../../base/api/index.js"
	import {watch,computed,ref} from "vue"
	import {useMusicstore} from '../../store/music.js'
    import Curplay from "../../components/showlist/curplay.vue"
	import Share from "../../components/showlist/share.vue"
	import Lyric from "../../components/showlist/lyric.vue"
    import {reLaunch} from "../../base/utils";

	const useStore = useMusicstore() 
	const showLyric=ref(false) //歌词显示隐藏
	const showPlay=ref(false)  //歌曲信息显示隐藏
	const shareShow=ref(false) //分享显示隐藏
	const isCollect=ref(false) //添加收藏
    
	onLoad(()=>{
		uni.hideTabBar()
	})
	
	//切换歌曲
	const subtract = (num) => { // 上一首/下一首
		useStore.musicSubtract(num)
	}
	
    //点击收藏
	const Collect=()=>{
		isCollect.value=!isCollect.value
	}

    //返回上一页
	const back=()=>{
        const launchOptionsSync = uni.getLaunchOptionsSync();
        reLaunch("/" + launchOptionsSync.path)
        uni.showTabBar()
	 } 

</script>



<template>
	<view class="musicPlay">
		<view class="background"><image :src="useStore.musicLove.al.picUrl" ></image></view>
		<view class="header">
			<p @click="back" class="top">
				<image src="../../icon/songlist/icon-bback.png"></image>
			</p>
			
			<p @click="shareShow=true" class="top">
				<image src="../../icon/songlist/icon-fenxiang.png" />
			</p>
		</view>
		<!-- 蒙层 -->
		<view class="mask"></view>
		<view class="circle">
			<view  :class="[useStore.isplay?'outerActive':'outer']">
				<view class="undertone">
					<!-- <view class="masks"></view>
					<view class="backImage"><image :src="useStore.musicLove.al.picUrl" ></image></view> -->
					<view class="images" ><image :src="useStore.musicLove.al.picUrl" ></image></view>
				</view>
			</view>
			<view class="sun" @click="showLyric=true"></view>
		</view>
		<!-- 压唱片的部分 -->
		<view class="fixed">
			<image src="../../icon/songlist/needle-ab.png"></image>
		</view>
		<view class="title">
			<view class="songTitle">
				<p class="nameSog"><p class="name">{{useStore.musicLove.name}}  {{useStore.musicLove.alia[0]}}<span>{{useStore.musicLove.pop}}</span> </p></p>
				<p class="singer">{{useStore.musicLove.ar.map(v=>v.name).join('/')}}</p>
			</view>
			<p class="collent" @click="Collect()">
				<image v-if="isCollect"  src="../../icon/songlist/icon-collect.png"></image>
				<image v-else src="../../icon/songlist/icon-collent.png"></image>
			</p>
			<p class="talk">
				<image src="../../icon/songlist/icon-talk.png" />
			</p>
		</view>
		<view class="volume" >
			<view class="time">{{useStore.musicNowTime.points}}:{{useStore.musicNowTime.seconds}}</view>
			<view class="slider">
				<slider  class="sliders" @sliderChange="schedule(1)" min="0" :max="Number(useStore.musicTime.points) * 60 + Number(useStore.musicTime.seconds)" :value="Number(useStore.musicNowTime.points) * 60 + Number(useStore.musicNowTime.seconds)" disabled="true" block-size="20" activeColor="#1890ff" step></slider>
			</view>
			<view class="time">{{useStore.musicTime.points}}:{{useStore.musicTime.seconds}}</view>
		</view> 
		<view class="play">
			<span @click="useStore.musicToggle()">
				<image  v-if="useStore.musicMode === 1 " src="../../icon/songlist/icon-liebiaoxunhuan.png" />
				<image  v-else-if="useStore.musicMode === 2 " src="../../icon/songlist/icon-danquxunhuan.png" />
				<image  v-else-if="useStore.musicMode === 3 " src="../../icon/songlist/icon-meiti-suijibofang.png" />
			</span>
			<view class="code">
				<p @click="subtract(-1)">
					<image src="../../icon/songlist/icon-shangyishou.png" />
				</p>

				<p @click="useStore.play()">
					<image v-if="useStore.isplay"  src="../../icon/songlist/icon-a.png" />
					<image v-else src="../../icon/songlist/icon-bofang.png" />
				</p>
				<p @click="subtract(1)">
					<image src="../../icon/songlist/icon-next.png" />
				</p>
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
		<Curplay  v-if="showPlay" @click.stop.prevent="showPlay=false"/>
		<Share v-if="shareShow" @click.stop.prevent="shareShow=false"/>
		<Lyric v-if="showLyric" @click.stop="showLyric=flase"  />
	</view>
</template>


<style lang="scss" scoped>
	
	.musicPlay{
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
		background: #165F7D;
	}
    .background{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
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
		.bangdan{
			flex:1;
		}
		.top{
			margin-top:rpx(20);
		}
	}
	// 蒙层
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(80px);
	}
	.circle{
		flex:1;
		position: relative;
		.outer {
			width: rpx(260);
			height: rpx(260);
			border-radius: 50%;
			background: rgba(200, 200, 200, 0.5);
			left: 16%;
			top: 20%;
			position: relative;
         }
		 .outerActive{
			 animation: rotate 2s linear infinite;
			 width: rpx(260);
			 height: rpx(260);
			 border-radius: 50%;
			 background: rgba(200, 200, 200, 0.5);
			 left: 16%;
			 top: 20%;
			 position: relative;
		 }
        
		 @keyframes rotate {
		 		  from {
		 		    transform: rotate(0deg);
		 		  }
		 		  to {
		 		    transform: rotate(360deg);
		 		  }
		}
		 	
		 
		.undertone {
			width: rpx(240);
			height: rpx(240);
			background: repeating-radial-gradient(black, black rpx(6), #1c1c1c rpx(8));
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		
        .backImage{
        	width: rpx(240);
        	height: rpx(240);
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			z-index: 1;
			image{
				width: rpx(240);
				height: rpx(240);
				border-radius: 50%;
			}
        }
		.masks{
			position: fixed;
			top: 0;
			left: 0;
			width: rpx(240);
			height: rpx(240);
			// background: rgba(200, 200, 200, .2);
			backdrop-filter: blur(30px);
			z-index: 2;
			border-radius: 50%;
			color:red;
		}
		.sun {
			width: rpx(240);
			height: rpx(240);
			border-radius: 50%;
			background: -webkit-linear-gradient(45deg, transParent 35%,
						rgba(255, 255, 255, 0.2) 45%,
						rgba(255, 255, 255, 0.3) 50%,
						rgba(255, 255, 255, 0.2) 55%,
						transParent);
			position: absolute;
			top: 52%;
			left: 51%;
			transform: translate(-50%,-50%);
			border-radius: 50%;
		}
		.images {
			width: rpx(160);
			height: rpx(160);
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			box-shadow: 0 1px 3px 2px lightslategrey;
			z-index: 5;
			image{
				width: rpx(160);
				height: rpx(160);
				border-radius: 50%;
				box-shadow: 0 1px 3px 2px lightslategrey;
			}
		}
		
		
			.image{
				width:rpx(125);
				height:rpx(125);
				border-radius: 50%;
				background: skyblue;
				position: absolute;
				left:rpx(30);
				top:rpx(27);
			}
	}
	.title{
		height:rpx(60);
		// background:indianred;
		display: flex;
		align-items: center;
		padding: 0 rpx(25);
        z-index: 1;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-webkit-box-ordinal: vertical;
		// color:#DCDCDC;
		.songTitle {
			flex:1;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			.nameSog{
				display: flex;
				color:#F5F5F5;
			}
			.name{
				height:rpx(25);
				display: flex;
				flex-wrap: nowrap;
				overflow: hidden;
			}
		}
		span{
			display: block;
			font-size:rpx(12);
			text-align: center;
			width:rpx(40);
			height:rpx(17);
			line-height: rpx(16);
			border-radius: rpx(5);
			background: rgba(200, 200, 200, 0.2);
			margin-top:rpx(5);
			margin-left:rpx(10);
		}
        .singer{
			margin-top:rpx(2);
			font-size:rpx(13);
			color:#DCDCDC;
			width:rpx(160);
			overflow:hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			-webkit-box-ordinal: vertical;
		}
		.collent {
			width: rpx(30);
			height: rpx(30);
			margin: 0 rpx(25);

			image {
				width: rpx(30);
				height: rpx(30);
			}
		}
		.talk{
			width:rpx(30);
			height:rpx(30);
			image{
				width:rpx(30);
				height:rpx(30);
			}
		}
		
		
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
	
	.play{
		height:rpx(100);
		// background:mediumvioletred;
		padding:0 rpx(30);
		display: flex;
		align-items: center;
		span{
			display:block;
			width:rpx(30);
			height:rpx(30);
			image{
				width:100%;
				height:100%;
			}
		}
		.code{
			flex:1;
			// background: #808080;
			display:flex;
			padding:0 rpx(15);
			justify-content: space-around;
			p{
				display: flex;
				image{
					width:rpx(27);
					height:rpx(27);
				}
			}
		}
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
	
	// 压唱片的部分
	.fixed {
		width: rpx(96);
		height: rpx(140);
		position: absolute;
		top: rpx(55);
		right: rpx(116);
		image {
			width: rpx(90);
			height:rpx(150);
			position: absolute;
			top: 0;
			left: 30%;
			transform-origin: rpx(10) rpx(110);
			transform: rotate(-10deg);
		}
	}
	
</style>
