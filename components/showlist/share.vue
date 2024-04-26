
<script setup>
	

	
</script>



<template>
	<view class="share">
		<view class="page" @click.stop="">
			<view class="header">
				<view class="text">分享至</view>
			</view>
			<view class="swiper">
				<view class="item">
					<image src="../../icon/songlist/icon-wx.png"></image>
					<view class="text2">微信</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-py.png"></image>
					<view class="text2">微信朋友圈</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-qq.png"></image>
					<view class="text2">QQ好友</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-qqspace.png"></image>
					<view class="text2">QQ空间</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-wangyiyun.png"></image>
					<view class="text2">云音乐动态</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-xin.png"></image>
					<view class="text2">私信</view>
				</view>
				<view class="item">
					<image src="../../icon/songlist/icon-wb.png"></image>
					<view class="text2">微博</view>
				</view>
				<view class="item crl">
					<image  src="../../icon/songlist/icon-lj.png"></image>
					<view class="text2">复制链接</view>
				</view>
				<view class="item crl">
					<image  src="../../icon/songlist/icon-gd.png"></image>
					<view class="text2">更多</view>
				</view>
			</view>
			<view class="hash">
				<view class="text3">你还可以分享</view>
				<view class="all">
					 <view class="every">
					 	<view class="Shareto">
					 		<image src="../../icon/songlist/i-image1.jpg"></image>
					 	</view>
					 	<view class="path">一起听</view>
					 </view>
					 <view class="every">
					 	<view class="Shareto">
					 		<image src="../../icon/songlist/image1.webp"></image>
					 	</view>
					 	<view class="path">发送至密友桌面</view>
					 </view>
					 <view class="every">
					 	<view class="Shareto">
					 		<image src="../../icon/songlist/image5.jpg"></image>
					 	</view>
					 	<view class="path">微信状态</view>
					 </view>
					 <view class="every">
					 	<view class="Shareto">
					 		<image src="../../icon/songlist/image3.jpg"></image>
					 	</view>
					 	<view class="path">歌曲卡片</view>
					 </view>
					 <view class="every">
					 	<view class="Shareto">
					 		<image src="../../icon/songlist/image4.jpg"></image>
					 	</view>
					 	<view class="path">歌曲卡片</view>
					 </view>
				</view>
			</view>
		</view>
	</view>
	
</template>



<style lang="scss" scoped>
	.share{
		position:fixed;
		width:100%;
		height:100%;
		left:0;
		top:0;
		background:rgba(0,0,0,.5);
		z-index: 2;
	}
	.page{
		margin-top:100%;
		height:rpx(300);
		background:#fff;
		border-radius: rpx(18) rpx(18) 0 0;
		display:flex;
		flex-direction: column;
	} 
	.header{
		height:rpx(25);
		padding:rpx(15) rpx(10);
		
		.text{
			font-weight: 900;
		}
		
	}
	.swiper{
		height:rpx(70);
		padding:0 rpx(2);
		display: flex;
		overflow: hidden;
		overflow-x: auto;
		padding: 0 rpx(5) rpx(15) rpx(5);
		border-bottom:1px solid #eee;
		&::-webkit-scrollbar{height:0px};
		.item{
			width:rpx(65);
			height:100%;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin:0 rpx(4);
			image{
				width:rpx(40);
				height:rpx(40);
				margin-bottom:rpx(5);
			}
			.text2{
				font-size: rpx(12);
				width:rpx(65);
				text-align: center;
			}
			.crl{
				width:rpx(50);
				height:rpx(50);
				background:#bebebe;
				border-radius: 50%;
			}
		}
		
	}
	.hash{
		flex:1;
		padding:rpx(5) rpx(15);
		display: flex;
		flex-direction: column;
		.text3{
			font-size:rpx(13);
			font-weight: 900;
			font-family: "黑体";
			padding:rpx(10) 0;
		}
		.all{
			display: flex;
			overflow: hidden;
			overflow-x: auto;
			&::-webkit-scrollbar{height:0px};
		}
		.every{
			flex:1;
			display: flex;
			padding: 0 rpx(5) rpx(15) rpx(5);
			display: flex;
			flex-direction: column;
			align-items: center;
			// background: blue;
			.Shareto{
				width:rpx(93);
				height:rpx(95);
				background: #fff;
				border-radius: rpx(5);
				
				image{
					width:100%;
					height:100%;
					border-radius: rpx(5);
				}
			}
			.path{
				margin-top:rpx(5);
				font-size: rpx(13);
				
			}
		}
	}
	
</style>