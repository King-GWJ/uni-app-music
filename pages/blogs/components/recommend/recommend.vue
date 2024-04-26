<style lang="scss">
	.recommend {
		padding: 20px;
		box-sizing: border-box;
		list-style: none;
		background-color: #F8F9FD;

		.search {
			width: 100%;
			height: 30px;
			border: 1px solid #eee;
			border-radius: 15px;
			background-color: #F2F3F7;
			position: relative;

			span {
				position: absolute;
				left: 10px;
				top: 5px;
				width: 10px;
				width: 20px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			input {
				padding-left: 40px;
				padding-top: 5px;
			}
		}

		.nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 10px;

			p {
				border: 1px solid #eee;
				background-color: white;
				padding: 5px;
			}
		}



		.uni-margin-wrap {
			padding: 30rpx;

			.swiper {
				border-radius: 20rpx;
				overflow: hidden;
				height: 224rpx;

				img {
					width: 100%;
				}
			}
		}

		.type {
			display: flex;
			overflow-x: auto;
			flex-direction: row;

			.list {
				margin-top: 5px;
				width: 100%;
				display: flex;
				flex-shrink: 0;
				flex-direction: row;
				justify-content: space-around;

				.li {
					width: 28%;

					.img {
						width: 100%;
						height: 80px;
						border-radius: 5px;
					}

					text {
						height: 20px;
						font-size: 12px;
						line-height: 20px;
						display: inline-block;
						-webkit-box-orient: vertical;
						white-space: nowrap;
						overflow: hidden;
						width: 100%;
						text-overflow: ellipsis;
						text-align: center;
					}
				}

			}
		}
	}
</style>

<template>
	<view class="recommend">
		<view class="search">
			<span><img src="@/icon/search.png" alt=""></span>
			<input type="text" name="" id="" placeholder="大家都在听一人一首成名曲">
		</view>

		<view class="nav">
			<p>我的博客</p>
			<p>全部分类</p>
			<p>排行榜</p>
			<p>宝藏博客</p>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"
				indicator-active-color="#ffffff" circular autoplay>
				<swiper-item v-for="(item) in banners" :key="item.targetId">
					<img :src="item.imageUrl" alt="" mode="widthFix">
				</swiper-item>
			</swiper>
		</view>
		<h3>新专辑</h3>
		<view class="type">
			<view v-for="(item,index) in newests" :key="index" class="list">
				<view v-for="(li) in item" :key="index" class="li">
					<image :src="li.picUrl" mode="" class="img" @click='detail(li.id)'></image>
					<text>{{li.name}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		bannerApi,
		voiceApi,
		newestApi,
		getalbumApi
	} from '/base/api';
	import {
		navigateTo
	} from "/base/utils"

	const banners = ref([])
	const valbums = ref([])
	const newests = ref([])
	// const getalbumAs = ref([])

	const detail = (val) => {
		navigateTo(`/pages/blogs/components/recommend/detail/detail?id=${val}`)
	}

	bannerApi().then(res => {
		banners.value = res.banners
	})

	voiceApi({
		limit: 9,
		offset: 3
	}).then(res => {
		// voiceApi.value = res.banners
	})

	newestApi().then(res => {
		for (let i = 0; i < res.albums.length; i + 3) {
			newests.value.push(res.albums.splice(i, i + 3))
		}
	})
</script>