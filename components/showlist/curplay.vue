<script setup>
	import {
		songDetailApi,
		songUrlApi,
		SongdetailApi
	} from "../../base/api/index.js"
	import {
		watch,
		computed,
		ref
	} from "vue"
	import {
		useMusicstore
	} from '../../store/music.js'
	import Historyplay from './historyPlay.vue'
	import Pop from './pop.vue'

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
	const showPop = ref(false) //展示弹窗
    







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

	const aaa = () => {
		showPop = !showPop
	}
	
	
	const dialogToggle =(type) =>{
		this.msgType = type
		this.$refs.alertDialog.open()
	}
	
	
	//const  dialogClose=()=> {
	// 	console.log('点击关闭')
	// }
	
	
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
					</view>
					<view class="right">
						<image src="../../icon/songlist/icon-xz.png"></image>
						<image src="../../icon/songlist/icon-tj.png"></image>
						<image @click="showPop =!showPop" class="ljt" src="../../icon/songlist/icon-ljt.png"></image>
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
			<!-- 取消确认弹出框 -->
			<!-- <uni-section title="对话框示例" type="line" class="hideOnPc">
					<view class="example-body box">
						<button class="button popup-success" @click="dialogToggle('success')"><text
								class="button-text success-text">取消</text></button>
						<button class="button popup-error" @click="dialogToggle('error')"><text
								class="button-text error-text">确认</text></button>
					</view>
				</uni-section> -->
			<!-- <Pop v-if="showPop"  @click="showPop=false"  @childClick="aaa"/> -->
			
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
					color: red;
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
	
	
</style>