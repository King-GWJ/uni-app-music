<template>
	<view class="box">
		<view class="header">
			
		</view>
		<view class="all">
			
		</view>
		<view class="musicList">
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
			<view class="music">
				<view class="musicImg">
					<image src="../../icon/play.svg" mode=""></image>
				</view>
				<view class="musicText">
					<view class="textName">
						蓝莲花
					</view>
					<view class="textNumber">
						<view class="textColor">
							红黄
						</view>
						<view class="textJieshao">
							国定
						</view>
					</view>
				</view>
				<view class="musicIcon">
					:
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
*{
	box-sizing: border-box;
}
.box{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	// &::-webkit-scrollbar{width:0px}; 隐藏X轴滚动条
	.header{
		width: 100%;
		height: rpx(140);
		background-color: #ccc;
		padding-right: rpx(10);
		padding: 0 rpx(10);
	}
	.all{
		width: 100%;
		padding: 0 rpx(10);
		height: rpx(40);
		background-color: red;
		padding: 0 rpx(10);
	}
	.musicList{
		width: 100%;
		padding: 0 rpx(10);
		.music{
			width: 100%;
			height: rpx(40);
			margin-top: rpx(10);
			background-color: #ccc;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.musicImg{
				width: rpx(36);
				height: rpx(36);
				>image{
					width: 100%;
					height: 100%;
				}
			}
			.musicText{
				flex: 1;
				.textName{
					font-size: rpx(14);
				}
				.textNumber{
					display: flex;
					align-items: center;
					.textColor{
						background-color: #FFEBEB;
						padding: rpx(2);
						border-radius: 8px;
						color: red;
						border: 1px #FFE1E1 solid;
						
					}
					.textJieshao{
						color: #808693;
						margin-left: rpx(4);
					}
				}
			}
			.musicIcon{
				margin-left: rpx(20);
				padding-right: rpx(10);
			}
		}
	}
}
</style>
