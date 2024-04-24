<script setup>
import { ref, watch } from 'vue';
import { useMusicstore } from '../../store/music';

const musicStore = useMusicstore()
const url = ref('')
const name = ref('请播放音乐')
const artist = ref('')
const flag = ref(true)


if(musicStore.musicLove.al){
	url.value = musicStore.musicLove.al.picUrl
	name.value = musicStore.musicLove.name
	artist.value = musicStore.musicLove.ar[0].name
}


console.log(musicStore.musicLove)

watch(musicStore.musicLove.al,()=>{
	console.log(1)
})

const goPlay = () =>{
	uni.switchTab({
		url: `/pages/musicPlay/musicPlay`
	})
}

const change = (e)=>{
	musicStore.audio.pause()
	flag.value = !flag.value
	e.stopPropagation()
}

const detail = (e)=>{
	e.stopPropagation()
}

</script>




<template>
	<view class="musicBar" @click="goPlay">
		<view class="barInfo">
			<view class="imgWrap">
				<image class="img" :src="url" mode="widthFix"></image>
			</view>
			
			<view class="name">
				{{name}} <view v-if="musicStore.musicLove.al">
					-{{artist}}
				</view>
			</view>
		</view>
		
		<view class="barTool">
			<!-- <view :class={play:!musicStore.musicLove.al,pause:musicStore.musicLove.al} @click="change"> -->
			<view :class="[{ play: flag }, { pause: !flag }]" @click="change">
				
			</view>
			<view class="list"  @click="detail">
				
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>

.musicBar{
	position: absolute;
	bottom: rpx(0);
	width: 100%;
	height: rpx(50);
	z-index: 9;
	background: white;
	display: flex;
	justify-content: space-between;
	.barInfo{
		display: flex;
		align-items: center;
		padding-left: rpx(10);
		.imgWrap{
			width: rpx(35);
			height: rpx(35);
			border: 3px solid;
			border-radius: rpx(50);
			background: #ccc;
		}
		.img{
			width: rpx(35);
			height: rpx(35);
			border-radius: rpx(50);
		}
		.name{
			line-height: rpx(50);
			margin-left: rpx(10);
			color: rgb(61,70,91);
			font-size: rpx(10);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			display: flex;
		}
	}
	.barTool{
		display: flex;
		margin-right: rpx(10);
		.play{
			width: rpx(50);
			height: rpx(50);
			background: url(../../icon/play.svg) no-repeat center;
			background-size: rpx(25);
		}
		.pause{
			width: rpx(50);
			height: rpx(50);
			background: url(../../icon/songlist/icon-a1.png) no-repeat center;
			background-size: rpx(25);
		}
		.list{
			width: rpx(50);
			height: rpx(50);
			background: url(../../icon/songlist/icon-shlb.png) no-repeat center;
			background-size: rpx(20);
		}
	}
	
}





</style>
