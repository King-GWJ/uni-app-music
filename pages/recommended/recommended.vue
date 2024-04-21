<template>
	<view class="box">
		<view class="header">
				<view class="borderBtn">					
				</view>
				<view class="headerList" v-for="(item,index) in header">
					{{item}}
				</view>
		</view>
		<view class="title">
			榜单推荐
		</view>
		<view class="musicImg">
			<uni-swiper-dot :info="data" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item ,index) in data" :key="index">
						<view class="swiper-item">
							<image class="seiper-image" :src="item.picUrl" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
				
			</uni-swiper-dot>
			<!-- <image :src="item.picUrl" mode="" v-for="(item,index) in data" key="index"></image> -->
		</view>
		<view class="authority">
			<image src="../../icon/songlist/icon-wangyiyun.png" mode=""></image>
			官方榜
		</view>
		<view class="musicList">
			<view class="music" key="item.name" v-for="(item,index) in list" @click="skip(item)">
				<view class="authorityList">
					<view class="listLeft">
						{{item.name}}
					</view>
					<view class="renewal">
						{{item.updateFrequency}}
					</view>
					
				</view>
				<view class="introduce">
					<view class="introduceImg">
						<image :src="item.coverImgUrl" mode=""></image>
					</view>
					<view class="introduceText">
						<view class="">
							{{item.description}}
						</view>
						
					</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { toplistApi, personalizedApi } from '../../base/api/index.js'
	import {ref} from 'vue'
	const header = ref(['官方','精选','曲风','全球','语种','特别','数组'])
	const list = ref([])
	const current = ref(0)
	const mode = ref('index')
	toplistApi().then(res => {
		console.log(res.list);
		list.value = res.list
	})
	const data = ref([])
	personalizedApi().then(res => {
		console.log(res.result);
		data.value = res.result
	})
	const skip = (item) => {
		console.log(item.id);
		uni.redirectTo({
			url: `/pages/songlist/songlist?id=${item.id}`,
		});
	}
	const change = (e) => {
		console.log(e);
		current.value = e.detail.current
	}

</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 rpx(10);
		background-color: #F1F4FA;
		overflow-y: auto;
		&::-webkit-scrollbar{width:0px} ;
		.header{
			display: flex;
			overflow-x: auto;
			&::-webkit-scrollbar{height:0px};
			width: 100%;
			position: relative;
			.borderBtn{
				position: absolute;
				width: rpx(40);
				height: rpx(6);
				background-color: red;
				opacity:0.7;
				left: 0;
				bottom: 0;
				margin-bottom: rpx(2);
				border-radius: rpx(100);
			}
			.headerList{
				flex-shrink: 0;
				z-index: 10;
				width: rpx(40);
				text-align: center;
				margin-right: rpx(40);
			}
				
		}
		.title{
			font-size: rpx(18);
			font-weight: bold;
			margin-top: rpx(20);
			margin-bottom: rpx(10);
			
		}
		.musicImg{
			display: flex;
			justify-content: space-between;
			border-radius: rpx(10);
			overflow: hidden;
			.swiper-box{
				height: rpx(120);
				// height: 100%;
			}
			.swiper-item{
				width: 100%;
				height: 100%;
				.seiper-image{
					width: 100%;
					height: 100%;
					>image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.authority{
			margin-top: rpx(20);
			font-weight: bold;
			display: flex;
			align-items: center;
			font-size: rpx(18);
			>image{
				width: rpx(30);
				height: rpx(30);
				margin-right: rpx(6);
			}
		}
		.musicList{
			flex: 1;
			overflow-y: auto;
			flex-shrink: 0;
			&::-webkit-scrollbar{height:0px};
			.music{
				margin-top: rpx(20);
				background-color: #FFFFFF;
				padding: rpx(10) rpx(14);
				border-radius: rpx(8);
				.authorityList{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.listLeft{
						font-size: rpx(22);
						font-weight: bold;
					}
					.renewal{
						color: #989DA8;
						font-size: rpx(12);
					}
				}
				.introduce{
					margin-top: rpx(10);
					display: flex;
					flex: 1;
					height: rpx(80);
					.introduceImg{
						width: rpx(60);
						height: rpx(60);
						flex-shrink: 0;
						>image{
							width: 100%;
							height: 100%;
							border-radius: rpx(8);
						}
					}
					.introduceText{
						margin-left: rpx(30);
						overflow: hidden;
						>view{
							flex: 1;
						}
					}
				}
			}
		}
		
	}
</style>
