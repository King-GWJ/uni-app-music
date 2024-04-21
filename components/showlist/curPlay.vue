
<script setup>
	import {ref} from 'vue'
	const data=[
		{
			title:'当前播放' ,
			text:[123,321]
		},
		{
			title:'历史播放' ,
			text:[789,987]
		}
	]
	const curIndex=ref(0) //当前下标
	
</script>


<template>title
	<view class="curplay">
		<view class="curlist">
			<header>
					<p v-for="(item,index) in data" :class="{active:curIndex===index}" @click="curIndex=index">{{item.title}}</p>
			</header>
			<!-- swiper -->
			<view class="uniswiper">
				<swiper class="swiper" circular :indicator-dots="indicatorDots"  :interval="interval" :duration="duration">
					<!-- 当前播放 -->
					<swiper-item>
						<view class="cur">
							<view class="logo">
								<view class="moshi"><p><image src="../../icon/songlist/icon-light.png"/></p>循环列表</view>
								<view class="iconItem">
									<p class="icon"><image src="../../icon/songlist/icon-xiaz.png"/></p>
									<p class="icon"><image src="../../icon/songlist/icon-tjia.png"/></p>
									<p class="icon"><image src="../../icon/songlist/icon-lajit.png"/></p>
								</view>
							</view>
							<view class="list">
								<view class="listItem">
									<p><image src="../../icon/songlist/icon-lvdong.png"/></p>
									<span>11111111111111111111111111111111111</span>
									<view class="laiyuan">来源</view>
									<p class="close"><image src="../../icon/songlist/icon-outline.png"/></p>
								</view>
							</view>
						</view>
					</swiper-item>
					<!-- 历史播放 -->
					 <swiper-item>
						<view :class="curIndex===index">B</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>

 .curplay{
	 position:fixed;
	 top:0;
	 left:0;
	 width:100%;
	 height:100%;
	 background: rgba(0,0,0,.5);
	 
 }
 .curlist{
	 left:0;
	 bottom:0;
	 height:rpx(500);
	 background:#fff;
	 margin-top:rpx(180);
	 border-radius: rpx(18) rpx(18) 0 0;
	 display: flex;
	 flex-direction: column;
	 
 }
 header{
	 height:rpx(70);
	 border-bottom: 1px solid #eee;
	 padding:0 rpx(5);
	 display: flex;
	 align-items: center;
	 p{
		// background: red;
		padding:24px 0 ;
		margin:0 rpx(8);
		&.active{
			font-weight: 1000;
			border-bottom: 3px solid orange;
		}
	 }
 }
 .uniswiper{
	 flex:1;
	 .swiper{
		 height:100%;
	 }
	 swiper-item{
		 height:100%;
		 display: flex;
		 flex-direction: column;
		 .cur{
			 flex:1;
			 display:flex;
			 flex-direction: column;
			 .logo{
				 height:rpx(60);
				 // background:red;
				 padding: 0 rpx(10);
				 display: flex;
				 align-items: center;
				 justify-content: space-between;
				 .moshi{
					 font-size:rpx(13);
					 color:	#C0C0C0;
					 display:flex;
					 background: #eee;
					 border-radius: rpx(18);
					 padding: rpx(4) rpx(5);
					 align-items: center;
					 p{
						width:rpx(16);
						height:rpx(16);
						padding:0 rpx(5);
						image{
							width:100%;
							height:100%;
						}
					 }
				 }
				 .iconItem{
					 display: flex;
					 .icon{
						 width:rpx(20);
						 height:rpx(20);
						 margin:0 rpx(5);
						 image{
							 width:100%;
							 height:100%;
						 }
					 }
				 } 
			 }
			 .list{
				 flex:1;
				 // background:skyblue;
				 .listItem{
					height:rpx(50);
					background: #eee;
					display:flex;
					align-items: center;
					padding:0 rpx(10);
					p{
						width:rpx(20);
						height:rpx(20);
						image{
							width:100%;
							height:100%;
						}
					}
					span{
						display: block;
						flex:1;
						padding:0 rpx(10);
						overflow:hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						-o-text-overflow:ellipsis;
						&.active{
							color:red;
						}
					}
					.laiyuan{
						font-size:rpx(12);
						border:1px solid #C0C0C0;
						height:rpx(20);
						padding:0 rpx(5);
						border-radius: rpx(18);
						line-height: rpx(20);
					}
					.close{
						width:rpx(20);
						height:rpx(20);
						margin: 0 rpx(5);
						image{
							width:100%;
							height:100%;
						}
					}
				}
			 }
		 }
		 
	 }
 }
</style>