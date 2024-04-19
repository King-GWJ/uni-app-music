<template>
	<view class="vip">
		<view>
			<navigator url='pages/vippage/vip'>黑胶vip</navigator>
			<navigator url='pages/vippage/svip'>黑胶Svip</navigator>
			<navigator url='pages/vippage/listen'>畅听尊享</navigator>
		</view>
		<view>
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	
	
</script>

<style lang="scss" sscoped>
	.vip{
		width:100%;
		height:100%;
	}

</style>
