<template>
	<view class="box">
		<video id="myVideo" 
			:src=useStore.musicLookMv 
			@error="videoErrorCallback" 
			:danmu-list="danmuList"
			enable-danmu danmu-btn controls
		></video>
		<view class="body">
			<view class="title">
				<view class="titleImg">
					<image :src="useStore.musicDetails.al.picUrl" mode=""></image>
				</view>
				<view class="titleRight">
					<view class="titleName">
						{{useStore.musicDetails.al.name}}
					</view>
					<view class="titletext">
						该mv有多个歌手
					</view>
				</view>
			</view>
			<view class="text">
				<view class="textMv">
					MV
				</view>
				<view class="textName">
					{{useStore.musicDetails.name}}
				</view>
			</view>
			<view class="mvtext">
				<image src="../../icon/songlist/icon-yinyue1.png" mode=""></image>
				{{useStore.musicDetails.name}}&nbsp-&nbsp{{useStore.musicDetails.al.name}}
			</view>
			<view class="lookNum">
				103.2万次观看&nbsp·&nbsp2019-03-30
			</view>
			<view class="share">
				<view class="shareList">
					<view class="shareImage">
						<image src="../../icon/songlist/icon-shoucang1.png" mode=""></image>
					</view>
					<view class="shareText">
						收藏
					</view>
				</view>
				<view class="shareList">
					<view class="shareImage">
						<image src="../../icon/songlist/icon-zhuanfa1.png" mode=""></image>
					</view>
					<view class="shareText">
						574
					</view>
				</view>
				<view class="shareList">
					<view class="shareImage">
						<image src="../../icon/songlist/icon-pinlun1.png" mode=""></image>
					</view>
					<view class="shareText">
						390
					</view>
				</view>
				<view class="shareList">
					<view class="shareImage">
						<image src="../../icon/songlist/icon-dianzan1.png" mode=""></image>
					</view>
					<view class="shareText">
						1.1万
					</view>
				</view>
			</view>
			<view class="mvList">
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
				<view class="mv">
					<view class="mvImage">
						
					</view>
					<view class="mvText">
						<view class="text1">
							视频介绍文本
						</view>
						<view class="text2">
							作者名字
						</view>
						<view class="text3">
							观看次数
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	import {useMusicstore} from '../../store/music.js'
	const useStore = useMusicstore()
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.body{
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		padding: rpx(10);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		overflow-y: auto;
		&::-webkit-scrollbar{width:0px};
	}
}
#myVideo{
	width: 100%;
	height: rpx(190);
}
.title{
	width: 100%;
	display: flex;
	padding: rpx(4) 0;
	.titleImg{
		width: rpx(30);
		height: rpx(30);
		border-radius: 50%;
		overflow: hidden;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.titleName{
		font-size: rpx(16);
		font-weight: bold;
	}
	.titletext{
		color: #999999;
		font-size: rpx(12);
	}
	.titleRight{
		margin-left: rpx(14);
	}
}
.text{
	display: flex;
	font-weight: bold;
	display: flex;
	align-items: center;
	.textMv{
		font-size: rpx(12);
		color: #E8432F;
		border: 1px solid #E7AABB;
		padding: rpx(1) rpx(3);
		border-radius: rpx(4);
		font-size: rpx(10);
		display: flex;
		align-items: center;
	}
	.textName{
		font-size: rpx(16);
		margin-left: rpx(6);
		display: flex;
		align-items: center;
	}
}
.mvtext{
	color: #4D82B8;
	font-size: rpx(13);
	font-weight: bold;
	margin-top: rpx(6);
	>image{
		width: rpx(16);
		height: rpx(16);
		color: #4D82B8;
	}
}
.lookNum{
	color: #979797;
	display: flex;
	align-items: center;
	margin-top: rpx(4);
}
.share{
	display: flex;
	align-items: center;
	padding: rpx(10) 0;
	.shareList{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.shareImage{
			width: rpx(22);
			height: rpx(22);
			>image{
				width: 100%;
				height: 100%;
			}
		}
		.shareText{
			color: #979797;
		}
	}
}
.mvList{
	display: flex;
	flex-direction: column;
	flex: 1;
	.mv{
		display: flex;
		padding: rpx(4) 0;
		.mvImage{
			height: rpx(60);
			width: 35%;
			background-color: #ccc;
			border-radius: rpx(8);
			overflow: hidden;
			overflow-y: auto;
			>image{
				width: 100%;
				height: 100%;
			}
		}
		.mvText{
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: rpx(10);
			.text1{
				font-size: rpx(16);
				font-weight: bold;
			}
			.text2{
				color: #979797;
			}
			.text3{
				color: #979797;
			}
		}
	}
}
</style>
