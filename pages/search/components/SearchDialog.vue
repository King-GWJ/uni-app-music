<script setup>
import { ref, watch } from 'vue';
import { useMusicstore } from '../../../store/music';
import { useUserStore } from '../../../store/user';
import { userPlayListApi,playListChange,commentApi,songDetailApi } from '../../../base/api';


	const props = defineProps(['showDialog','detailItem'])
	const emits = defineEmits(['closeDialog'])
	const musicStore = useMusicstore()
	const userStore = useUserStore()
	const profile = ref(userStore.profile)
	const playList = ref([])
	const totalComment = ref(0)
	const imgUrl = ref('')
	const popup = ref(null)
	const popup2 = ref(null)
	const popup3 = ref(null)
	const popup4 = ref(null)
	if(!profile.value){
		profile.value = userStore.setProfileData()
	}
	
	//获取歌曲详情
	const getSong = async ()=>{
		const res = await songDetailApi(props.detailItem.id)
		imgUrl.value = res.songs[0].al.picUrl
	}
	
	
	
	//获取用户歌单列表
	const getPlayList = async ()=>{
		const res = await userPlayListApi(profile.value.userId)
		playList.value = res.playlist
	}
	//获取评论
	const getComment = async ()=>{
		const res = await commentApi('music',props.detailItem.id)
		totalComment.value = res.total
	}
	
	getPlayList()
	//监听传过来的参数
	watch(()=>props,()=>{
		if(props.showDialog===true){
			getComment()
			getSong()
		}
		
	},
	{deep:true}
	)
		
	//下一首播放
	const nextPlay = ()=>{
		musicStore.musicBehind(props.detailItem,props.detailItem.id)
		popup.value.open()
		emits('closeDialog')
	}
	
	//收藏
	const toLike = ()=>{
		if(!profile.value.userId){
			popup2.value.open()
			setTimeout(()=>{
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},1000)
		}else{
			popup3.value.open()
			emits('closeDialog')
		}
	}
	
	//收藏到歌单
	const add = async (item)=>{
		const res = await playListChange('add',item.id,props.detailItem.id)
		if(res.body.code===502){
			popup4.value.open()
		}
		getPlayList()
	}
	
	//跳转评论
	const goComment = () =>{
		uni.navigateTo({
			url:`/pages/comment/comment?id=${props.detailItem.id}`
		})
	}
	
	//阻止冒泡
	const fn = (e)=>{
		e.stopPropagation()
	}
	
	

</script>



<template>
	
	<view class="dialogWrap" v-if="showDialog" @click="emits('closeDialog')">
		<view class="dialog" @click="fn">
			<view class="header">
				<image class="img" :src="imgUrl" mode=""></image>
				<view class="info">
					<view class="name">
						{{props.detailItem.name}}
					</view>
					<view class="artist">
						{{props.detailItem.artists[0].name}}
					</view>
				</view>
			</view>
			<view class="content">
				<view class="item" @click="nextPlay">
					<view class="itemIcon nextPaly">
					</view>
					<view class="itemContent">
						下一首播放
					</view>
				</view>
				<view class="item" @click="toLike">
					<view class="itemIcon like">
					</view>
					<view class="itemContent">
						收藏到歌单
					</view>
				</view>
				<view class="item">
					<view class="itemIcon download">
					</view>
					<view class="itemContent">
						下载
					</view>
				</view>
				<view class="item">
					<view class="itemIcon recommend">
					</view>
					<view class="itemContent" @click="goComment">
						评论({{totalComment}})
					</view>
				</view>
				<view class="item">
					<view class="itemIcon share">
					</view>
					<view class="itemContent">
						分享
					</view>
				</view>
				<view class="item">
					<view class="itemIcon singer">
					</view>
					<view class="itemContent">
						歌手:&nbsp;&nbsp;{{props.detailItem.artists[0].name}}
					</view>
				</view>
				<view class="item">
					<view class="itemIcon albums">
					</view>
					<view class="itemContent">
						专辑:&nbsp;&nbsp;{{props.detailItem.album.name}}
					</view>
				</view>
				<view class="item">
					<view class="itemIcon cloud">
					</view>
					<view class="itemContent">
						云推歌
					</view>
				</view>
				<view class="item">
					<view class="itemIcon buy">
					</view>
					<view class="itemContent">
						单曲购买
					</view>
				</view>
				<view class="item">
					<view class="itemIcon card">
					</view>
					<view class="itemContent">
						音乐礼品卡
					</view>
				</view>
				<view class="item">
					<view class="itemIcon music">
					</view>
					<view class="itemContent">
						更多乐谱
					</view>
				</view>
				<view class="item">
					<view class="itemIcon ding">
					</view>
					<view class="itemContent">
						设为铃声
					</view>
				</view>
				<view class="item">
					<view class="itemIcon close">
					</view>
					<view class="itemContent">
						屏蔽歌手或歌曲
					</view>
				</view>
			</view>
		</view>
	</view>
	<uni-popup class="mesWrap" ref="popup" type="message">
		<uni-popup-message class="mes" type="success" message="添加列表成功" :duration="800"></uni-popup-message>
	</uni-popup>
	<uni-popup class="mesWrap" ref="popup2" type="message">
		<uni-popup-message class="mes" type="error" message="请登录" :duration="800"></uni-popup-message>
	</uni-popup>
	<uni-popup class="mesWrap" ref="popup4" type="message">
		<uni-popup-message class="mes" type="error" message="歌曲已存在" :duration="800"></uni-popup-message>
	</uni-popup>
	<view>
		<uni-popup ref="popup3" type="bottom" border-radius="10px 10px 0 0" background-color="#fff">
			<view class="playList">
				<view class="playListHeader">
					<view class="playListTitle">
						收藏到歌单
					</view>
					<view class="selectAll">
						多选
					</view>
				</view>
				<view class="playListContent">
					<view class="playListItem">
						<view class="img new">
							+
						</view>
						<view class="itemContent">
							<view class="contentTitle">
								新建歌单
							</view>
						</view>
					</view>
					<view @click="add(item)" class="playListItem" v-for="item in playList">
						<view class="img">
							<image :src="item.coverImgUrl" mode="widthFix"></image>
						</view>
						<view class="itemContent">
							<view class="contentTitle">
								{{item.name}}
							</view>
							<view class="count">
								{{item.trackCount}}首
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>



