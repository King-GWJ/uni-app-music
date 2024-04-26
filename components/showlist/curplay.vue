<script setup>
	import {songDetailApi,songUrlApi,SongdetailApi} from "../../base/api/index.js"
	import {watch,computed,ref} from "vue"
	import {useMusicstore} from '../../store/music.js'
	import Historyplay from './historyPlay.vue'

	const tabList = ref([{
			isSelect: true,
			name: "当前播放",
		},
		{
			isSelect: true,
			name: "历史播放",
		}
	])

	const curIndex = ref(0)
	const useStore = useMusicstore()
	const showList = ref(false) //例表显示隐藏
	const curActive = ref(true) //歌曲切换图片高亮
	let showPop = ref(false) //展示弹窗
	
	
	//点击确认清空列表
	const affirm=()=>{
		showPop.value=!showPop
		useStore.musicList=[]
	}
	

	//切换tab
	const getTabIndex = (index) => {
		curIndex.value = index
	}

	//点击删除（当前播放）
	const del = (item) => {
		const index = useStore.musicList.findIndex(v => v.id === item)
		if (index !== -1) {
			useStore.musicList.splice(index, 1)
			useStore.musicLove = useStore.musicList[index]
		}
	}


	
</script>

<template>
	<view class="curplay">
		<view class="list" @click.stop="">
			<view class="header">
				<view :class="['nav',{active:curIndex===index}]" @click="getTabIndex(index)"
					v-for="(item,index) in tabList" :key="item.name">
					{{item.name}}
				</view>
			</view>
			<!-- 当前播放 -->
			<view v-if="curIndex===0" class="listBox">
				<view class="logo">
					<view class="xunhua">
						<image src="../../icon/songlist/icon-xunh.png"></image>列表循环
						<!-- <image  v-else-if="useStore.musicMode === 2" src="../../icon/songlist/icon-danquxunhuan.png"></image>单曲循环 -->
						<!-- <image  v-else-if="useStore.musicMode === 3" src="../../icon/songlist/icon-meiti-suijibofang.png"></image>随机播放 -->
					</view>
					<view class="right">
						<image src="../../icon/songlist/icon-xz.png"></image>
						<image src="../../icon/songlist/icon-tj.png"></image>
						<image  @click="showPop=!showPop"  class="ljt" src="../../icon/songlist/icon-ljt.png"></image>
					</view>
				</view>
				<view class="tuijian">
					<image src="../../icon/songlist/icon-sels.png"></image>
					<view>为你推荐更对喜欢的歌曲</view>
				</view>
				<view class="songlist" @click.stop="">
					<view :class="{item, active:  useStore.musicIndex=== index}"
						v-for="(item,index) in useStore.musicList" :key="item.name">
						<view class="text" @click="useStore.musicIndex= index">
							<image v-if="useStore.musicIndex=== index" src="../../icon/songlist/icon-lvdongq.png">
							</image>
							<image v-else src="../../icon/songlist/icon-lvdongw.png"></image>
							<view class="songtitle">
								<view class="Name">{{item.name}}</view>-<view class="singerName">
									{{item.ar.map(v=>v.name).join('/')}}</view>
							</view>
						</view>
						<view class="close" @click="del(item.id)">
							<!-- <view>来源</view> -->
							<view class="closes">
								<image src="../../icon/songlist/icon-closes.png"></image>
							</view>
						</view>
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
			<!-- 历史播放 -->
			<view v-else="curIndex===1" class="listBody">
				<Historyplay />
			</view>
			<!-- 提示弹窗 -->
			<view class="pop" v-if="showPop" @click="showPop=false">
				<view class="uni">
					<view class="text">确定要清空播放列表？</view>
					<view class="btn">
						<button @click="showPop=false">取消</button>
						<button @click="affirm" class="affirm">确认</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang='scss' scoped>
	.curplay {
		/* display: none; */
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 2;
	}

	.header {
		height: rpx(60);
		border-bottom: 1px solid #eee;
		display: flex;
		padding: 0 rpx(15);

		.nav {
			width: rpx(70);
			height: 100%;
			line-height: rpx(60);
			text-align: center;
			margin-right: rpx(10);

			&.active {
				border-bottom: rpx(2) solid orangered;
			}
		}
	}

	.list {
		height: rpx(500);
		border-radius: 18px 18px 0 0;
		background: #fff;
		margin-top: rpx(120);
		display: flex;
		flex-direction: column;

		.listBox {
			flex: 1;
			overflow: hidden;
			display: flex;
			flex-direction: column;
		}

		.logo {
			display: flex;
			height: rpx(25);
			/* background: skyblue; */
			margin-top: rpx(10);
			font-size: rpx(12);
			align-items: center;
			justify-content: space-between;
			padding: 0 rpx(15);

			image {
				width: rpx(15);
				height: rpx(15);
				margin: 0 rpx(5);
			}

			.ljt {
				width: rpx(16);
				height: rpx(16);
			}

			.xunhua {
				display: flex;
				height: 100%;
				width: rpx(90);
				background: #eee;
				border-radius: rpx(18);
				line-height: rpx(30);
				align-items: center;
			}
		}

		.tuijian {
			height: rpx(30);
			margin-top: rpx(10);
			display: flex;
			font-size: rpx(13);
			color: #696969;
			padding: 0 rpx(16);
			align-items: center;

			image {
				width: rpx(16);
				height: rpx(16);
			}
		}

		.songlist {
			flex: 1;
			overflow: hidden;
			overflow-y: auto;

			.item {
				height: rpx(40);
				/* background:burlywood; */
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 rpx(15);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-webkit-box-ordinal: vertical;

				&.active {
					background: #eee;
					.Name{
						color: red;
					}
				}

				.text {
					display: flex;
					align-items: center;
					font-size: rpx(15);
					overflow: hidden;
					flex: 1;
				}

				image {
					width: rpx(23);
					height: rpx(23);
					margin: 0 rpx(3) 0 0;
				}

				.close {
					width: rpx(30);
					height: rpx(30);

					image {
						width: rpx(30);
						height: rpx(30);
					}
				}

				.songtitle {
					display: flex;
					padding: 0 rpx(10) 0 0;
					align-items: cenyer;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					-webkit-box-ordinal: vertical;
				}

				.Name {
					margin-right: rpx(5);
				}

				.singerName {
					color: #696969;
					font-size: rpx(12);
					line-height: rpx(20);
					margin-left: rpx(5);
				}

			}
		}

		.right {
			display: flex;
		}
	}

	/* 历史 */
	.listBody {
		display: flex;
		flex-direction: column;
	}

	.footer {
		height: rpx(30);
		background: #FFE4E1;
		display: flex;
		padding: 0 rpx(15);
		font-size: rpx(13);
		justify-content: space-between;
		aline-item: center;

		.vip {
			display: flex;
			align-items: center;
		}

		image {
			width: rpx(50);
			height: rpx(16);
			margin: 0 rpx(5) 0 0;
		}

		.price {
			border: 1px solid red;
			height: rpx(19);
			border-radius: rpx(18);
			padding: 0 rpx(10);
			color: red;
			margin-top: rpx(5);
		}
	}
	// 提示弹窗
	.pop{
		// display: none;
		position: fixed;
		width:100%;
		height:100%;
		left:0;
		top:0;
		background: rgba(0,0,0,.5);
	}
	
	.uni{
		width:rpx(300);
		height:rpx(100);
		background: #fff;
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		border-radius: rpx(8);
	}
	.text{
		padding:rpx(15) rpx(15);
		font-size: rpx(14);
		color:#696969;
	}
	.btn{
		display: flex;
		position: absolute;
		right:0;
		bottom:rpx(6);
		button{
			width:rpx(70);
			height:rpx(25);
			line-height: rpx(25);
			font-size: rpx(13);
			outline: 0;
			border:0;
			background: #fff;
			margin:0 rpx(5);
			color:red;
		}
	}
	
</style>