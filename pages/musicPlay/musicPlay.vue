<template>
	<view class="musicPlay">
		 <view class="header">
			 <p><image src="../../icon/songlist/icon-xiala.png"/></p>
			 <view class="bangdan"></view>
			 <p><image src="../../icon/songlist/icon-fenxiang.png"/></p>
		 </view>
		 <view class="circle">
			<view class="outer">
				<view class="undertone">
				    <view class="image"></view>
				</view>
			</view>
			<view class="sun"></view>
		 </view>
		 <!-- 压唱片的部分 -->
		 <view class="fixed">
			 <view class="bases">
				 <view class="arm"></view>
			 </view>
		 </view>
		 <view class="title">
			 <view class="songTitle">
				 <p></p>
				 <p></p>
			 </view>
			<p class="collent"><image src="../../icon/songlist/icon-collent.png"/></p>
			<p class="talk"><image src="../../icon/songlist/icon-talk.png"/></p>
		 </view>
		 <view class="volume">
			
		 </view>
		 <view class="play">
			 <span>
			 	<image src="../../icon/songlist/icon-danquxunhuan.png"/>
			 </span>
			 <view class="code">
				 <p><image src="../../icon/songlist/icon-shangyishou.png"/></p>
				 <p><image src="../../icon/songlist/icon-bofang.png"/></p>
				 <p><image src="../../icon/songlist/icon-next.png"/></p>
			 </view>
			 <span>
			 	<image src="../../icon/songlist/icon-liebiao.png"/>
			 </span>
		 </view>
		 <footer>
			 <p><image src="../../icon/songlist/icon-qiehuan.png"/></p>
			 <p><image src="../../icon/songlist/icon-xiazai.png"/></p>
			 <p><image src="../../icon/songlist/icon-liebiao.png"/></p>
		 </footer>
		
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
		background: #165F7D;
	}
	
	.header{
		height:rpx(40);
		// background: palevioletred;
		display: flex;
		align-items: center;
		padding:0 15px;
		p{
			width:rpx(27);
			height:rpx(27);
			image{
				width:rpx(27);
				height:rpx(27);
			}
		}
		.bangdan{
			flex:1;
		}
	}
	.circle{
		flex:1;
		position: relative;
		// background:black;
		.outer{
			width:rpx(200);
			height:rpx(200);
			border-radius: 50%;
			background: rgba(255,255,255,0.3);
			left:25%;
			top:20%;
			position:relative;
			border:1px solid #808080;
			
		}
		.undertone{
			width:rpx(180);
			height:rpx(180);
			background:repeating-radial-gradient(black,black rpx(6), #1c1c1c rpx(8));
			border-radius: 50%;
			position:absolute;
			top:rpx(10);
			left:rpx(10);
		}
		
		.sun{
			width:rpx(180);
			height:rpx(180);
			border-radius:50%;
			background:-webkit-linear-gradient(45deg,transParent 35%,
			rgba(255,255,255,0.2) 45%,
			rgba(255,255,255,0.3) 50%,
			rgba(255,255,255,0.2) 55%,
			transParent);
			position:absolute;
			top:23%;
			left:28%;
		}
			.image{
				width:rpx(125);
				height:rpx(125);
				border-radius: 50%;
				background: skyblue;
				position: absolute;
				left:rpx(30);
				top:rpx(27);
			}
	}
	.title{
		height:rpx(60);
		// background:indianred;
		display: flex;
		align-items: center;
		padding:0 rpx(20);
		.songTitle{
			flex:1;
		}
		.collent{
			width:rpx(30);
			height:rpx(30);
			margin:0 rpx(25);
			image{
				width:rpx(30);
				height:rpx(30);
			}
		}
		.talk{
			width:rpx(30);
			height:rpx(30);
			image{
				width:rpx(30);
				height:rpx(30);
			}
		}
		
		
	}
	
	.volume{
		height:rpx(30);
		background-color: darkred;
		
	}
	.play{
		height:rpx(100);
		// background:mediumvioletred;
		padding:0 rpx(30);
		display: flex;
		align-items: center;
		span{
			display:block;
			width:rpx(30);
			height:rpx(30);
			image{
				width:100%;
				height:100%;
			}
		}
		.code{
			flex:1;
			// background: #808080;
			display:flex;
			padding:0 rpx(15);
			justify-content: space-around;
			p{
				display: flex;
				image{
					width:rpx(27);
					height:rpx(27);
				}
			}
				
			
		}
	}
	footer{
		height:rpx(60);
		// background: darkred;
		padding:0 rpx(60);
		display:flex;
		align-items: center;
		justify-content: space-between;
		p{
			image{
				width:rpx(27);
				height:rpx(27);
			}
		}
	}
	
	// 压唱片的部分
	.fixed{
		width:rpx(18);
		height:rpx(18);
		border-radius: 50%;
		background:#eee;
		position: absolute;
		top:rpx(60);
		left:50%;
		.basea{
			position: relative;
			width:rpx(10);
			height:rpx(10);
			background:#bebebe;
		}
		.arm{
			width:rpx(30);
			height:rpx(50);
			border:7px solid #eee;
			position: absolute;
			right:rpx(-30);
			top:rpx(25);
			border-right-color:transparent;
			border-top-color:transparent;
			transform:skew(5deg,30deg);
			transform-origin: right top;
			border-radius: 0 0 30% 0;
		}
		
	}
	
	.arm:after{
		content:'';
		width:rpx(10);
		height:rpx(13);
		background:#D3D3D3;
		position:absolute;
		top:rpx(45);
		left:rpx(26);
		border-radius:rpx(3);
		transform:skew(20deg,20deg) roate(75deg);
		box-shadow: 0px 0px 0px 1px #bebebe,
                    
                    0px 0px 0px 1px #eee;
		z-index: 3;
	}
</style>
