<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {songDetailApi,lyricApi,songUrlApi,SongdetailApi} from "../../base/api/index.js"
	import {watch,computed,ref} from "vue"
	import {useMusicstore} from '../../store/music.js'
    import Curplay from "../../components/showlist/curplay.vue"
	import Share from "../../components/showlist/share.vue"
	import Lyric from "../../components/showlist/lyric.vue"
    import {reLaunch} from "../../base/utils";

	const useStore = useMusicstore() 
	const showLyric=ref(false) //歌词显示隐藏
	const showPlay=ref(false)  //歌曲信息显示隐藏
	const shareShow=ref(false) //分享显示隐藏
	const isCollect=ref(false) //添加收藏
    
	onLoad(()=>{
		uni.hideTabBar()
	})
	
	//切换歌曲
	const subtract = (num) => { // 上一首/下一首
		useStore.musicSubtract(num)
	}
	
    //点击收藏
	const Collect=()=>{
		isCollect.value=!isCollect.value
	}
    
	
	// 滑动改变播放时间
		const musicChange = (e) => {
			useStore.musicTransform(e.detail.value)
		}
	
    //返回上一页
	const back=()=>{
        // const launchOptionsSync = uni.getLaunchOptionsSync();
        // reLaunch("/" + launchOptionsSync.path)
        // uni.showTabBar()
		uni.switchTab({
			url: `/pages/index/index`
		})
	 }
	 
</script>


<template>
	<view class="musicPlay">
		<view class="background"><image :src="useStore.musicLove.al.picUrl" ></image></view>
		<view class="mark"></view>
		<!-- 内容 -->
		<view class="content">
			<!-- 1.头部和CD -->
			<view class="headerCd">
				<view class="top">
					<p @click="back" class="top">
						<image src="../../icon/songlist/icon-bback.png"></image>
					</p>
					<view class="title">{{useStore.musicLove.name}}</view>
					<p @click="shareShow=true" class="top">
						<image src="../../icon/songlist/icon-fenxiang.png" />
					</p>
				</view>
				<!-- CD -->
				<view class="cd">
					<view :class="[useStore.isplay ? 'fixActive' : 'fixed']"><image src="../../icon/songlist/needle-ab.png"></image></view>
					<view  :class="[useStore.isplay?'outerActive':'outer']">
						<view class="cirle">
							<view class="sun">
								<view class="img"  @click="showLyric=true"><image :src="useStore.musicLove.al.picUrl" ></image></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 2.播放和进度条切换-->
			<view class="sliderPlay">
				<view class="name">
					<view class="songName">
						<view class="song">{{useStore.musicLove.name}} <view v-if="useStore.musicLove.alia.length>0">-{{useStore.musicLove.alia[0]}}</view></view>
						<view class="singer">{{useStore.musicLove.ar.map(item=>item.name).join('/')}}</view>
					</view>
					<view class="col" @click="Collect()">
						<image v-if="isCollect"  src="../../icon/songlist/icon-collect.png"></image>
						<image v-else src="../../icon/songlist/icon-collent.png"></image>
					</view>
					<view class="com"><image src="../../icon/songlist/icon-talk.png"></image></view>
				</view>
				<!-- 音量 -->
				<view class="volume" >
					<view class="time">{{useStore.musicNowTime.points}}:{{useStore.musicNowTime.seconds}}</view>
					<view class="slider">
						<slider  class="sliders" @change="musicChange"  min="0" :max="Number(useStore.musicTime.points) * 60 + Number(useStore.musicTime.seconds)" :value="Number(useStore.musicNowTime.points) * 60 + Number(useStore.musicNowTime.seconds)"  block-size="12" activeColor="#1890ff"></slider>
					</view>
					<view class="time">{{useStore.musicTime.points}}:{{useStore.musicTime.seconds}}</view>
				</view> 
				<!-- 播放按钮 -->
				<view class="play">
					<view class="mode" @click="useStore.musicToggle()">
						<image  v-if="useStore.musicMode === 1 " src="../../icon/songlist/icon-liebiaoxunhuan.png" />
						<image  v-else-if="useStore.musicMode === 2 " src="../../icon/songlist/icon-danquxunhuan.png" />
						<image  v-else-if="useStore.musicMode === 3 " src="../../icon/songlist/icon-meiti-suijibofang.png" />
					</view>
					<view :class="['code',{codeClick: useStore.musicBack.length < 1}]">
						<image @click="subtract(-1)"  src="../../icon/songlist/icon-shangyishou.png"></image>
						<view @click="useStore.play()">
							<image v-if="useStore.isplay"  src="../../icon/songlist/icon-a.png" />
							<image v-else src="../../icon/songlist/icon-bofang.png" />
						</view>
						<image   @click="subtract(1)" src="../../icon/songlist/icon-nn.png"></image>
					</view>
					<view class="menu"  @click="showPlay=true"><image src="../../icon/songlist/icon-liebiao.png"></image></view>
				</view>
				<!-- 下载切换模式 -->
				<view class="hash">
					<image  src="../../icon/songlist/icon-qiehuan.png"></image>
					<image  src="../../icon/songlist/icon-xiazai.png"></image>
					<image  src="../../icon/songlist/icon-shenglve.png"></image>
				</view>
			</view>
		</view>
		<!-- 引入 -->
		<Curplay  v-if="showPlay" @click.stop.prevent="showPlay=false"/>  //当前和历史播放
		<Share v-if="shareShow" @click.stop.prevent="shareShow=false"/>   //分享页
		<Lyric v-if="showLyric" @click.stop="showLyric=flase"  />

	</view>
