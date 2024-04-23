<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		songDetailApi,
		lyricApi,
		songUrlApi,
		SongdetailApi
	} from "../../base/api/index.js"
	import {
		watch,
		computed,
		ref
	} from "vue"
	import {
		useMusicstore
	} from '../../store/music.js'

	const useStore = useMusicstore() 
	const list=useStore.musicList   // 所有音乐数据
	console.log(list)
	const currIndex=useStore.musicIndex //  当前音乐下标
	console.log(currIndex) 
	const currSong=useStore.musicLove  // 当前音乐
	console.log(currSong)
	
	const subtract = (num) => { // 上一首/下一首
	console.log(num)
		useStore.musicSubtract(num)
		useStore.isPlay
		console.log(useStore.musicBack)
	}
	
	useStore.audio.autoplay = true;
	
	
	
	useStore.audio.src=useStore.musicBack
	
	
	
	// const aaa = watch(useStore.musicBack,(a,b) =>{
	// 	console.log(useStore.musicBack);
	// 	useStore.audio.src=useStore.musicBack
	// })
	
	
	
	
	//播放图片改变
	const playBtn=computed(()=>{
		return  useStore.isPlay? '../../icon/songlist/icon-bofang.png':'../../icon/songlist/icon-a.png'
	})
		
		
	//返回上一页
	const backPrve=()=>{
		uni.navigateBack({
		  delta: 1 
		});
	}

</script>





<template>
	<view class="musicPlay">
		<view class="background"></view>
		<view class="header">
			<p @click="backPrve">
				<image src="../../icon/songlist/icon-xiala.png" />
			</p>
			<view class="bangdan"></view>
			<p>
				<image src="../../icon/songlist/icon-fenxiang.png" />
			</p>
		</view>
		<!-- 蒙层 -->
		<view class="mask"></view>
		<view class="circle">
			<view class="outer">
				<view class="undertone">
					<view class="images"><image :src="currSong.al.picUrl" ></image></view>
				</view>
			</view>
			<view class="sun"></view>
		</view>
		<!-- 压唱片的部分 -->
		<view class="fixed">
			<image src="../../icon/songlist/needle-ab.png"></image>
		</view>
		<view class="title">
			<view class="songTitle">
				<p class="nameSog"><p class="name">{{currSong.name}}  {{currSong.alia[0]}}<span>{{currSong.pop}}</span> </p></p>
				<p class="singer">{{currSong.ar.map(v=>v.name).join('/')}}</p>
			</view>
			<p class="collent">
				<image src="../../icon/songlist/icon-collent.png" />
			</p>
			<p class="talk">
				<image src="../../icon/songlist/icon-talk.png" />
			</p>
		</view>
		<view class="volume">
			<view class="time">0</view>
			<view class="slider">
				<slider  class="sliders" min="0" max="100" value="0" disabled="true" block-size="10" activeColor="#1890ff" step></slider>
			</view>
			<view class="time">100</view>
		</view>
		<view class="play">
			<span>
				<image src="../../icon/songlist/icon-danquxunhuan.png" />
			</span>
			<view class="code">
				<p @click="subtract(-1)">
					<image src="../../icon/songlist/icon-shangyishou.png" />
				</p>
				<p @click="play">
					<image :src="playBtn" />
				</p>
				<p @click="subtract(1)">
					<image src="../../icon/songlist/icon-next.png" />
				</p>
			</view>
			<span>
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
			<p>
				<image src="../../icon/songlist/icon-shenglve.png" />
			</p>
		</footer>
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
	
	.header{
		height:rpx(40);
		// background: palevioletred;
		display: flex;
		align-items: center;
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
	}
	// 蒙层
	.mask{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: rgba(0,0,0,.2);
		backdrop-filter: blur(7px);
	}
	.circle{
		flex:1;
		position: relative;
		.outer {
			width: rpx(260);
			height: rpx(260);
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.3);
			left: 16%;
			top: 20%;
			position: relative;
			border: 1px solid #808080;

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
			top: 55%;
			left: 51%;
			transform: translate(-50%,-50%);
		}

		.images {
			width: rpx(160);
			height: rpx(160);
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			box-shadow: 0 1px 3px 2px black;
			image{
				width: rpx(160);
				height: rpx(160);
				border-radius: 50%;
				box-shadow: 0 1px 3px 2px black;
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
		// color:#DCDCDC;
		.songTitle {
			flex:1;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			.nameSog{
				display: flex;
				color:#D3D3D3;
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
			color:	#B0C4DE;
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
		right: rpx(115);

		image {
			width: rpx(90);
			height: rpx(120);
		}
	}
	
</style>
