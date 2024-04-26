
<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { lyricApi } from '../../base/api/index.js'
	import { useMusicstore } from '../../store/music.js'
	import { useUserStore } from '../../store/user.js'
	
	const lista=ref(['歌词','百科'])
	const useStore=useMusicstore ()
	const curIndex=ref(0)  //当前下标
	
	//返回上一页
	const Backprve=()=>{
		uni.navigateBack({
			delta: 1
		});
	}
	
	// const useStore=useUserStore()
	// console.log( useStore.profile)
	
	
	// onLoad((options)=>{
	// 	console.log(options.id)
	// 	lyricApi(options.id).then(res =>{
	// 		console.log(res)
	// 	})
	// })
	
	
	
</script>





<template>
	<view class="lyric">
		<!-- 顶部 -->
		<view class="header">
			<p class="img">
				<image src="../../icon/songlist/icon-bback.png"></image>
			</p>
			<view class="title">
				<view>{{123}}</view>
				<view>{{123}}</view>
			</view>
			<p  class="img">
				<image src="../../icon/songlist/icon-fenxiang.png" />
			</p>
		</view>
		<!-- 歌词 -->
		<view class="lyricContent">
			<view class="nav">
				<view class="geci">
					<view class="text" v-for="(item,index) in lista" :key="item">999</view>
				</view>
			</view>
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				>
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
			</swiper>		
		</view>
		<!-- 添加收藏 -->
		<view class="collect">
			<p class="click">
				<image src="../../icon/songlist/icon-collent.png" />
			</p>
			<p class="talk">
				<image src="../../icon/songlist/icon-sh.png" />
			</p>
		</view>
		<view class="volume" >
			<view class="time"></view>
			<view class="slider">
				<slider  class="sliders" @sliderChange="schedule(1)" disabled="true" block-size="20" activeColor="#1890ff" step></slider>
			</view>
			<view class="time"></view>
		</view> 
		<!-- 播放 -->
		<view class="play">
			<span>
				<image src="../../icon/songlist/icon-xxh.png" />
				<!-- <image src="../../icon/songlist/icon-danquxunhuan.png" />
				<image src="../../icon/songlist/icon-meiti-suijibofang.png" /> -->
			</span>
			<!-- 切换 -->
			<view class="code">
				<p>
					<image src="../../icon/songlist/icon-shangyishou.png" />
				</p>
		
				<p>
					<image src="../../icon/songlist/icon-a.png" />
				</p>
				<p>
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
			<p >
				<image src="../../icon/songlist/icon-shenglve.png" />
			</p>
		</footer>
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
		margin-top:rpx(20);
		height:rpx(390);
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
			.swiper{
				display:flex;
				justify-content: center;
				align-items: center;
			}
		}
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