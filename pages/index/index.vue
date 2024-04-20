<script setup>
	import {
		ref
	} from "vue";
	import {
		bannerApi
	} from '/base/api'

	const banners = ref([])

	const pageLogin = '/pages/login/login'
	const pageSearch = '/pages/search/search'

	bannerApi().then(res => {
		banners.value = res.banners
	})

	const link = (url) => {
		if (!url) {
			return
		}
		uni.navigateTo({
			url
		})
	}
</script>

<template>
	<view class="content">
		<view class="header">
			<uni-icons class="bars" type="bars" size="24" @click="link(pageLogin)"></uni-icons>
			<view class="search" @click="link(pageSearch)">
				<uni-search-bar placeholder="搜索" bgColor="#EEEEEE" readonly />
			</view>
		</view>
		<view class="main">
			<view class="swiper-wrap">
				<swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"
					indicator-active-color="#ffffff" autoplay circular>
					<swiper-item v-for="item in banners" :key="item.targetId">
						<image :src="item.imageUrl" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;

		.header {
			padding: 30rpx;
			display: flex;
			width: 100%;
			box-sizing: border-box;
			align-items: center;

			.search {
				flex: 1;
				border-radius: 40rpx;
				margin-left: 20rpx;

				.uni-searchbar {
					padding: 0;
				}
			}
		}

		.main {
			width: 100%;
			height: 100%;

			.swiper-wrap {
				padding: 30rpx;

				.swiper {
					border-radius: 20rpx;
					overflow: hidden;
					height: 256rpx;

					image {
						width: 100%;
					}
				}
			}


		}

	}
</style>