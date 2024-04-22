<script setup>
import { ref, watch } from 'vue'
const typeList = ref(['单曲','专辑','歌手','歌单','用户','MV','歌词'])
const activeIndex = ref(0)

const change = (ind)=>{
	activeIndex.value=ind
}


</script>



<template>
	<view class="result">
		<view class="header">
			<view class="inp-wrap">
				<view class="search-icon"></view>
				<input class="inp" @input="searchSuggest" v-model="searchVal" type="text" placeholder="请输入搜索内容" />
				<!-- <view class="close-icon" @click="clear" v-if="searchVal.length > 0"></view> -->
			</view>
		</view>
		<view class="type">
			<view @click="change(index)" :class="{'typeItem':1,'active':index===activeIndex}" v-for="(item,index) in typeList" :key="index">
				{{item}}
			</view>
		</view>
		<scroll-view scroll-y show-scrollbar="false" @scrolltolower="scrolltolower" class="searchResult"
			v-if="resultShow">
			<view class="resultItem" v-for="(item, index) in searchList" :key="index">
				<view class="resultContent">
					<view class="resultName">
						{{ item.name }}
					</view>
					<view class="resultArtist">
						<view class="subTitIcon">
							超清母带
						</view>
						{{item.artists[0].name}}
						<view class="alias" v-if="item.alias.length>0">&nbsp; - &nbsp;{{item.alias[0]}}</view>
					</view>
				</view>
				<view class="resultTools">
					<view class="playIcon" @click="goPlay(item.id)"></view>
					<view class="detailIcon" @click="showDetail(item)"></view>
				</view>
		
			</view>
		</scroll-view>
	</view>
</template>



<style lang="scss" scoped>

.result{
	width: 100%;
	height: 100%;
	background: rgb(254,254,254);
	display: flex;
	flex-direction: column;
	.header {
		margin-top: rpx(10);
		height: rpx(40);
		padding: 0 rpx(10);
		display: flex;
		.inp-wrap {
			display: flex;
			background: rgb(245,245,245);
			border-radius: rpx(40);
			width:100%;
			padding: 0 rpx(5);
			.search-icon {
				width: rpx(40);
				height: rpx(40);
				background: url(../../icon/search.svg) no-repeat center;
				background-size: rpx(15);
			}
			.inp {
				width: 100%;
				height: 100%;
				// background: rgb(245,245,245);
			}
			.close-icon {
				width: rpx(40);
				height: rpx(40);
				background: url(../../icon/close.svg) no-repeat center;
				background-size: rpx(20);
			}
		}
		.search {
			flex: 1;
			line-height: rpx(40);
			text-align: center;
			color: rgb(40, 50, 72);
		}
	}
	.type{
	 height:rpx(40);
	 display: flex;
	 .typeItem{
		 flex: 1;
		 text-align: center;
		 height: rpx(40);
		 line-height: rpx(40);
		 &.active{
			 border-bottom: 2px solid red;
		 }
	 }
	}

}

	.searchResult {
		position: absolute;
		height: rpx(570);
		overflow-y: auto;
		overflow-x: hidden;
		padding-right: rpx(50);
		left: 0;
		top: rpx(45);
		background-color: white;
		width: 100%;

		&:last-child {
			border-bottom: none;
		}

		.resultItem {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			// border-bottom: 1px dashed #ccc;
			padding: rpx(10) rpx(10);

			.resultContent {
				// flex: 1;
				flex-shrink: 0;
				display: flex;
				flex-direction: column;
				width: rpx(270);
				.resultName {
					padding: rpx(5) 0;
					color: rgb(51, 51, 52);
					font-weight: 500;
				}
				.resultArtist {
					display: flex;
					flex-shrink: 0;
					align-items: center;
					font-size: rpx(12);
					color: rgb(85, 129, 177);
					white-space: nowrap;
					.subTitIcon{
						border: 1px solid rgb(234,210,165);
						padding: rpx(1) rpx(2);
						margin-right: rpx(3);
						color:rgb(213,165,70) ;
						border-radius: rpx(3);
						font-size: rpx(9);
					}
					.alias {
						color: rgb(153, 153, 153);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}

			.resultTools {
				width: rpx(100);
				display: flex;
				flex-shrink: 1;
				.playIcon {
					width: rpx(50);
					height: rpx(50);
					background: url(../../icon/play.svg) no-repeat center;
					background-size: rpx(25);

				}

				.detailIcon {
					width: rpx(30);
					height: rpx(50);
					background: url(../../icon/detail.svg) no-repeat center;
					background-size: rpx(20);
				}
			}

		}
	}



</style>
