<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		songDetailApi,
		commentApi,
		newCommentApi
	} from '../../base/api';
	import {
		ref
	} from 'vue'
	import mainVue from './components/main.vue';

	//定义数据
	const src = ref('')
	const name = ref('')
	const artis = ref('')
	const id = ref(0)
	const total = ref(0)
	const typeIndex = ref(0)
	const comments = ref([])

	onLoad((v) => {
		id.value = v.id
		getCommend()
		getSongDetail()
	})


	//新获取评论
	const getCommend = async () => {
		const res = await newCommentApi(id.value, 0, typeIndex.value + 1)
		console.log(res)
		total.value = res.data.totalCount
		comments.value = res.data.comments
	}

	//获取歌曲信息
	const getSongDetail = async () => {
		const res = await songDetailApi(id.value)
		src.value = res.songs[0].al.picUrl
		name.value = res.songs[0].al.name
		artis.value = res.songs[0].alia[0]
	}

	//改变评论类型
	const changeType = (n) => {
		console.log(n)
		typeIndex.value = n
		getCommend()
	}







	const back = () => {
		uni.navigateBack()
	}
</script>



<template>
	<view class="commentWrap">
		<view class="header">
			<view class="back" @click="back"></view>
			<view class="headerTitle">
				评论
			</view>
			<view class="detail"></view>
		</view>
		<view class="content">
			<view class="infoBar">
				<image class="img" :src="src" mode="widthFix"></image>
				<view class="name">
					{{name}}
				</view>
				<view class="artist">
					-{{artis}}·
				</view>
				<view class="like">
					关注
				</view>
			</view>
			<mainVue :comments="comments" :total="total" :typeIndex="typeIndex" @changeType="changeType"></mainVue>
		</view>
		<view class="footer">
			<view class="footerHeader">
			</view>
			<view class="footerBottom">
				<input class="inp" type="text" placeholder="听说爱评论的人粉丝多" />
				<view class="send">
					发送
				</view>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>
	.commentWrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgb(248, 248, 248);

		.header {
			height: rpx(40);
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: white;

			.back {
				width: rpx(40);
				height: rpx(40);
				background: url(../../icon/back.png) no-repeat center;
				background-size: rpx(21);
			}

			.headerTitle {
				font-weight: 900;
				color: rgb(40, 50, 72);
			}

			.detail {
				width: rpx(40);
				height: rpx(40);
				background: url(../../icon/detail.png) no-repeat center;
				background-size: rpx(21);
			}
		}

		.content {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.infoBar {
				background: white;
				display: flex;
				height: rpx(50);
				align-items: center;
				padding: rpx(10) 0;

				.img {
					width: rpx(50);
					height: rpx(50);
					border-radius: rpx(50);
					margin: 0 rpx(10);
				}

				.name {
					color: rgb(51, 51, 52);
					width: rpx(100);
					white-space: nowrap;
					overflow: hidden;
					font-weight: 900;
				}

				.artist {
					color: rgb(102, 102, 103);
					width: rpx(100);
					font-size: rpx(14);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.like {
					color: red;
					font-size: rpx(14);
				}
			}
		}

		.footer {
			height: rpx(70);
			background: white;
			border-top: 1px solid rgb(233, 233, 233);
			display: flex;
			flex-direction: column;

			.footerBottom {
				display: flex;
				justify-content: space-between;

				.inp {
					background: rgb(242, 243, 244);
				}
			}
		}
	}
</style>