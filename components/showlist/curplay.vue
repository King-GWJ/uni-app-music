<script setup>
	import {songDetailApi,songUrlApi,SongdetailApi} from "../../base/api/index.js"
	import {watch,computed,ref} from "vue"
	import {useMusicstore} from '../../store/music.js'
	
	
	 const tabList = ref([
            {
                isSelect: true,
                name: "当前播放",
            },
            {
                isSelect: true,
                name: "历史播放",
            }
        ])
		
		const curIndex=ref(0)
		const selectList=ref([]) //接收选择的歌曲
		const useStore=useMusicstore()
		// const list=useStore.musicList //已选择歌曲例表
		const showList=ref(false) //例表显示隐藏
		const curActive=ref(true) //歌曲切换图片高亮
		const selectSong=ref([]) //已选择的歌曲例表
	
		console.log(useStore.musicList)
	
		//切换tab
		const getTabIndex = (index) => {
		    curIndex.value = index
		}
		
</script>

<template>
   <view class="curplay">
	   <view class="list" @click.stop="">
		  <view class="header">
			<view class="nav" @click="getTabIndex(index)" v-for="(item,index) in tabList" :key="item.name">
				{{item.name}}
			</view>
		  </view>
		  <!-- 当前播放 -->
		 <view v-if="curIndex===0" class="listBox">
			<view class="logo">
				<view class="xunhua"><image src="../../icon/songlist/icon-xunh.png"></image>列表循环</view>
				<view class="right">
				   <image src="../../icon/songlist/icon-xz.png"></image>
				   <image src="../../icon/songlist/icon-tj.png"></image>	
				   <image class="ljt" src="../../icon/songlist/icon-ljt.png"></image>	
				</view>
			</view>
			<view class="tuijian">
				<image src="../../icon/songlist/icon-sels.png"></image>
				<view>为你推荐更对喜欢的歌曲</view>
			</view>
			<view class="songlist" @click.stop="">
		        <view :class="{item, active:  useStore.musicIndex=== index}"   @click="useStore.musicIndex= index"    v-for="(item,index) in useStore.musicList" :key="item.name">
					<view class="text">
						<image  v-if="curActive"  src="../../icon/songlist/icon-lvdongq.png"></image>
						<image  v-else  src="../../icon/songlist/icon-lvdongw.png"></image>
						<view class="songtitle">
							<view>{{item.name}}</view><view class="singerName">·{{item.ar.map(v=>v.name).join('/')}}</view>
						</view>
					</view>
					<view class="close">
						<!-- <view>来源</view> -->
						<view class="closes"><image src="../../icon/songlist/icon-closes.png"></image></view>
					</view>
				</view>
			</view>
		 </view>
		 <!-- 历史播放 -->
		 <view v-else="curIndex===1" class="listBody">
			    <view class="swiper">
					<view class="album">
						<view class="avatar"></view>
						<view class="content">123</view>
					</view>
					 
			    </view>
			<view class="allSong">
				<view class="songText">全部歌曲12首</view>
				<view class="logos">
					<image src="../../icon/songlist/icon-load.png"></image>
					<image src="../../icon/songlist/icon-tianjia.png"></image>
					<image src="../../icon/songlist/icon-laj.png"></image>
				</view>
			</view>
			<view class="songs">
				<view class="item"></view>
			</view>
		 </view>
		 <!-- 底部 -->
		<view class="footer">
			<view class="vip">
				<image src="../../icon/songList/icon-vvip.png"></image>
				<view>含2首vip专享歌曲</view>
			</view>
			<view class="price">vip仅￥0.06天</view>
		</view>
	   </view>
   </view>
</template>

