<script setup>
import { ref, watch } from 'vue'
import { searchSuggestApi, searchApi, hotApi } from '../../base/api'


const searchVal = ref('')
const suggestList = ref([])
const suggestShow = ref(false)
const resultShow = ref(false)
const searchList = ref([])
const historyList = ref([])
const hotList = ref([])
const offset = ref(0)

//获取本地数据
historyList.value = JSON.parse(localStorage.getItem('history')) || []

//清空
const clear = () => {
	searchVal.value = ''
	offset.value=0
	searchList.value=[]
}
//热搜列表
hotApi().then(res => {
	console.log(res.result.hots)
	hotList.value = res.result.hots
})

let timer = null
//开始搜索建议
const searchSuggest = () => {
	if (timer) clearTimeout(timer)
	timer = setTimeout(async () => {
		const res = await searchSuggestApi(searchVal.value)
		console.log(res)
		suggestList.value = res.result.songs
	}, 10)
}

//开始搜索
const search = async (val = searchVal.value,off=offset.value) => {
	searchVal.value = val
	suggestShow.value = false
	const res = await searchApi(val,off)
	console.log(res.result.songs)
	// searchList.value = res.result.songs
	// searchList.value.push(res.result.songs)
	res.result.songs.forEach(v=>{
		searchList.value.push(v)
	})
	console.log(searchList.value)
	setTimeout(() => {
		resultShow.value = true
	}, 20)
	const index = historyList.value.findIndex(v => v === val)
	if (index === -1) {
		historyList.value.push(val)
		localStorage.setItem('history', JSON.stringify(historyList.value))
	}
}

//删除历史
const clearHistory = () => {
	historyList.value = []
	localStorage.removeItem('history')
}

watch(searchVal, (v) => {
	if (v.length > 0) {
		suggestShow.value = true
	} else {
		suggestShow.value = false
	}
	resultShow.value = false
})

document.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		search()
	}
})

const goPlay = (id) =>{
	uni.navigateTo({
		url:`/pages/musicPlay/musicPlay?id=${id}`
	})
} 

const  scrolltolower = () =>{
	console.log('滚动到底部')
	offset.value+=30
	console.log(offset.value)
	search()
}

</script>

<template>
	<view class="box">
		<view class="header">
			<view class="inp-wrap">
				<view class="search-icon"></view>
				<input class="inp" @input="searchSuggest" v-model="searchVal" type="text" placeholder="请输入搜索内容" />
				<view class="close-icon" @click="clear" v-if="searchVal.length > 0"></view>
			</view>
			<view class="search" @click="search(searchVal)">
				搜索
			</view>
			<view class="searchSuggest" v-if="suggestShow">
				<view @click="search(item.name)" class="suggestItem" v-for="(item, index) in suggestList" :key="index">
					<view class="suggestIcon"></view> 
					<view class="suggestContent">
						{{ item.name }}
					</view> 
				</view>
			</view>
			<scroll-view scroll-y show-scrollbar="false" @scrolltolower="scrolltolower" class="searchResult" v-if="resultShow" >
				<view class="resultItem" v-for="(item, index) in searchList" :key="index">
					<view class="resultContent">
						<view class="resultName">
							{{ item.name }}
						</view>
						<view class="resultArtist">
							{{item.artists[0].name}} <view class="alias" v-if="item.alias.length>0">&nbsp; - &nbsp;{{item.alias[0]}}</view> 
						</view>
					</view>
					<view class="resultTools">
						<view class="playIcon" @click="goPlay(item.id)"></view>
						<view class="detailIcon"></view>
					</view>
					
				</view>
			</scroll-view>
		</view>
		<view class="contentWrap">
			<view class="historyTitle" v-if="historyList.length > 0">
				<view class="">
					搜索历史
				</view>
				<view class="clearHistory" @click="clearHistory">

				</view>
			</view>
			<view class="history">
				<view class="historyItem" @click="search(item)" v-for="(item, index) in historyList" :key="index">
					{{ item }}
				</view>
			</view>
			<view class="likeTitle">
				<view class="">
					猜你喜欢
				</view>
				<view class="fresh"></view>
			</view>
			<view class="like">
				<view class="likeItem" @click="search('起风了')">
					起风了
				</view>
				<view class="likeItem" @click="search('纪念')">
					纪念
				</view>
			</view>
			<view class="top">
				<view class="hotTitle">
					热搜列表
				</view>
				<view class="hotItemWrap">
					<view :class="{ 'hotItem': 1, 'itemActive': index < 3 }" @click="search(item.first)"
						v-for="(item, index) in hotList" :key="index">
						<view :class="{ 'order': 1, 'active': index < 3 }">
							{{ index + 1 }}
						</view> {{ item.first }}
					</view>
				</view>

			</view>

		</view>
	</view>
