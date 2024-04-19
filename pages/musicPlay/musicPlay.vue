<template>
	<view class="musicPlay">
		 <view class="header"></view>
		 <view class="circle">
			<view class="outer">
				<view class="undertone">
				    <view class="image"></view>
				</view>
			</view>
			<view class="sun"></view>
		 </view>
		 <view class="title"></view>
		 <view class="volume"></view>
		 <view class="play"></view>
		 <footer></footer>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	
	.musicPlay{
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
	}
	
	.header{
		height:rpx(40);
		background: palevioletred;
	}
	.circle{
		flex:1;
		position: relative;
		background:black;
		.outer{
			width:rpx(220);
			height:rpx(220);
			border-radius: 50%;
			background: rgba(255,255,255,0.3);
			left:20%;
			top:20%;
			position:relative;
			border:1px solid #A9A9A9;
			
		}
		.undertone{
			width:rpx(200);
			height:rpx(200);
			background:repeating-radial-gradient(black,black rpx(6), #1c1c1c rpx(8));
			border-radius: 50%;
			position:absolute;
			top:rpx(10);
			left:rpx(10);
		}
		
		.sun{
			width:rpx(199);
			height:rpx(199);
			border-radius:50%;
			background:-webkit-linear-gradient(45deg,transParent 35%,
			rgba(255,255,255,0.2) 45%,
			rgba(255,255,255,0.3) 50%,
			rgba(255,255,255,0.2) 55%,
			transParent);
			position:absolute;
			top:23%;
			left:23%;
		}
			.image{
				width:rpx(138);
				height:rpx(138);
				border-radius: 50%;
				background: skyblue;
				position: absolute;
				left:rpx(33);
				top:rpx(30);
			}
	}
	.title{
		height:rpx(60);
		background:indianred;
	}
	
	.volume{
		height:rpx(30);
		background-color: darkred;
	}
	.play{
		height:rpx(100);
		background:mediumvioletred;
	}
	footer{
		height:rpx(60);
		background: darkred;
	}
</style>
