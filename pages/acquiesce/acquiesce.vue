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
			<view class="music" v-for="(item,index) in list" :key="item.id" @click="toggle(item)">
				<view class="musicImg">
					<image :src="item.al.picUrl" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						{{item.name}}
					</view>
					<view class="textNumber">
						<view v-if="item.reason" class="textColor">
							{{item.reason}}
						</view>
						<view v-else="item.reason" class="textColorA">
							超清母带
						</view>
						<view class="textJieshao">
							{{item.ar[0].name}}
						</view>
					</view>
				</view>
				<view v-if="item.mv" class="musicMv">
					<image src="../../icon/songlist/incon-blackbofang.png" mode=""></image>
				</view>
				<view class="musicIcon">
					<image src="../../icon/songlist/icon-shengl.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
	import { onReady } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	import { songsApi, loginStatusApi } from '../../base/api/index.js'
	const list = ref([])
	loginStatusApi().then(res => {
		console.log(res);
	})
	songsApi().then(res => {
		console.log(res);
		list.value = res.data.dailySongs
	})
	const currentDate = new Date()
	const month = currentDate.getMonth() + 1
	const day = currentDate.getDate()
	const toggle = (item) => {
		console.log(item.id);
		uni.navigateTo({
			url: `/pages/musicPlay/musicPlay?id=${item.id}`,
		});
	}

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
			width: rpx(20);
			height: rpx(20);
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
				font-size: rpx(10);
				color: #D3A03B;
				font-weight: bold;
				margin-left: rpx(10);
			}
		}
	}
	.musicList{
		width: 100%;
		padding: 0 rpx(10);
		.music{
			width: 100%;
			margin-top: rpx(10);
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
						padding: 0 rpx(4);
						border-radius: 8px;
						color: red;
						border: 1px #FF3A3A solid;
						font-size: rpx(12);
					}
					.textColorA{
						// background-color: #FFEBEB;
						padding: 0 rpx(4);
						border-radius: 8px;
						color: #E4B250;
						border: 1px #E4B04A solid;
						font-size: rpx(12);
					}
					.textJieshao{
						color: #808693;
						margin-left: rpx(4);
						font-size: rpx(12);
					}
				}
			}
			.musicIcon{
				margin-left: rpx(20);
				width: rpx(20);
				height: rpx(20);
				>image{
					width: 100%;
					height: 100%;
				}
			}
			.musicMv{
				margin-left: rpx(20);
				width: rpx(20);
				height: rpx(20);
				>image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
