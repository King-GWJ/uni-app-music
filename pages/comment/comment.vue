<script setup>
	
</script>



<template>
	<view class="commentWrap">
		<view class="header">
			<view class="back"></view>
			<view class="headerTitle">
				评论
			</view>
			<view class="detail"></view>
		</view>
		<view class="content">
			内容
		</view>
		<view class="footer">
			底部
		</view>
	</view>
</template>



<style lang="scss" scoped>
.commentWrap{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.header{
		height: rpx(40);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.back{
			width: rpx(40);
			height: rpx(40);
			
		}
		.headerTitle{
			font-weight: 900;
			color: rgb(40,50,72);
		}
		.detail{
			width: rpx(40);
			height: rpx(40);
		}
	}
	.content{
		flex: 1;
	}
	.footer{
		height: rpx(100);
	}
}


</style>