</template>



<style lang="scss" scoped>
.box {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: rgb(244, 246, 249);

	.header {
		position: relative;
		margin-top: rpx(10);
		height: rpx(40);
		display: flex;

		.inp-wrap {
			display: flex;
			background-color: white;
			border-radius: rpx(40);
			width: rpx(320);
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
}

.searchSuggest {
	position: absolute;
	left: 0;
	top: rpx(45);
	height: rpx(565);
	background-color:rgb(244,246,249);
	width: 100%;
	color: rgb(40, 50, 72);
	
	.suggestItem {
		display: flex;
		width: 100%;
		align-items: center;
		.suggestIcon {
			width: rpx(30);
			height: rpx(30);
			background: url(../../icon/search.svg) no-repeat center;
			background-size: rpx(15);
		}
		.suggestContent{
			flex: 1;
			height: rpx(50);
			line-height: rpx(50);
			border-bottom: 1px solid rgb(224,225,228);
		}
	}
}

.contentWrap {
	flex: 1;
	overflow: auto;
}

.searchResult {
	position: absolute;
	height: rpx(565);
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
		.resultContent{
			flex: 1;
			display: flex;
			flex-direction: column;
			.resultName{
				padding: rpx(5) 0;
				color: rgb(51,51,52);
				font-weight: 800;
			}
			.resultArtist{
				display: flex;
				font-size: rpx(12);
				color: rgb(85,129,177);
				.alias{
					color: rgb(153,153,153);
				}
			}
		}
		.resultTools{
			width: rpx(100);
			display: flex;
			.playIcon {
				width: rpx(50);
				height: rpx(50);
				background: url(../../icon/play.svg) no-repeat center;
				background-size: rpx(25);
				
			}
			.detailIcon{
				width: rpx(30);
				height: rpx(50);
				background: url(../../icon/detail.svg) no-repeat center;
				background-size: rpx(20);
			}
		}
		
	}
}

.history {
	margin-top: rpx(5);
	display: flex;
	flex-wrap: wrap;
	.historyItem {
		display: flex;
		padding: rpx(5) rpx(20);
		background: white;
		border-radius: rpx(20);
		margin-top: rpx(10);
		margin-right: rpx(10);
		color: rgb(100, 107, 123);
	}
}

.historyTitle {
	display: flex;
	justify-content: space-between;
	margin-top: rpx(10);
	padding: 0 rpx(10);
	color: rgb(40, 50, 72);
	font-weight: 900;
}

.like {
	margin-top: rpx(5);
	display: flex;
	flex-wrap: wrap;

	.likeItem {
		display: flex;
		padding: rpx(5) rpx(20);
		background: white;
		border-radius: rpx(20);
		margin-top: rpx(10);
		margin-right: rpx(10);
		color: rgb(100, 107, 123);

	}
}

.likeTitle {
	display: flex;
	justify-content: space-between;
	margin-top: rpx(10);
	padding: 0 rpx(10);
	color: rgb(40, 50, 72);
	font-weight: 900;
}

.top {
	width: rpx(300);
	padding: rpx(20) rpx(20);
	margin-top: rpx(20);
	margin-left: rpx(15);
	background-color: white;
	border-radius: rpx(20);

}

.hotTitle {
	font-size: rpx(20);
	font-weight: bold;
	border-bottom: 1px solid #ccc;
	padding-bottom: rpx(10);
	color: rgb(41, 51, 73);
}

.hotItem {
	display: flex;
	height: rpx(35);
	line-height: rpx(35);
	font-size: rpx(17);
	margin-top: rpx(3);
	color: rgb(40, 50, 72);
	&.itemActive {
		font-weight: 500;
	}
	.order {
		padding: 0 rpx(15);
		color: rgb(126, 132, 145);

		&.active {
			color: rgb(255, 58, 58);
			font-weight: 900;
		}
	}

}

.hotItemWrap {
	// height: rpx(300);
	overflow: auto;

	&::-webkit-scrollbar {
		width: 0px
	}

	;
}

.clearHistory {
	width: rpx(20);
	height: rpx(20);
	background: url(../../icon/clear.svg) no-repeat center;
	background-size: contain;
}

.fresh {
	width: rpx(20);
	height: rpx(20);
	background: url(../../icon/fresh.svg) no-repeat center;
	background-size: contain;
}
</style>
