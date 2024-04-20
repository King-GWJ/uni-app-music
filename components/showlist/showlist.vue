
<script setup>
	import {ref} from 'vue'
	const data=[
		{
			title:'当前播放',
			text:[123,321]
		},
		{
			title:'历史播放',
			text:[789,567]
		}
	]
	const curIndex=ref(0)

</script>


<template>
	
	<view class="footer">
		<view class="current">
			<view class="songCover">
				<view class="img"><imgage/></view>
			</view>
			<view class="name">歌曲名称</view>
			<p><image  src="../../icon/songlist/icon-bf.png"/></p>
			<p><image  src="../../icon/songlist/icon-lb.png"/></p>
		</view>
		<view class="showlibiao">
			<view class="curlist">
				<header>
					<p v-for="(item,index) in data"  :class="{ active: curIndex === index }" @click="curIndex = index">{{item.title}}</p>
				</header>
				<view class="center">
					<swiper class="swiper" circular :indicator-dots="indicatorDots"  :interval="interval" 
                         :duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<view class="logo">
									<view class="xunhuan"><p><image  src="../../icon/songlist/icon-light.png"/></p>无限循环</view>
									<view class="icon">
										<span class="img"><image  src="../../icon/songlist/icon-xiaz.png"/></span>
										<span class="img"><image  src="../../icon/songlist/icon-tjia.png"/></span>
										<span class="img"><image  src="../../icon/songlist/icon-lajit.png"/></span>
									</view>
								</view>
								 <view class="listenList">
									<view class="item">
										<p class="songName"><image  src="../../icon/songlist/icon-lvdong.png"/><span></span></p>
										<p class="ly">来源</p>
										<span><span class="img"><image  src="../../icon/songlist/icon-outline.png"/></span></span>
									</view>
								 </view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<view>
									<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
										:duration="duration">
										<swiper-item>
											<view class="swiper-item uni-bg-red">A</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-item uni-bg-green">B</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-item uni-bg-blue">C</view>
										</swiper-item>
									</swiper>
								</view>
								<view></view>
								<p></p>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>
	*{
		list-style: none;
	}
	.footer{
		
	   height:rpx(40);
	   // background:red;
	   display:flex;
	   align-items: center;
     } 
     .current{
		 height:rpx(40);
		 width:100%;
		 display:flex;
		 padding:0 rpx(15);
		 align-items: center;
		 vertical-align: middle;
		 .songCover{
		 		   width:rpx(30);
		 		   height:rpx(30);
		 		   border-radius: 50%;
		 		   background: black;
		 		   display: flex;
		 		   justify-content: center;
		 		   align-items: center;
		 		   .img{
		 			   width:rpx(18);
		 			   height:rpx(18);
		 			   border-radius: 50%;
		 			   background: skyblue;
		 
		 		   }
		 		   
		 }
		 .name{
		 	flex:1;
		 	padding:0 rpx(15);
		 	font-size: rpx(13);
		 }
		 p{  
		 	margin:0 rpx(5);
		 	image{
		 		width:rpx(22);
		 		height:rpx(22);
		 	}
		 }
	 }
	 
	 .showlibiao{
		 display: none;
		 position:fixed;
		 width:100%;
		 height:100%;
		 top:0;
		 left:0;
		 background-color: rgba(0,0,0,0.5);
		 .curlist{
			 position: absolute;
			 left:0;
			 bottom:0;
			 width:100%;
			 height:rpx(480);
			 background: #fff;
			 border-radius: 18px 18px 0 0;
			 header{
				 height:rpx(60);
				 border-bottom:1px solid #DCDCDC;
				 display: flex;
				 align-items: center;
				 padding:0 6px;
				 p{
					 margin:0 20px;
					 padding:19px 0;
					&.active{
					  border-bottom: 3px solid orange;
					 }
				 }
			 }
			 
			 center{
				 flex:1;
				 // .swiper{
					//  width:100%;
					//  height:100%;
				 // }
			 }
			 .logo{
				 height:rpx(50);
				 // background:red;
				 display:flex;
				 align-items: center;
				 justify-content: space-between;
				 padding:0 rpx(10);
				 .xunhuan{
					  display:flex;
					  font-size: rpx(13);
					  border:1px solid #DCDCDC;
					  border-radius: 15px;;
					  height:25px;
					  line-height: 25px;
					  padding:0 5px;
					  background: #eee;
					  color:gray;
					 p{
						 margin-top: 5px;
						image{
							width:rpx(20);
							height:rpx(20);	
						}
					 }
				 }
				 .icon{
					 display:flex;
					 align-items: center;
					 .img{
						 display: block;
						 line-height: rpx(8);
						 margin:0 rpx(8);
						 image{
							 width:rpx(20);
							 height:rpx(20);
						 }
					   }
					 }
				 } 
		     }
			 .listenList{
				flex:1;
				 .item{
					 height:35px;
					 line-height: 35px;
					 background:#eee;
					 padding:0 10px;
					 display: flex;
					 align-items: center;
					 .songName{
						 flex:1;
						 display: flex;
						 align-items: center;
						 image{
							 width:rpx(20);
							 height:rpx(20);
							 margin-top:10px;
						 }
						 span{
							 display:block;
							 flex:1;
						 }
					 }
					 .ly{
						 width:rpx(30);
						 height:rpx(15);
						 line-height: rpx(15);
						 text-align: center;
						 font-size: rpx(12);
						 color:#CDCDCD;
						 border:1px solid #CDCDCD;
						 border-radius: rpx(15);
						 margin-right: rpx(10);
					 }
					 span{
						 display:block;
						 width:rpx(20);
						 height:rpx(26);
						 image{
							 width:rpx(20);
							 height:rpx(20);	
						 }
					 }
				 }
				 
			 }
			 
	 }
</style>
