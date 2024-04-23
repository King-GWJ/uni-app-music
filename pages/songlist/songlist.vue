
<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import { SongdetailApi } from '../../base/api/index.js'
	import Showlist from "../../components/showlist/showlist.vue"
	import Setting from "../../components/showlist/setting.vue"
	import { useMusicstore } from "../../store/music.js"
	import { ref } from "vue";

    
	const useStore = useMusicstore() 
	const songList = ref([]);  //接受传过来的数据
	const curIndex=ref(0)  //当前下标
	const optionId=ref(0)
	const float=ref(false) //显示隐藏
	const songDetail=ref([])
    const itemSong=ref({})

	onLoad((options)=>{
		console.log(options.id)
		//获取详情歌单数据
		SongdetailApi(options.id).then(res=>{
			songList.value=res.playlist
			console.log(songList.value)
		})
	})

	//跳转vip界面
	const goVip = () => {
	  uni.navigateTo({
		url: "/pages/vippage/vippage"
		
	  })
	}
	
	//跳转播放页
	const playPage=(item,index)=>{
	  useStore.musicAllList(songList.value.tracks,item,index)
	  uni.navigateTo({
		url: `/pages/musicPlay/musicPlay?id=${item.id}&index=${index}`
	  })
	}
    
	//显示隐藏歌曲信息
	const itemDetail=(f,t)=>{
		
		console.log(f)
		console.log(!f)
		songDetail.value=t
		console.log(songDetail.value)
		itemSong.value=songDetail.value
		float.value=!f
	}
	
	//跳转至榜单页面
	const backPage=()=>{
	  uni.navigateTo({
	  	url: '/pages/recommended/recommended'
	  })
	}
	

</script>

<template>
	<view class="musiclist">
		<view class="header">
			<image :src="songList.coverImgUrl"></image>
			<view class="search">
				<!-- <view class="back" @click="backPage"><image src="../../icon/songlist/icon-leftt.png"></image></view>
				<view class="serchlogo">
					<image class="ser" src="../../icon/songlist/icon-sousuo.png"></image>
					<image src="../../icon/songlist/icon-24gf-ellipsisVertical.png"></image>
				</view>	 -->
			</view>
		</view>
		<view class="nav">
			<view class="logo"><image src="../../icon/songlist/icon-tianjia.png"></image>{{(songList.subscribedCount/100/100).toFixed(2)}}</view>
			<view class="logo"><image src="../../icon/songlist/icon-xiaoxi.png"></image>{{(songList.commentCount/10/100).toFixed(2)}}万</view>
			<view class="logo"><image src="../../icon/songlist/分享.png"></image>{{songList.shareCount}}</view>
		</view>
		<view class="main">
			<view class="bofang">
				<view class="vipicon">
					<view class="vip">
						<image src="../../icon/songlist/icon-vip.png"></image>
						<view class="vipS">含1首vip专享歌曲</view>
					</view>
					<view class="vipprice">
						<view>vip仅￥0.06/天</view>
						<image src="../../icon/songlist/icon-right.png"></image>
					</view>
				</view>
				<view class="allPlay">
					<view class="all">
						<image src="../../icon/songlist/red-bofang.png"></image>
						<view>全部播放（{{songList.trackCount}}）</view>
					</view>
					<view class="xiazai"><image src="../../icon/songlist/icon-load.png"></image></view>
					<view class="libiao"><image src="../../icon/songlist/icon-lib.png"></image></view>
				</view>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in songList.tracks"  :key="item.name">
					<view class="num">{{index+1}}</view>
					<view class="text" @click="playPage(item,index)">
					   <view class="title">
						   <view>{{item.name}}</view>
						   <view class="alia">{{item.alia[0]}}</view>
					   </view>
					   <view class="singer">
						   <!-- <view><image :src="item.picUrl"></image></view> -->
						   <view class="singerName">{{item.ar.map(v=>v.name).join("/")}}</view>
					   </view>
					</view>
					<!-- @click.stop="showlist=true" -->
					<view class="set" @click="itemDetail(float,item)"><image src="../../icon/songlist/icon-Vertical.png"></image></view>
				</view>
			</view>
			<!-- 底部 -->
			<Showlist  :clickItem="itemSong"/>
		<!-- 每首歌曲右侧设置... -->
		</view>
		<Setting v-if="float"  @click.stop="float=false" :itemSong="itemSong"/>
		
	</view>

</template>


