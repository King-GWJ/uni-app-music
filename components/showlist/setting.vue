<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import { SongdetailApi } from '../../base/api/index.js'
	import Showlist from "../../components/showlist/showlist.vue"
	import Setting from "../../components/showlist/setting.vue"
	import { ref ,defineProps } from "vue";
	import { useMusicstore } from '../../store/music.js'
	
	const data=ref({})
	
	const props = defineProps({
	  itemSong: Object,
	});
    data.value=props.itemSong
	console.log(data)
	
	
</script>

<template>
	<view class="setting">
	  <view class="showlist">
	    <view class="showtop">
	      <view class="text">
	        <view class="cover"><image :src="data.al.picUrl"/></view>
			<view class="name"> 
				<p><h3>歌曲:</h3>{{data.name}}</p>
				<span>{{data.ar.map(item=>item.name).join('/')}}</span>
			</view>
			<view class="vip">vip仅￥0.06/天</view>
	      </view>
		  <span class="zhuyi">开通vip畅享千万曲库下载特权</span>
	    </view>
		<view class="selectlist">
			<p class="select"><image src="../../icon/songlist/icon-close.png"/>不感兴趣</p>
			<p class="select"><image src="../../icon/songlist/icon-zan.png"/>赞赏好音乐</p>
			<p class="select"><image src="../../icon/songlist/icon-bfang.png"/>下一首播放</p>
			<p class="select"><image src="../../icon/songlist/icon-tianjia.png"/>收藏到歌单</p>
			<p class="select"><image src="../../icon/songlist/icon-load.png"/>下载</p>
			<p class="select"><image src="../../icon/songlist/icon-xiaoxi.png"/>评论（568）</p>
			<p class="select"><image src="../../icon/songlist/icon-fx.png"/>分享</p>
			<p class="select"><image src="../../icon/songlist/icon-singer.png"/>歌手：范倪</p>
			<p class="select"><image src="../../icon/songlist/icon-create.png"/>创作者：姜帆/浅紫/常伟</p>
			<p class="select"><image src="../../icon/songlist/icon-zhuanji.png"/>专辑：我都明白</p>
		</view>
	  </view>
	</view>
</template>

<style lang="scss" scoped>
	.setting {
	  position: fixed;
	  width: 100%;
	  height: 100%;
	  left:0;
	  bottom:0;
	  background-color: rgba(0, 0, 0, 0.5);
	  z-index: 1;
	  .showlist {
	    height: rpx(500);
	    border-radius: 18px 18px 0 0;
	    background: #fff;
	    margin-top: rpx(183);
		display: flex;
		flex-direction: column;
	    .showtop {
	      height: rpx(80);
	      border-bottom: 1px solid #eee;
		  display: flex;
		  flex-direction: column;
		  padding:rpx(15) rpx(15);
		  .text{
			  flex:1;
			  // background:skyblue;
			  display: flex;
			  .cover{
				  width:rpx(60);
				  border-radius: rpx(8);
				  background: royalblue;
				  image{
					  width:100%;
					  height:100%;
					  border-radius: rpx(8);
				  }
			  }
			  .name{
				  margin: 0 rpx(5);
				  width:rpx(160);
				  // background: cadetblue;
				  p{
					font-size: rpx(14);
					display: flex;
					flex-wrap: warp;
					align-items: center;
				  }
				  span{
					  display: block;
					  font-size: rpx(12);
					  color:#808080;
				  }
			  }
			  .vip{
				  font-size: rpx(12);
				  border:1px solid red;
				  padding:0 rpx(5);
				  height:rpx(25);
				  border-radius: rpx(17);
				  line-height: rpx(25);
				  color:red;
				  margin: rpx(15) 0 0 rpx(2);
			  }
		  }
		  .zhuyi{
			  height:rpx(20);
			  line-height:rpx(20);
			  font-size: rpx(12);
			  color:#808080;
			  margin-top: rpx(2);
			  
		  }
	    }
	  }
	  .selectlist{
		  flex:1;
		  overflow: hidden;
		  overflow-y: auto;
		  padding:3px 0;
	  }
	  .select{
		  height:rpx(40);
		  line-height:rpx(40);
		  // background: skyblue;
		  margin:rpx(5) rpx(10);
		  display: flex;
		  align-items: center;
		  image{
			  width: rpx(22);
			  height: rpx(22);
			  margin:0 rpx(5);
		  }
	  }
	}
	
</style>