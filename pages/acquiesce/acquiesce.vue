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
			<view class="allText" @click="playAll(list,list[0],0)">
				播放全部
				<view class="">
					VIP 歌曲免费畅听
				</view>
			</view>
			<view class="allLiebiao" @click="useStore.musicToggle()">
				<image  v-if="useStore.musicMode === 1 " src="../../icon/songlist/icon-meiti-suijibofang.png" />
				<image  v-else-if="useStore.musicMode === 2 " src="../../icon/songlist/icon-danquxunhuan.png" />
				<image  v-else-if="useStore.musicMode === 3 " src="../../icon/songlist/icon-light.png" />
			</view>
			<view class="allLiebiao">
				<image src="../../icon/songlist/icon-liebiao.png" mode=""></image>
			</view>
		</view>
		<view class="musicList">
			<view class="music" v-for="(item,index) in list" :key="item.id" >
				<view class="musicImg">
					<image :src="item.al.picUrl" mode=""></image>
				</view>
				<view class="musicText" @click="toggle(list,item,index)">
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
				<view v-if="item.mv" class="musicMv" @click="toggleBack(item)">
					<image src="../../icon/songlist/incon-blackbofang.png" mode=""></image>
				</view>
				<view class="musicIcon" @click="itemDetail(float,item)" >
					<image src="../../icon/songlist/icon-shengl.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		<Setting v-if="float"  @click.stop="float=false" :itemSong="itemSong"/>
	</view>
</template>

<script setup>
	import { onReady,onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	import { songsApi, loginStatusApi,trackAllApi } from '../../base/api/index.js'
	import { useMusicstore } from '../../store/music.js'
	import Setting from "../../components/showlist/setting.vue"
	const useStore = useMusicstore()
	const list = ref([])
	const float = ref(false)
	const itemSong = ref({})
	const currentDate = new Date()
	const month = currentDate.getMonth() + 1
	const day = currentDate.getDate()
	const toggle = (l,t,i,) => {
		useStore.musicAllList(l,t,i,'每日推荐')
		uni.switchTab({
			url: '/pages/musicPlay/musicPlay',
		});
	}
	onLoad((options) => {
		if(options.id){
			trackAllApi(options.id,50,0).then(res => {
				list.value = res.songs
			})
		}else{
			songsApi().then(res => {
				list.value = res.data.dailySongs
			})
		}	
	})
	const itemDetail = (f,t) => {
		itemSong.value=t
		float.value=!f
	}
	const playAll = (l,t,i) => {
		useStore.musicAllList(l,t,i)
		uni.switchTab({
			url: `/pages/musicPlay/musicPlay?id=${t.id}`,
		})
	}
	const toggleBack = (item) => {
		console.log(item);
		useStore.musicMv(item.mv)
		uni.navigateTo({
			url:'/pages/mv/mv'
		})
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar{width:0px};
	background-color: #FEFEFE;
	.custom-navigation{
		background-color: burlywood;
	}
	.header{
		width: 100%;
		height: rpx(140);
		background: linear-gradient(to bottom, #7B7F92, #FFFFFF);
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
					position: relative;
					.dateMonthA{
						font-size: rpx(36);
					}
					.dateDay{
						margin-left: rpx(6);
						font-size: rpx(20);
						position: absolute;
						left:0;
						bottom: 0;
						margin-left: rpx(26);
						margin-bottom: rpx(7);
					}
				}
				
			}
			.luck{
				font-size: rpx(18);
				display: flex;
				justify-content: space-between;
				.history{
					padding: 0 rpx(20);
					background-color:#898D9E ;
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
					height: rpx(20);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: rpx(160);
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
