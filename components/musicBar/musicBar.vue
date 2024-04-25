<script setup>
	import {
		ref,
		watch
	} from 'vue';
	import {
		useMusicstore
	} from '../../store/music';
	import {
		onLaunch,
		onShow
	} from "@dcloudio/uni-app";

	const musicStore = useMusicstore()
	const url = ref('')
	const name = ref('请播放音乐')
	const artist = ref('')
	const flag = ref(true)
	const popup3 = ref(null)

	const goPlay = () => {
		uni.switchTab({
			url: `/pages/musicPlay/musicPlay`
		})
	}

	musicStore.audio.onPlay(() => {

		url.value = musicStore.musicLove.al.picUrl
		name.value = musicStore.musicLove.name
		artist.value = musicStore.musicLove.ar[0].name
		flag.value = false
	})

	musicStore.audio.onPause(() => {
		flag.value = true
		url.value = musicStore.musicLove.al.picUrl
		name.value = musicStore.musicLove.name
		artist.value = musicStore.musicLove.ar[0].name

	})


	onShow(() => {
		if(musicStore.audio.src.length>0){
			url.value = musicStore.musicLove.al.picUrl
			name.value = musicStore.musicLove.name
			artist.value = musicStore.musicLove.ar[0].name
		}
		if (musicStore.audio.paused) {
			flag.value = true
		} else {
			flag.value = false
		}
	})

	const change = (e) => {
		musicStore.play()
		flag.value = !flag.value
		e.stopPropagation()
	}

	const detail = (e) => {
		popup3.value.open()
		e.stopPropagation()
	}
</script>

<template>
	<view class="musicBar" @click="goPlay">
		<view class="barInfo">
			<view class="imgWrap">
				<image  :class="[{ img:true}, { imgPlay: !flag },{Paused:flag}]" :src="url" mode="widthFix"></image>
			</view>

			<view class="name">
				<view class="musicName">
					{{name}}
				</view>
				<view class="musicAfter" v-if="musicStore.musicLove.al">
					&nbsp;-&nbsp;{{artist}}
				</view>
			</view>
		</view>

		<view class="barTool">
			<view :class="[{ play: flag }, { pause: !flag }]" @click="change">

			</view>
			<view class="list" @click="detail">

			</view>
		</view>
	</view>
	<uni-popup ref="popup3" type="bottom" border-radius="10px 10px 0 0" background-color="#fff">
		<view class="playList">
			
		</view>
	</uni-popup>
</template>



<style lang="scss" scoped>
	.musicBar {
		position: absolute;
		bottom: rpx(0);
		width: 100%;
		height: rpx(50);
		z-index: 9;
		background: white;
		display: flex;
		justify-content: space-between;

		.barInfo {
			display: flex;
			align-items: center;
			padding-left: rpx(10);

			.imgWrap {
				width: rpx(35);
				height: rpx(35);
				border: 3px solid;
				border-radius: rpx(50);
				background: #ccc;
			}

			.img {
				width: rpx(35);
				height: rpx(35);
				border-radius: rpx(50);
				
			}
			
			.imgPlay{
				animation: rotate 3s linear infinite;
			}

			.Paused{
				animation: rotate 3s linear infinite;
				animation-play-state: paused;
			}

			.name {
				line-height: rpx(50);
				margin-left: rpx(10);
				width: rpx(170);
				color: rgb(61, 70, 91);
				font-size: rpx(10);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				display: flex;
				.musicName{
					color: rgb(58,68,90);
					font-size: rpx(13);
					font-weight: 900;
				}
				.musicAfter{
					color: rgb(124,130,144);
				}
			}
		}

		.barTool {
			display: flex;
			margin-right: rpx(10);

			.play {
				width: rpx(50);
				height: rpx(50);
				background: url(../../icon/play.svg) no-repeat center;
				background-size: rpx(25);
			}

			.pause {
				width: rpx(50);
				height: rpx(50);
				background: url(../../icon/songlist/icon-a1.png) no-repeat center;
				background-size: rpx(25);
			}

			.list {
				width: rpx(50);
				height: rpx(50);
				background: url(../../icon/songlist/icon-shlb.png) no-repeat center;
				background-size: rpx(20);
			}
		}

	}
	
	@keyframes rotate{
		0%{
			transform: rotateZ(0deg);
		}
		100%{
			transform: rotateZ(360deg);
		}
	}
	.playList{
		min-height: rpx(200);
	
	}
	
</style>