<style lang="scss" scoped>

.playList{
	min-height: rpx(200);
	display: flex;
	flex-direction: column;
	.playListHeader{
		display: flex;
		justify-content: space-between;
		padding: rpx(10) rpx(20);
		color: rgb(62,71,90);
		.playListTitle{
			font-weight: 900;
		}
		border-bottom: 1px solid rgb(239,240,241);
	}
	.playListContent{
		display: flex;
		flex-direction: column;
		.playListItem{
			display: flex;
			margin: rpx(8) 0;
			.new{
				background: rgb(242,243,244);
				text-align: center;
				line-height: rpx(50);
				font-size: rpx(30);
			}
			.img{
				width: rpx(50);
				height: rpx(50);
				margin: 0 rpx(10);
				border-radius: rpx(10);
				image{
					width: rpx(50);
					height: rpx(50);
					border-radius: rpx(10);
				}
			}
			.itemContent{
				display: flex;
				flex-direction: column;
				justify-content: center;
				.contentTitle{
					color: rgb(62,71,90);
				}
				.count{
					font-size: rpx(13);
					color: rgb(126,132,145);
				}
			}
		}
	}
}

.dialogWrap{
	position: absolute;
	width: 100vw;
	height: rpx(669);
	background: rgba(0, 0, 0,.2);
	z-index: 12;
}
.dialog{
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 3;
	width: 100%;
	height: rpx(400);
	overflow: auto;
	bottom: 0;
	background: white;
	border-top-right-radius:rpx(20);
	border-top-left-radius:rpx(20);
	.header{
		height: rpx(50);
		display: flex;
		padding: rpx(20);
		border-bottom: 1px solid rgb(234,234,234);
		.img{
			width: rpx(60);
			height: rpx(60);
			border-radius: rpx(5);
		}
		.info{
			margin-left: rpx(10);
			.artist{
				font-size: rpx(13);
				margin-top: rpx(5);
				color: rgb(153,153,153);
			}
		}
		
	}
	.content{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: auto;
		.item{
			display: flex;
			align-items: center;
			height: rpx(50);
			flex-shrink: 0;
			font-size: rpx(18);
			color: rgb(51,51,52);
			padding: 0 rpx(10);
			
			.itemIcon{
				width: rpx(22);
				height: rpx(22);
				margin-right: rpx(10);
			}
		}
	}
}



.nextPaly{
	background: url(../../../icon/nextPlay.png) no-repeat center;
	background-size: rpx(18);
}

.like{
	background: url(../../../icon/like.png) no-repeat center;
	background-size: contain;
}

.download{
	background: url(../../../icon/download.png) no-repeat center;
	background-size: contain;
}

.recommend{
	background: url(../../../icon/recommend.png) no-repeat center;
	background-size: contain;
}

.share{
	background: url(../../../icon/share.png) no-repeat center;
	background-size: rpx(18);
}

.singer{
	background: url(../../../icon/singer.png) no-repeat center;
	background-size: contain;
}

.albums{
	background: url(../../../icon/albums.png) no-repeat center;
	background-size: contain;
}

.cloud{
	background: url(../../../icon/cloud.png) no-repeat center;
	background-size: contain;
}
.buy{
	background: url(../../../icon/buy.png) no-repeat center;
	background-size: rpx(18);
}
.card{
	background: url(../../../icon/card.png) no-repeat center;
	background-size: contain;
}
.music{
	width: rpx(100);
	height: rpx(100);
	background: url(../../../icon/music.png) no-repeat center;
	background-size: rpx(45);
}

.ding{
	background: url(../../../icon/ding.png) no-repeat center;
	background-size: contain;
}

.close{
	background: url(../../../icon/close.png) no-repeat center;
	background-size: contain;
}



</style>
