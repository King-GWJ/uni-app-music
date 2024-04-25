

<script setup>
	import { ref } from "vue";
	import {useMusicstore} from '../../store/music.js'
	const useStore=useMusicstore()
	console.log(useStore.musicHistory)  //历史播放
	const curIndex=ref(0)
	console.log(useStore.musicHistory[curIndex]?.music)
	
</script>


<template>
	<view class="history">
		<view class="swiper">
			<view class="album"   @click="curIndex=index"   v-for="(item,index)  in  useStore.musicHistory" :key="item.name">
				<view class="avatar"></view>
				<view class="content">{{item.name}}</view>
			</view>
		</view>
		<view class="allSong">
			<view class="songText">全部歌曲{{useStore.musicHistory.length}}首</view>
			<view class="logos">
				<image src="../../icon/songlist/icon-load.png"></image>
				<image src="../../icon/songlist/icon-tianjia.png"></image>
				<image src="../../icon/songlist/icon-laj.png"></image>
			</view>
		</view>
		<view class="songs" v-for="song in useStore.musicHistory[curIndex]?.music">
			<view class="item">{{song.name}}</view>
			·
			<view class="name">{{song.ar.map(item=>item.name).join('/')}}</view>
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
			padding:0 rpx(5);
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
			height:rpx(290);
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
</style>