</template>


<style lang="scss" scoped>
	.musicPlay{
		width:100%;
		height:100%;
	}
	.background{
		width:100%;
		height:100%;
		image{
			width:100%;
			height:100%;
		}
	}
	.mark{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(80px);
	}
	.content{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index: 1;
	}
	// CD
	.headerCd{
		// background: cadetblue;
		height:60%;
		display: flex;
		flex-direction: column;
		.top{
			height:10%;
			padding:rpx(2) rpx(10);
			display: flex;
			align-items: center;
			justify-content: space-between;
			color:#DCDCDC;
			p{	
				.title{
					flex:1;
				}
				image{
					width:rpx(22);
					height:rpx(22);
				}
			}
		}
		.cd{
			flex:1;
			display: flex;
			justify-content: center;
			align-items: center;
			// position: relative;
			// 压唱片
			.fixed{
				width: rpx(95);
				height: rpx(110);
				position: absolute;
				top:6%;
				left:50%;
				transform: translate(-50%,-50%);
				z-index: 1;
				transform: rotate(-95deg) scaleX(-1)  scale(1.2) ;
				image {
					width: rpx(90);
					height:rpx(138);
					position: absolute;
					top: 0;
					left: 30%;
					transform-origin: rpx(10) rpx(110);
					transform: rotate(-10deg);
				}
					
			}
			
			.fixActive{
				width: rpx(95);
				height: rpx(110);
				position: absolute;
				top:8%;
				left:49%;
				transform: translate(-50%,-50%);
				z-index: 1;
				transform: rotate(-78deg) scaleX(-1)  scale(1.2) ;
				image {
					width: rpx(90);
					height:rpx(138);
					position: absolute;
					top: 0;
					left: 30%;
					transform-origin: rpx(10) rpx(110);
					transform: rotate(-10deg);
				}
			}
			.outerActive{
				 width:rpx(240);
				 height:rpx(240);
				 animation: rotate 2s linear infinite;
				 border-radius: 50%;
				 background: rgba(200, 200, 200, 0.5);
				 position: absolute;
				 box-shadow: 0 1px 2px 2px #DCDCDC;
				 display: flex;
				 justify-content: center;
				 align-items: center;
			}
			.outer{
				width:rpx(240);
				height:rpx(240);
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				background: rgba(200, 200, 200, 0.5);
				position: relative;
			}
			.cirle{
				width:rpx(220);
				height:rpx(220);
				background: repeating-radial-gradient(black, black rpx(3), #1c1c1c rpx(8));
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				position: relative;
				.sun{
					position: absolute;
					width:rpx(220);
					height:rpx(220);
					left:50%;
					top:50%;
					transform: translate(-50%,-50%);
					border-radius: 50%;
					background: -webkit-linear-gradient(45deg, transParent 35%,
								rgba(255, 255, 255, 0.2) 45%,
								rgba(255, 255, 255, 0.3) 50%,
								rgba(255, 255, 255, 0.2) 55%,
								transParent);
					.img{
						position: absolute;
						width:rpx(170);
						height:rpx(170);
						left:50%;
						top:50%;
						transform: translate(-50%,-50%);
						border-radius: 50%;
						background: red;
						image{
							width:rpx(170);
							height:rpx(170);
							border-radius: 50%;
						}
					}
				}
				
			}
			// 旋转
			
			@keyframes rotate {
				  from {
					transform: rotate(0deg);
				  }
				  to {
					transform: rotate(360deg);
				  }
	    }
      }
	}
	// Play
	.sliderPlay{
		// background: royalblue;
		height:40%;
		display:flex;
		flex-direction: column;
		padding:0 rpx(5);
		.name{
			height:30%;
			padding:0 rpx(15);
			display: flex;
			align-items: center;
		    .songName{
				flex:1;
				color:#DCDCDC;
				overflow:hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-webkit-box-ordinal: vertical;
				.song{
					display: flex;
					padding:0 rpx(5) 0 0;
					overflow:hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					-webkit-box-ordinal: vertical;
				}
				.singer{
					font-size: rpx(13);
					color:	#B0C4DE;
				}
			}
			.col{
				margin:0 rpx(10);
				image{
					width:rpx(25);
					height:rpx(25);	
				}
			}
			.com{
				image{
					width:rpx(25);
					height:rpx(25);	
				}
			}
		}
		.volume{
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding:0 rpx(15);
			margin-bottom:rpx(8);
			.slider{
				flex:1;
			}
			.time{
				color:#fff;
				font-size: rpx(13);
			}
		}
	    .play{
			flex:1;
			display: flex;
			align-items: center;
			padding:0 rpx(15);
			.mode{
				width:rpx(25);
				height:rpx(25);
				image{
					width:100%;
					height:100%;
				}
			}
			.code{
				flex:1;
				display: flex;
				justify-content: space-around;
				image{
					width:rpx(30);
					height:rpx(30);
				}
			}
			.codeClick{
			 pointer-events: none;
		    }
			.menu{
				width:rpx(25);
				height:rpx(25);
				image{
					width:100%;
					height:100%;
				}
			}
		}
		.hash{
			height:30%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			image{
				width:rpx(25);
				height:rpx(25);
			}
			
		}
	}
	
</style>