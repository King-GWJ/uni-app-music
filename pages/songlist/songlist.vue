<template>
	<view class="musiclist">
		<view class="header">
			<view class="search">
				<p class="back">
				</p>
				<view class="inp">
					<input type="text" >
					<p class="logo">
						<!-- <image src="../../icon/songlist/icon-sousuo.png"/> -->
					</p>
				</view>
				<span class="shrink">
					
				</span>
			</view>
		</view>
		<view class="nav"></view>
		<view class="vip"></view>
		<view class="songList">
			<view class="allPlay"></view>
			<view class="item">
				<P class="num">
					<span></span>
					<span></span>
				</P>
				<view class="title">
					<h5></h5>
					<span></span>
				</view>
				<p></p>
				<p></p>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	
	// import { dragonBalltApi } from '../../base/api/index.js'
	// dragonBalltApi().then(res=>{
	// 	console.log(res)
	// }) 
</script>

<style lang="scss" scoped>
   .musiclist{
	   width:100%;
	   height:100%;
	   display:flex;
	   flex-direction: column;
	    position: relative;
   }
   
   .header{
	   height:rpx(150);
	   background:#eee;
	   .search{
	   	   height:rpx(35);
	   	   display: flex;
	   	   background: #bebebe;
	   		  
	   	}
	   	.back,.shrink{
	   		width:rpx(30);
	   		height:100%;
	   		background:#eee;
	   	}
		.shrink{
			display: block;
			width:rpx(30);
			height:100%;
			background:#eee;
		}
	   	.inp{
	   		flex:1;
			padding:1px 10px;
			display: flex;
			input{
				flex:1;
				height:100%;
			}
			image{
				width:rpx(30);
				height:rpx(30);
			}
	   	}
	   	
   }
   
   
   .nav{
   		   width:rpx(260);
   		   height:rpx(40);
   		   border-radius: 60px;
   		   background:#bebebe;
   		   position: absolute;
		   top:rpx(130);
		   left:15%;
		   
   		   
   }
   
   .vip{
	   margin:0 auto;
	   width:rpx(300);
	   height:rpx(40);
	   border:1px solid #eee;
	   margin-top:rpx(35);
	   border-radius: 8px;
	   
   }
   
   .allPlay{
	   margin:rpx(30) 0;
	
   }
   .item{
	   display: flex;
	   .num{
		   width:rpx(70);
		   height:100%;
	   }
	   .title{
		   display: flex;
		   flex-direction: column;
		   flex:1;
	   }
	   
   }
</style>
