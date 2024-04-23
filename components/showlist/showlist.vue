<script setup>
   import { defineProps } from 'vue';
   import CaurPlay from './curplay.vue'
   import {onLoad} from '@dcloudio/uni-app'
   import { SongdetailApi } from '../../base/api/index.js'
   import Showlist from "../../components/showlist/showlist.vue"
   import Setting from "../../components/showlist/setting.vue"
   import { ref } from "vue";
   import { useMusicstore } from '../../store/music.js'
   
   const showList=false //例表显示隐藏
   const selectSong=ref([])
   
   
   const props = defineProps({
     clickItem: Array
   })
   
   
   
</script>


<template>
	<view>
		<view class="footer">
			<view class="circle">
				<view class="img"></view>
			</view>
			<view class="name">1111111111111111111111111111111111</view>
			<p class="logo"><image src="../../icon/songlist/icon-bfang.png"/></p>
			<p class="logo2"><image src="../../icon/songlist/icon-mus.png"/></p>

		</view>
		<CaurPlay v-if="showList" />
	</view>
	
	
</template>


<style lang="scss" scoped>
	.footer{
		height:rpx(40);
		display:flex;
		align-items: center;
		padding:0 rpx(10);
	}
	
	.circle{
		width:rpx(39);
		height:rpx(39);
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