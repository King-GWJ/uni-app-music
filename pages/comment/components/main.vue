<script setup>
	import {
		ref
	} from 'vue'
	import {
		goodApi,
		floorCommentApi
	} from '../../../base/api';


	const props = defineProps(['total', 'typeIndex', 'comments', 'id'])
	const emits = defineEmits(['changeType', 'getCommend'])
	const popup = ref(null)
	const replayComments = ref([])
	const totalCount = ref(0)

	const typeList = ref(['推荐', '最热', '最新'])

	const changeType = (ind) => {
		emits('changeType', ind)
		console.log(props.comments)
	}

	const good = async (cid, t) => {
		if (t) {
			const res = await goodApi(props.id, cid, 0, 0)
			emits('getCommend')
		} else {
			const res = await goodApi(props.id, cid, 1, 0)
			emits('getCommend')
		}
	}

	const openReplay = async (cid) => {
		const res = await floorCommentApi(cid, props.id, 0)
		replayComments.value = res.data.comments
		totalCount.value = res.data.totalCount
		console.log(res)
		popup.value.open()
	}
</script>


<template>
	<view class="main">
		<view class="top">
			<view class="title">
				评论({{props.total}})
			</view>
			<view class="type">
				<view v-for="(item,index) in typeList" :key="index" @click="changeType(index)">
					<view :class="[{'typeItem':true,'bod':index<2,'active':props.typeIndex===index}]">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="contentItem" v-for="(item,index) in props.comments" :key="index">
				<image :src="item.user.avatarUrl" mode="widthFix"></image>
				<view class="itemMain">
					<view class="itemHeader">
						<view class="info">
							<view class="name">
								{{item.user.nickname}}
							</view>
							<view class="address">
								<!-- <uni-dateformat :date="item.time"></uni-dateformat>-->
								{{item.timeStr}}
								{{item.ipLocation.location}}
							</view>
						</view>
						<view class="good">
							{{item.likedCount}}
							<view :class="[{'goodIcon':!item.liked,'redGoodIcon':item.liked}]"
								@click="good(item.commentId,item.liked)">

							</view>
						</view>
					</view>
					<view class="itemContent">
						{{item.content}}
					</view>
					<view class="itemReceive" v-if="item.replyCount>0" @click="openReplay(item.commentId)">
						{{item.replyCount}}条回复>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0" background-color="#fff">
			<view class="replay">
				<view class="replayTitle">
					回复({{totalCount }})
				</view>
				<view class="replayItem" v-for="(item,index) in replayComments" :key="index">
					{{item.content}}
				</view>
				<view class="footerBottom">
					<input class="inp" type="text" v-model="commentVal" placeholder="听说爱评论的人粉丝多" />
					<view class="send" @click="sendCommend">
						发送
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>



<style lang="scss" scoped>
	.main {
		background: white;
		width: 100%;
		flex: 1;
		margin-top: rpx(10);
		display: flex;
		flex-direction: column;
		overflow: auto;

		.top {
			height: rpx(18);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: rpx(5) 0 rpx(5) rpx(10);

			.title {
				font-weight: 900;
			}

			.type {
				display: flex;
				justify-content: space-around;
				width: rpx(150);

				.typeItem {
					padding-right: rpx(10);
					font-size: rpx(13);
					color: rgb(153, 153, 153);

					&.bod {
						border-right: 1px solid rgb(153, 153, 153);
					}

					&.active {
						font-weight: 900;
						color: rgb(0, 0, 0);
					}
				}

			}
		}

		.content {
			flex: 1;
			overflow: auto;

		}
	}

	.contentItem {
		display: flex;

		width: 100%;
		margin-top: rpx(20);

		image {
			width: rpx(40);
			height: rpx(40);
			border-radius: rpx(50);
			margin-left: rpx(10);
			margin-right: rpx(10);
		}

		.itemMain {
			display: flex;
			flex: 1;
			flex-direction: column;
			padding-bottom: rpx(20);
			border-bottom: 1px solid rgb(231, 231, 231);

			.itemHeader {
				display: flex;
				justify-content: space-between;

				.name {
					color: rgb(102, 102, 102);
					margin-bottom: rpx(2);
				}

				.address {
					font-size: rpx(11);
					color: rgb(102, 102, 102);
				}

				.good {
					color: rgb(153, 153, 153);
					margin-right: rpx(20);
					display: flex;
					font-size: rpx(13);
					display: flex;
					align-items: flex-end;

					.goodIcon {
						width: rpx(20);
						height: rpx(20);
						margin-left: rpx(5);
						background: url(../../../icon/good.png) no-repeat center;
						background-size: rpx(20);
					}

					.redGoodIcon {
						width: rpx(20);
						height: rpx(20);
						margin-left: rpx(5);
						background: url(../../../icon/redGood.png) no-repeat center;
						background-size: rpx(20);
					}
				}

				margin-bottom: rpx(10);
			}

			.itemContent {
				color: rgb(14, 14, 15);
				line-height: rpx(25);
				padding-right: rpx(10);
			}

			.itemReceive {
				margin-top: rpx(10);
				font-size: rpx(14);
				color: rgb(80, 125, 175);
			}
		}
	}

	.replay {
		height: rpx(500);
		display: flex;
		flex-direction: column;
		overflow: auto;

		.replayTitle {
			height: rpx(50);
			text-align: center;
			line-height: rpx(50);
			font-weight: 900;
		}

		.replayItem {
			margin: rpx(20);
		}
	}

	.footerBottom {
		display: flex;
		justify-content: space-between;
		padding: 0 rpx(20);
		align-items: center;
		height: 100%;

		.inp {
			background: rgb(242, 243, 244);
			height: rpx(30);
			width: rpx(300);
			border-radius: rpx(50);
			text-indent: 1em;
		}
	}
</style>