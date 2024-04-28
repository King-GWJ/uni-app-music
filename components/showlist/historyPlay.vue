

<script setup>
	import { ref } from "vue";
	import {useMusicstore} from '../../store/music.js'
	
	const useStore=useMusicstore()
	console.log(useStore.musicHistory)  //历史播放
	const curIndex=ref(0)
	console.log(useStore.musicHistory[curIndex]?.music)
	let showPop=ref(false)
	
	//点击确认清空列表，返回首页
	const affirm=()=>{
		console.log(8);
		showPop=!showPop
		useStore.musicHistory=[]
	}
	
	
	
</script>


<template>
	<view class="history">
		<view class="swiper"  v-if="useStore.musicHistory.length>0" >
			<view class="album" @click="curIndex=index"   v-for="(item,index)  in  useStore.musicHistory" :key="item.name">
				<view class="avatar">
					<image :src="item.music[0].al.picUrl"></image>
				</view>
				<view class="content">{{item.name}}</view>
			</view>
		</view>
		<view class="allSong">
			<view class="songText">全部歌曲{{useStore.musicHistory.length}}首</view>
			<view class="logos">
				<image src="../../icon/songlist/icon-load.png"></image>
				<image src="../../icon/songlist/icon-tianjia.png"></image>
				<image  @click="showPop=!showPop" src="../../icon/songlist/icon-laj.png"></image>
			</view>
		</view>
		<view class="songs" v-for="song in useStore.musicHistory[curIndex]?.music">
			<view class="item">{{song.name}}</view>
			<!-- ·
			<view class="name">{{song.artists.map(item=>item.name)}}</view> -->
		</view>
		<!-- 提示弹窗 -->
		<view class="pop" v-if="showPop" >
			<view class="uni">
				<view class="text">确定要清空播放列表？</view>
				<view class="btn">
					<button @click="showPop=false">取消</button>
					<button @click="affirm" class="affirm">确认</button>
				</view>
			</view>
		</view>
	</view>	
</template>


<style lang="scss" scoped>
	.history{
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
		.swiper{
			display:flex;
			height:rpx(50);
			padding:rpx(6) rpx(5);
			align-items: center;
			&::-webkit-scrollbar{height:0px};
			overflow: hidden;
			overflow-x: auto;
			.album{
				background:#eee;
				width:rpx(190);
				height:rpx(40);
				border-radius: rpx(5);
				display:flex;
				flex-shrink: 0;
				align-items: center;
				margin:0 rpx(5);
				.avatar{
					width:rpx(40);
					height:rpx(40);
					border-radius: rpx(5);
					background: royalblue;
					image{
						width:100%;
						height:100%;
						border-radius: rpx(5);
					}
				}
				.content{
					margin:0 rpx(10);
					font-size: rpx(13);
					font-family: "黑体";
				}
			}
			image{
				width:rpx(20);
			}
		}
		.allSong{
			height:rpx(40);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 rpx(15);
			font-size: rpx(14);
			.logos{
				display: flex;
				align-items: center;
			}
			image{
				width:rpx(18);
				height:rpx(18);
				margin:0 rpx(10);
			}
		}
		.songs{
			height:rpx(40);
			overflow:hidden;
			overflow-y: auto;
			display: flex;
			line-height: rpx(40);
			overflow:hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			-webkit-box-ordinal: vertical;
			.item{
				height:rpx(40);
				display:flex;
				align-items: center;
				justify-content: space-between;
				padding:0 rpx(15);
				
			}
			.name{
				font-size:rpx(13);
				color:	#696969;
				overflow: hidden;
				width:rpx(110);
				white-space: nowrap;
				text-overflow: ellipsis;
				-webkit-box-ordinal: vertical;
			}
		}
	}
	// 提示弹窗
	.pop{
		// display: none;
		position: fixed;
		width:100%;
		height:100%;
		left:0;
		top:0;
		background: rgba(0,0,0,.5);
	}
	
	.uni{
		width:rpx(300);
		height:rpx(100);
		background: #fff;
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		border-radius: rpx(8);
	}
	.text{
		padding:rpx(15) rpx(15);
		font-size: rpx(14);
		color:#696969;
	}
	.btn{
		display: flex;
		position: absolute;
		right:0;
		bottom:rpx(6);
		button{
			width:rpx(70);
			height:rpx(25);
			line-height: rpx(25);
			font-size: rpx(13);
			outline: 0;
			border:0;
			background: #fff;
			margin:0 rpx(5);
			color:red;
		}
	}
	
</style>