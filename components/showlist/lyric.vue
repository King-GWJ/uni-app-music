<template>
	<view class="lyric">
		<!-- 顶部 -->
		<view class="header">
			<p>
				<image src="../../icon/songlist/icon-bback.png"></image>
			</p>
			<view>{{}}</view>
			<p >
				<image src="../../icon/songlist/icon-fenxiang.png" />
			</p>
		</view>
		<!-- 歌词 -->
		<view class="lyricContent"></view>
		<!-- 添加收藏 -->
		<view class="collect">
			<p class="click">
				<image src="../../icon/songlist/icon-collent.png" />
			</p>
			<p class="talk">
				<image src="../../icon/songlist/icon-talk.png" />
			</p>
		</view>
		<view class="volume">
			<view class="time"></view>
			<view class="slider">
				<slider  class="sliders" min="0" max="100" value="0" disabled="true" block-size="10" activeColor="#1890ff" step></slider>
			</view>
			<view class="time"></view>
		</view> 
		<!-- 播放 -->
		<view class="play">
			<span>
				<image src="../../icon/songlist/icon-liebiaoxunhuan.png" />
				<!-- <image src="../../icon/songlist/icon-danquxunhuan.png" />
				<image src="../../icon/songlist/icon-meiti-suijibofang.png" /> -->
			</span>
			<!-- 切换 -->
			<view class="code">
				<p>
					<image src="../../icon/songlist/icon-shangyishou.png" />
				</p>
		
				<p>
					<image src="../../icon/songlist/icon-a.png" />
				</p>
				<p>
					<image src="../../icon/songlist/icon-next.png" />
				</p>
			</view>
			<span>
				<image src="../../icon/songlist/icon-liebiao.png" />
			</span>
		</view>
		<footer>
			<p>
				<image src="../../icon/songlist/icon-qiehuan.png" />
			</p>
			<p>
				<image src="../../icon/songlist/icon-xiazai.png" />
			</p>
			<p >
				<image src="../../icon/songlist/icon-shenglve.png" />
			</p>
		</footer>
	</view>
	
</template>

<script setup>
	
	
	//返回上一页
	const Backprve=()=>{
		uni.navigateBack({
			delta: 1
		});
	}
	
	
</script>

<style lang="scss" scoped>
	.lyric{
		position: fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		// background:#696969;
		background:rgba(0,0,0,.5)
	}
	image{
		width:rpx(27);
		height:rpx(27);
	}
	
   .header{
		height:rpx(40);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0 15px;
		z-index: 1;
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
	
	// <!-- 歌词 -->
	.lyricContent{
		height:rpx(300);
	}
	
	.collect{
		display: flex;
		height:rpx(30);
		background:skyblue;
	}
	.volume{
		display: flex;
		height:rpx(30);
		background: royalblue;
	}
		
	// <!-- 播放 -->
	.play{
		display: flex;
		height:rpx(60);
		background: cadetblue;
	}
	// <!-- 切换 -->
	.code{
		display: flex;
		height:rpx(50);
		
	}
	footer{
		height:rpx(60);
		// background: darkred;
		padding:0 rpx(60);
		display:flex;
		align-items: center;
		justify-content: space-between;
	
		p {
			image {
				width: rpx(25);
				height: rpx(25);
			}
		}
	}
</style>