<style lang="scss" scoped>
   .musiclist{
	   width:100%;
	   height:100%;
	   display:flex;
	   flex-direction: column;
	   position: relative;
   }
   .header{
	   height:30%;
	   position:relative;
	   image{
		   width:100%;
		   height:100%;
	   }
	   .search{
		   height:rpx(35);
		   width:100%;
		   padding:8px 15px;
		   position: absolute;
		   top:0;
		   left:0;
		   display: flex;
		   justify-content:space-between;
		   align-items: center;
		   .back{
			   width:rpx(30);
		   }
		   .serchlogo{
			   display: flex;
			   width:rpx(110);
			   height:rpx(30);
		   }
		   .ser{
			   margin:0 10px;
		   }
		   image{
			   width:rpx(30);
			   height:rpx(30);
		   }
		   
	   }
	   
   }
   .main{
	   height:68%;
	   .bofang{
		   height:26%;
		   position: relative;
		   .vipicon{
			   width:rpx(300);
			   height:rpx(40);
			   border-radius: rpx(15);
			   border:1px solid #eee;
			   position: absolute;
			   left:50%;
			   top:45%;
			   transform: translate(-50%,-50%);
			   display: flex;
			   align-items: center;
			   justify-content: space-between;
			   padding:0 rpx(10);
			   .vip{
				   display: flex;
			   }
			   image{
				   width:rpx(20);
				   height:rpx(20);
				   
			   }
			   .vipS{
				   font-size: rpx(13);
				   margin: 0 rpx(5);
				   image{
					   width:rpx(20);
					   height:rpx(20);		   
				   }
			   }
			   .vipprice{
				   font-size: rpx(12);
				   color:#bebebe;
				   display: flex;
				   align-items: center;
			   }
		   }
		   .allPlay{
			   height:rpx(40);
			   width:100%;
			   position: absolute;
			   left:50%;
			   top:80%;
			   transform: translate(-50%,-50%);
			   background: #fff; 
			   display: flex;
			   align-items: center;
			   .all{
				   flex:1;
				   display: flex;
				   font-size: rpx(14);
				   font-weight: 900;
				   margin-left: 10px;
				   image{
					   margin-right: 20px;
				   }
			   }
			   .xiazai{
				   width:rpx(20);
				   height:rpx(20);
				   margin: 0 rpx(10);
			   }
			   .libiao{
				   width:rpx(18);
				   height:rpx(18);
				   margin-right: 20px;
			   }
			   image{
				   width:rpx(20);
				   height:rpx(20);
			   }
		   }
	   }
	   .list{
		   height:68%;
		   overflow: hidden;
		   overflow-y: auto;
		   .item{
			   height:rpx(55);
			   // background:#eee;
			   display: flex;
			   align-items: center;
			   justify-content: space-between;
			   padding:0 rpx(15);
			   overflow:hidden;
			   white-space: nowrap;
			   text-overflow: ellipsis;
			   -o-text-overflow:ellipsis;
			   .num{
				   width:rpx(20);
				   margin-right: rpx(10);
			   }
			   .text{
				   flex:1;
				   display: flex;
				   flex-direction: column;
				   .title{
					   display:flex;
					   .alia{
						   font-size:rpx(15);
						   color:#708090;
					   }
				   }
				   .singer{
					   font-size:rpx(13);
					   color:#696969;
					   .singerName{
						   overflow:hidden;
						   white-space: nowrap;
						   text-overflow: ellipsis;
						   -o-text-overflow:ellipsis;
					   }
				   }
			   }
			   .set{
				   width:rpx(20);
				   margin-left: rpx(10);
				   image{
					   width:rpx(20);
					   height:rpx(20);
				   }
			   }
		   }
	   }
   }
   .nav{
	   position: absolute;
	   left:50%;
	   top:30%;
	   transform: translate(-50%,-50%);
	   width:rpx(280);
	   height:rpx(40);
	   background: #fff;
	   border-radius: rpx(18);
	   display: flex;
	   align-items: center;
	   padding:0 rpx(10);
	   z-index: 1;
	   box-shadow: 0 1px 1px 2px #eee;
	   .logo{
		   flex:1;
		   border-right: 1px solid #bebebe;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   font-size: rpx(12);
		   &:last-child{
			   border:0;
		   }
		   image{
			   width:rpx(18);
			   height:rpx(18);
			   margin:0 rpx(5);
		   }
	   }
   }
   
</style>
