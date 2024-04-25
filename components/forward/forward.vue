<template>
	<view class="icon">
		<span><img src="../../icon/share2.svg" alt="">
			<view class="">分享</view>
		</span>
		<span><img src="../../icon/comment.svg" alt="">
			<view class="">评论</view>
		</span>
		<span><img @click="flag=!flag" :src="flag?'../../icon/good1.svg':'../../icon/good2.svg'" alt="" />
			<view class="">赞</view>
		</span>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const flag = ref(true)
</script>

<style lang="scss">
	.icon {
		display: flex;

		span {
			display: flex;
			justify-content: start;
			align-items: center;

			view {
				margin-left: 10rpx;
			}

			margin-right:80rpx;

			img {
				width: 40rpx;
			}
		}
	}
</style>