<style lang='scss' scoped>
    .curplay{
		/* display: none; */
		position: fixed;
		width: 100%;
		height: 100%;
		left:0;
		bottom:0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}
	.header{
		height:rpx(60);
		border-bottom: 1px solid #eee;
		display: flex;
		padding:0 rpx(15);
		.nav{
			width:rpx(90);
			height:100%;
			line-height: rpx(60);
			&.active{
				border-bottom:rpx(2) solid orangered;
			}
		}
	}
	.list{
		height: rpx(500);
		border-radius: 18px 18px 0 0;
		background: #fff;
		margin-top: rpx(120);
		display: flex;
		flex-direction: column;
		.listBox{
			flex:1;
		}
		.logo{
			display:flex;
			height:rpx(25);
			/* background: skyblue; */
			margin-top:rpx(10);
			font-size:rpx(12);
			align-items: center;
			justify-content: space-between;
			padding:0 rpx(15);
			image{
				width:rpx(15);
				height:rpx(15);
				margin:0 rpx(5);
			}
			.ljt{
				width:rpx(16);
				height:rpx(16);
			}
			.xunhua{
				display: flex;
				height:100%;
				width:rpx(90);
				background: #eee;
				border-radius: rpx(18);
				line-height: rpx(30);
				align-items: center;
			}
		}
		.tuijian{
			height:rpx(30);
			margin-top:rpx(10);
			display:flex;
			font-size:rpx(13);
			color:#696969;
			padding:0 rpx(16);
			align-items: center;
			image{
				width:rpx(16);
				height:rpx(16);
			}
		}
		.songlist{
			flex:1;
			height:20%;
			overflow: hidden;
			overflow-y: auto;
			.item{
				height:rpx(40);
				/* background:burlywood; */
				display:flex;
				align-items: center;
				justify-content: space-between;
				padding:0 rpx(15);
				overflow:hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-webkit-box-ordinal: vertical;
				&.active{
					background:#eee;
					color:red;
				}
				.text{
					display:flex;
					align-items: center;
					font-size:rpx(15);
					overflow:hidden;
				}
				image{
					width:rpx(23);
					height:rpx(23);
					margin:0 rpx(3) 0 0;
				}
				.close{
					width:rpx(30);
					height:rpx(30);
					image{
						width:rpx(30);
						height:rpx(30);
					}
				}
				.songtitle{
					display:flex;
					padding:0 rpx(10) 0 0;
					overflow:hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					-webkit-box-ordinal: vertical;
				}
				.singerName{
					color:	#696969;
					font-size:rpx(13);
				}
				
			}
		}
		.right{
			display: flex;
		}
	}
	/* 历史 */
	.listBody{
		display: flex;
		flex-direction: column;
		.swiper{
			display:flex;
			height:rpx(80);
			padding:0 rpx(15);
			align-items: center;
			background: skyblue;
			&::-webkit-scrollbar{height:0px};
			.album{
				background:#eee;
				width:rpx(210);
				height:rpx(60);
				border-radius: rpx(5);
				display:flex;
				align-items: center;
				.avatar{
					width:rpx(60);
					height:rpx(60);
					border-radius: rpx(5);
					background: royalblue;
				}
				.content{
					margin:0 rpx(10);
				}
			}
			image{
				width:rpx(20);
			}
		}
		.allSong{
			height:rpx(40);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 rpx(15);
			font-size: rpx(14);
			.logos{
				display: flex;
				align-items: center;
			}
			image{
				width:rpx(18);
				height:rpx(18);
				margin:0 rpx(10);
			}
			
		}
		.songs{
			height:rpx(290);
			overflow:hidden;
			overflow-y: auto;
			.item{
				height:rpx(40);
				background:burlywood;
				display:flex;
				align-items: center;
				justify-content: space-between;
				padding:0 rpx(15);
			}
		}
	}
	.footer{
		height:rpx(30);
		background:	#FFE4E1;
		display:flex;
		padding:0 rpx(15);
		font-size:rpx(13);
		justify-content: space-between;
		aline-item:center;
		.vip{
			display:flex;
			align-items: center;
		}
		image{
			width:rpx(50);
			height:rpx(16);
			margin:0 rpx(5) 0 0;
		}
		.price{
			border:1px solid red;
			height:rpx(19);
			border-radius: rpx(18);
			padding:0 rpx(10);
			color:red;
			margin-top:rpx(5);
		}
	}
	
</style>
