<script setup>
	import { ref } from 'vue'
	const props = defineProps(['total','typeIndex','comments'])
	const emits = defineEmits(['changeType'])
	
	console.log(props.comments)
	
	const typeList = ref(['推荐','最热','最新'])

	const changeType = (ind)=>{
		emits('changeType',ind)
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
								
							</view>
						</view>
						<view class="good">
							{{item.likedCount}}
							<view class="goodIcon">
								
							</view>
						</view>
					</view>
					<view class="itemContent">
						{{item.content}}
					</view>
					<view class="itemReceive">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>

.main{
	background: white;
	width: 100%;
	flex: 1;
	margin-top: rpx(10);
	display: flex;
	flex-direction: column;
	overflow: auto;
	.top{
		height: rpx(18);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: rpx(5) 0 rpx(5) rpx(10);
		.title{
			font-weight: 900;
		}
		.type{
			display: flex;
			justify-content: space-around;
			width: rpx(150);
			.typeItem{
				padding-right: rpx(10);
				font-size: rpx(13);
				color: rgb(153,153,153);
				&.bod{
					border-right: 1px solid ;
				}
				&.active{
					font-weight: 900;
					color: rgb(0,0,0);
				}
			}
			
		}
	}
	.content{
		flex: 1;
		overflow: auto;
	}
}

.contentItem{
	display: flex;

	width:100%;
	margin-top: rpx(20);

	image{
		width: rpx(40);
		height: rpx(40);
		border-radius: rpx(50);
		margin-left: rpx(10);
		margin-right: rpx(10);
	}
	.itemMain{
		display: flex;
		flex: 1;
		flex-direction: column;
		padding-bottom: rpx(20);
		border-bottom: 1px solid rgb(231,231,231);
		.itemHeader{
			display: flex;
			justify-content: space-between;
			.name{
				color: rgb(102,102,102);
			}
			.good{
				color: rgb(153,153,153);
				margin-right: rpx(20);
				display: flex;
				font-size: rpx(13);
				display: flex;
				align-items:flex-end;
				.goodIcon{
					width: rpx(20);
					height: rpx(20);
					margin-left: rpx(5);
					background: url(../../../icon/good.png) no-repeat center;
					background-size: rpx(20);
				}
			}
			margin-bottom: rpx(10);
		}
		.itemContent{
			color: rgb(51,51,52);
			line-height: rpx(25);
		}
	}
}



</style>
