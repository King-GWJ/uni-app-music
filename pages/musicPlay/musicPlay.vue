<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {songDetailApi ,lyricApi , songUrlApi,SongdetailApi} from "../../base/api/index.js"
	import {watch ,computed ,ref} from "vue"
	import { useMusicstore } from '../../store/music.js'
	
	const useStore = useMusicstore()
	console.log(useStore.musicList); // 音乐全部数组
	console.log(useStore.musicIndex); //  当前音乐下标
	console.log(useStore.musicLove); // 当前音乐
	const subtract = (num) => {  // 上一首/下一首
		useStore.musicSubtract(num)
	}
</script>





<template>
	<view class="musicPlay">
		 <view class="header">
			 <p><image src="../../icon/songlist/icon-xiala.png"/></p>
			 <view class="bangdan"></view>
			 <p><image src="../../icon/songlist/icon-fenxiang.png"/></p>
		 </view>
		 <!-- 蒙层 -->
		 <view class="mask"></view>
		 <view class="circle">
			<view class="outer">
				<view class="undertone">
				    <view class="image"></view>
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
				 <p></p>
				 <p></p>
			 </view>
			<p class="collent"><image src="../../icon/songlist/icon-collent.png"/></p>
			<p class="talk"><image src="../../icon/songlist/icon-talk.png"/></p>
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
			 	<image src="../../icon/songlist/icon-danquxunhuan.png"/>
			 </span>
			 <view class="code">
				 <p @click="subtract(-1)"><image src="../../icon/songlist/icon-shangyishou.png"/></p>
				 <p><image src="../../icon/songlist/icon-bofang.png"/></p>
				 <p @click="subtract(1)"><image src="../../icon/songlist/icon-next.png"/></p>
			 </view>
			 <span>
			 	<image src="../../icon/songlist/icon-liebiao.png"/>
			 </span>
		 </view>
		 <footer>
			 <p><image src="../../icon/songlist/icon-qiehuan.png"/></p>
			 <p><image src="../../icon/songlist/icon-xiazai.png"/></p>
			 <p><image src="../../icon/songlist/icon-liebiao.png"/></p>
		 </footer>
		<!-- <audio src="" ></audio> -->
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
		// background:black;
		.outer{
			width:rpx(200);
			height:rpx(200);
			border-radius: 50%;
			background: rgba(255,255,255,0.3);
			left:25%;
			top:20%;
			position:relative;
			border:1px solid #808080;
			
		}
		.undertone{
			width:rpx(180);
			height:rpx(180);
			background:repeating-radial-gradient(black,black rpx(6), #1c1c1c rpx(8));
			border-radius: 50%;
			position:absolute;
			top:rpx(10);
			left:rpx(10);
		}
		
		.sun{
			width:rpx(180);
			height:rpx(180);
			border-radius:50%;
			background:-webkit-linear-gradient(45deg,transParent 35%,
			rgba(255,255,255,0.2) 45%,
			rgba(255,255,255,0.3) 50%,
			rgba(255,255,255,0.2) 55%,
			transParent);
			position:absolute;
			top:23%;
			left:28%;
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
		padding:0 rpx(20);
		.songTitle{
			flex:1;
		}
		.collent{
			width:rpx(30);
			height:rpx(30);
			margin:0 rpx(25);
			image{
				width:rpx(30);
				height:rpx(30);
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
		p{
			image{
				width:rpx(27);
				height:rpx(27);
			}
		}
	}
	
	// 压唱片的部分
	.fixed{
		width:rpx(90);
		height:rpx(120);
		position: absolute;
		top:rpx(40);
		right:rpx(120);
		image{
			width:rpx(90);
			height:rpx(120);
		}
	}
	
</style>
