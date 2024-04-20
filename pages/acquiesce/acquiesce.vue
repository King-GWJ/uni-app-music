<template>
	<view class="box">
		<view class="header">
			<view class="date">
				<view class="dateNumber">
					<view class="dateMonth">
						<view class="dateMonthA">
							{{month}}
						</view>
						<view class="dateDay">
							/ {{day}}
						</view>
					</view>
				</view>
				<view class="luck">
					<view class="">
						查看今日运势＞
					</view>
					<view class="history">
						历史日推
					</view>
				</view>
			</view>
			
			
		</view>
		<view class="all">
			<view class="allImg">
				<image src="../../icon/songlist/red-bofang.png" mode=""></image>
			</view>
			<view class="allText">
				播放全部
				<view class="">
					VIP 歌曲免费畅听
				</view>
			</view>
			<view class="allLiebiao">
				<image src="../../icon/songlist/icon-danquxunhuan.png" mode=""></image>
			</view>
			<view class="allLiebiao">
				<image src="../../icon/songlist/icon-liebiao.png" mode=""></image>
			</view>
		</view>
		<view class="musicList">
			<view class="music" v-for="(item,index) in list" :key="item.id">
				<view class="musicImg">
					<image :src="item.picUrl" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						{{item.name}}
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

	// uni.setNavigationBarColor({
	// 	frontColor: '#ffffff',
	// 	    backgroundColor: '#ff0000',
	// 	    animation: {
	// 	        duration: 400,
	// 	        timingFunc: 'easeIn'
	// 	    }
	// })
	import { onReady } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	import { recommendedMusicApi } from '../../base/api/index.js'
	const list = ref([])
	recommendedMusicApi().then(res => {
		list.value = res.result
		console.log(res.result);
	})
	const currentDate = new Date()
	const month = currentDate.getMonth() + 1
	const day = currentDate.getDate()
	onReady(() => {
		uni.setNavigationBarTitle({
			title: ['新的标题','123'],
			frontColor: '#ffffff',
			backgroundColor: '#ff0000',
			animation: {
			    duration: 400,
			    timingFunc: 'easeIn'
			}
		});
	})

</script>

<style lang="scss" scoped>
*{
	box-sizing: border-box;
}
.box{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar{width:0px};
	background-color: #FEFEFE;
	.header{
		width: 100%;
		height: rpx(140);
		background: linear-gradient(to bottom, #7B7F92, #E5E6E8);
		padding-right: rpx(10);
		padding: 0 rpx(10);
		color: #fff;
		display: flex;
		.date{
			width: 100%;
			.dateNumber{
				.dateMonth{
					display: flex;
					align-items: center;
					.dateMonthA{
						font-size: rpx(36);
					}
					.dateDay{
						margin-left: rpx(6);
						font-size: rpx(20);
					}
				}
				
			}
			.luck{
				font-size: rpx(18);
				display: flex;
				justify-content: space-between;
				.history{
					padding: 0 rpx(20);
					background-color:#9396A3 ;
					border-radius: rpx(100);
				}
			}
		}
	}
	.all{
		width: 100%;
		padding: 0 rpx(10);
		height: rpx(40);
		padding: 0 rpx(10);
		display: flex;
		align-items: center;
		justify-content: space-between;
		.allImg{
			width: rpx(40);
			height: rpx(40);
			margin-right: rpx(10);
			>image{
				width: 100%;
				height: 100%;
			}
		}
		.allLiebiao{
			width: rpx(26);
			height: rpx(26);
			margin-right: rpx(10);
			>image{
				width: 100%;
				height: 100%;
			}
		}
		.allText{
			font-size: rpx(16);
			display: flex;
			flex: 1;
			>view{
				padding: rpx(2);
				border: solid rpx(1) #E5D1AA;
				border-radius: rpx(6);
				font-size: rpx(12);
				color: #D3A03B;
				font-weight: bold;
			}
		}
	}
	.musicList{
		width: 100%;
		padding: 0 rpx(10);
		.music{
			width: 100%;
			margin-top: rpx(10);
			// background-color: #ccc;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: rpx(6) 0;
			.musicImg{
				width: rpx(36);
				height: rpx(36);
				border-radius: rpx(100);
				>image{
					width: 100%;
					height: 100%;
					border-radius: rpx(4);
				}
			}
			.musicText{
				flex: 1;
				margin-left: rpx(10);
				.textName{
					font-size: rpx(14);
				}
				.textNumber{
					display: flex;
					align-items: center;
					.textColor{
						background-color: #FFEBEB;
						padding: rpx(2);
						border-radius: 8px;
						color: red;
						border: 1px #FFE1E1 solid;
					}
					.textJieshao{
						color: #808693;
						margin-left: rpx(4);
					}
				}
			}
			.musicIcon{
				margin-left: rpx(20);
				padding-right: rpx(10);
			}
		}
	}
}
</style>
