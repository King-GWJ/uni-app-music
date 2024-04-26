<template>
	<view>
		<view class="">
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"
				indicator-active-color="#ffffff" circular autoplay>
				<swiper-item v-for="(item) in djBanner" :key="item.targetId">
					<img :src="item.pic" alt="" mode="widthFix">
				</swiper-item>
			</swiper>
		</view>
		<view class="personalize">
			<view v-for="(item,index) in personalize" :key="index" :id="item.id">
				<view class="">
					<image :src="item.picUrl" mode=""></image>
					{{item.name}}
				</view>
			</view>
		</view>
		<musicBar></musicBar>
	</view>
</template>

<script setup>
	import {
		djBannerApi,
		personalizeApi
	} from '/base/api';
	import {
		ref
	} from "vue"

	const djBanner = ref([])
	const personalize = ref([])

	djBannerApi().then(res => {
		djBanner.value = res.data
	})
	// 电台推荐
	personalizeApi().then(res => {
		personalize.value = res.data
	})
</script>

<style lang="scss">
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
</style>