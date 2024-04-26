
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
    const isVip=ref(1)
	
	
	onLoad((options)=>{
		console.log(options.id)
		//获取详情歌单数据
		SongdetailApi(options.id).then(res=>{
			songList.value=res.playlist
			console.log(songList.value)
		})
	})

    //榜单更新时间
	const timestampMs = 1714008113960;
	const timestampS = Math.floor(timestampMs / 1000);  //秒
	const date = new Date(timestampS);
	const formattedTime = date.toISOString();  // 转化格式
	
	console.log(formattedTime);  // 输出格式化的时间




	//跳转vip界面
	const goVip = () => {
	  uni.navigateTo({
		url: "/pages/vippage/vippage"
		
	  })
	}
	
	//跳转播放页
	const playPage=(item,index)=>{
	  useStore.musicAllList(songList.value.tracks,item,index,songList.value.name)
	  uni.switchTab({
		url: `/pages/musicPlay/musicPlay?id=${item.id}&index=${index}`
	  })
	}
    
	//显示隐藏歌曲信息
	const itemDetail=(f,t)=>{
		event.stopPropagation()
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
			<view class="wy"><image src="../../icon/songlist/icon-wyy.png"></image>网易云音乐</view>
			<view class="search">
				<view class="back" @click="backPage"><image src="../../icon/songlist/icon-lefe.png"></image></view>
				<view class="serchlogo">
					<image class="ser" src="../../icon/songlist/icon-sousuo.png"></image>
					<image class="ser" src="../../icon/songlist/icon-24gf-ellipsisVertical.png"></image>
				</view>	
			</view>
		</view>
		<view class="nav">
			<view class="logo"><image src="../../icon/songlist/icon-tianjia.png"></image>{{(songList.subscribedCount/100/100).toFixed(2)}}万</view>
			<view class="logo"><image src="../../icon/songlist/icon-xiaoxi.png"></image>{{(songList.commentCount/10/100/10).toFixed(2)}}万</view>
			<view class="logo"><image src="../../icon/songlist/icon-fx.png"></image>{{songList.shareCount}}</view>
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
				<view class="item" v-for="(item,index) in songList.tracks"  :key="item.name"  @click="playPage(item,index)">
					<view class="num">{{index+1}}</view>
					<view class="text">
					   <view class="title">
						   <view>{{item.name}}</view>
						   <view class="alia">{{item.alia[0]}}</view>
					   </view>
					   <view class="singer">
						   <view v-if="songList.isVip"> <image src="../../icon/songlist/icon-vipv.png"></image></view>
						   <!-- <view v-else><image></image></view> -->
						   <view class="singerName">{{item.ar.map(v=>v.name).join("/")}}-{{item.name}}</view>
					   </view>
					</view>
					<!-- <view class="mv"><image src=""></image></view> -->
					<view class="set" @click="itemDetail(float,item)">
						<view class="mv" v-if="item.mv>0"><image  src="../../icon/songlist/icon-mv.png"></image></view>
						<view><image src="../../icon/songlist/icon-Vertical.png"></image></view>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			
		<!-- 每首歌曲右侧设置... -->
		</view>
		<Showlist class="123" :clickItem="itemSong"/>
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
	   height:36%;
	   position:relative;
	   image{
		   width:100%;
		   height:100%;
	   }
	   .wy{
		   font-size:rpx(13);
		   position: absolute;
		   top:30%;
		   left:50%;
		   transform: translate(-50%,-50%);
		   color:#fff;
		   display: flex;
		   align-items: center;
		   image{
			   width:rpx(18);
			   height:rpx(18);
			   margin-right:rpx(5);
		   }
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
			   width:rpx(29);
			   height:rpx(29);
		   }
		   
	   }
	   
   }
   .main{
	   // height:70%;
	   flex: 1;
	   overflow: auto;
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
		   height:74%;
		   overflow-y: auto;
		   .item{
			   height:rpx(55);
			   // background:#eee;
			   display: flex;
			   align-items: center;
			   justify-content: space-between;
			   padding:0 rpx(15);
			   .num{
				   width:rpx(20);
				   margin-right: rpx(10);
			   }
			   .text{
				   flex:1;
				   display: flex;
				   flex-direction: column;
	               overflow:hidden;
	               white-space: nowrap;
	               text-overflow: ellipsis;
	               -webkit-box-ordinal: vertical;
				   .title{
					   display:flex;
					   .alia{
						   font-size:rpx(15);
						   color:#808080;
					   }
				   }
				   .singer{
					   font-size:rpx(13);
					   color:#696969;
					   margin-top:rpx(5);
					   display: flex;
					   image{
						   width:rpx(20);
						   height:rpx(20);
					   }
					   .singerName{
						   overflow:hidden;
						   white-space: nowrap;
						   text-overflow: ellipsis;
						   -o-text-overflow:ellipsis;
					   }
				   }
			   }
			   .set{
				   margin-left: rpx(10);
				   display: flex;
				   image{
					   width:rpx(23);
					   height:rpx(22);
				   }
				   .mv{
					    margin:0 rpx(5);
				   }
			   }
		   }
	   }
   }
   .nav{
	   position: absolute;
	   left:50%;
	   top:36%;
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
