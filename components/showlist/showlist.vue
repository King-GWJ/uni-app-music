<script setup>
   import CaurPlay from './curPlay.vue'
   const showList=false
</script>


<template>
	<view>
		<view class="footer">
			<view class="circle">
				<view class="img"></view>
			</view>
			<view class="name">1111111111111111111111111111111111</view>
			<p class="logo"><image src="../../icon/songlist/icon-bf.png"/></p>
			<p class="logo2" @click=""><image src="../../icon/songlist/icon-shlb.png"/></p>
		</view>
		<CaurPlay v-if="showList" />
	</view>
	
	
</template>


<style lang="scss" scoped>
	.footer{
		height:rpx(46);
		// background:red;
		display:flex;
		align-items: center;
		padding:0 rpx(15);
	}
	
	.circle{
		width:rpx(40);
		height:rpx(40);
		border-radius: 50%;
		background: black;
		display: flex;
		align-items: center;
		justify-content: center;
		.img{
			width:rpx(25);
			height:rpx(25);
			border-radius: 50%;
			background: lightblue;
		}
	}
	
	.name{
		flex:1;
		margin:0 rpx(8);
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow:ellipsis;
	}
	.logo{
		width:rpx(25);
		height:rpx(25);
		margin:0 rpx(15);
		// 图片
		image{
			width:rpx(25);
			height:rpx(25);
		}
	}
	.logo2{
		width:rpx(20);
		height:rpx(25);
		image{
			width:rpx(23);
			height:rpx(23);
		}
	}
</style>