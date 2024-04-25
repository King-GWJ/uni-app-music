<template>
	<view>
		<view class="title">
			<view class="img">
				<image :src="title.blurPicUrl"></image>
			</view>
			<view class="name">
				<h4 class="songs">{{title.name}}</h4>
				<view class="bottom">
					<view>歌手: {{title.company}}</view>
					<view>发行时间:{{useMusic.timestampToYMD(title.publishTime)}}</view>
					<view class="description">
						{{title.description}}
					</view>
				</view>

			</view>
		</view>
		<view class="main">
			<view class="">
				<view class="top">
					<img src="../../../../../icon/play2.svg" alt=""><text>播放全部</text>({{list?.length}})
				</view>
			</view>
			<view class="list" v-for="(item,index) in list" :key="index"
				@click="goDetail({i:index,t:item,l:list,n:'新专辑'})">
				<view class="left">
					<text>{{index+1}}</text>
				</view>
				<view class="right">
					<text>{{item.name}}</text>
					<view>
						{{(item.ar.map(item => item.name)).join("/")}}
					</view>					
				</view>
				<view class="play">
					<img src="../../../../../icon/play.svg" alt="" />
				</view>
				<view class="point" @click.stop="">
					<img src="../../../../../icon/point.svg" alt="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		switchTab
	} from "/base/utils"
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getalbumApi
	} from '/base/api';
	import {
		ref
	} from "vue";
	import {
		useMusicstore
	} from "@/store/music"

	const useMusic = useMusicstore()
	const list = ref([])
	const title = ref([])
	const goDetail = (val) => {
		useMusic.musicAllList(val.l, val.t, val.i, val.n)
		switchTab('../../../../../pages/musicPlay/musicPlay')
	}
	onLoad((options) => {
		getalbumApi(options.id).then(res => {
			list.value = res.songs
			title.value = res.album
		})
	})
</script>

<style lang="scss">
	.title {
		display: flex;
		flex-wrap: wrap;
		height: 200px;
		justify-self: center;
		align-items: center;
		background: #eee;
		padding: 0 20px;

		.img {
			width: 110px;
			height: 110px;
			background-color: #fff;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 80px;
				height: 80px;
				border-radius: 10px;
				display: inline-block;
			}
		}

		.name {
			margin-left: 20px;
			height: 110px;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			algin-items: space-between;

			.songs {
				display: -webkit-box;
				height: 32px;
				line-height: 16px;
				max-width: 180px;
				font-size: 16px;
				// white-space: nowrap;
				-webkit-box-orient: vertical;
				/* 控制只有第二行才会溢出隐藏 */
				-webkit-line-clamp: 2;
				/* 确保文本溢出时显示省略号 */
				overflow: hidden;
				text-overflow: ellipsis;
				color: white;
			}

			.bottom {
				font-size: 10px;
				color: white;
				height: 60px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.description {
					line-height: 16px;
					max-width: 180px;
					font-size: 10px;
					white-space: nowrap;
					-webkit-box-orient: vertical;
					/* 控制只有第二行才会溢出隐藏 */
					-webkit-line-clamp: 2;
					/* 确保文本溢出时显示省略号 */
					overflow: hidden;
					text-overflow: ellipsis;
					color: white;
				}
			}
		}
	}

	.main {
		overflow: auto;
		display: flex;
		flex-direction: column;
		padding: 0 10px;

		.top {
			display: flex;
			align-items: center;
			margin-top: 20px;

			img {
				width: 22px;
			}

			text {
				margin: 0 10px;
			}
		}

		.list {
			display:flex;
			align-items:center;
			position: relative;
			.left{
				margin-left:8px;
			}
			.right {
				margin-left:20px;
				height: 60px;
				display: flex;
				flex-direction: column;
				height: 60px;
				justify-content: center;
			}
			.play {
				position: absolute;
				right:20px;
				top:30%;
				img {
					width: 20px;
				}
			}
			.point {
				position: absolute;
				right:-2px;
				top:30%;
				img {
					width: 20px;
				}
			}
			text {
				font-size: 15px;
			}

			font-size:9px;
		}
	}
</style>