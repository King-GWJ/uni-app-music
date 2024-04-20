<script setup>
import { ref, watch } from 'vue'
import { searchSuggestApi,searchApi } from '../../base/api';
import HeaderVue from './components/Header.vue';

const searchVal = ref('')
const suggestList = ref([])
const suggestShow = ref(false)
const resultShow = ref(false)
const searchList = ref([])
const historyList = ref([])

historyList.value = JSON.parse(localStorage.getItem('history'))||[]

//清空
const clear = () =>{
	searchVal.value=''
}

let timer = null
//开始搜索建议
const searchSuggest =  () =>{
	if(timer) clearTimeout(timer)
	timer = setTimeout(async ()=>{
	 const res = await searchSuggestApi(searchVal.value)
	 console.log(res)
	 suggestList.value=res.result.songs
	},10)
}

//开始搜索
const search = async (val = searchVal.value) =>{
	searchVal.value=val
	
	suggestShow.value = false
	const res = await searchApi(val)
	console.log(res)
	console.log(res.result.songs)
	searchList.value = res.result.songs
	setTimeout(()=>{
		resultShow.value=true
	},20)
	
	const index = historyList.value.findIndex(v=>v===val)
	if(index===-1){
		historyList.value.push(val)
		localStorage.setItem('history',JSON.stringify(historyList.value))
	}
	
}

//删除历史
const clearHistory = ()=>{
	historyList.value=[]
	localStorage.removeItem('history')
}

watch(searchVal,(v)=>{
	if(v.length>0){
		suggestShow.value = true
	}else{
		suggestShow.value = false
	}
	resultShow.value=false
})

document.addEventListener('keypress',(e)=>{
	if(e.keyCode===13){
		search()
	} 
})


</script>

<template>
	<view class="box">
		<view class="header">
			<view class="inp-wrap">
				<view class="search-icon"></view>
				<input class="inp" @input="searchSuggest" v-model="searchVal" type="text" placeholder="请输入搜索内容"/>
				<view class="close-icon" @click="clear" v-if="searchVal.length>0"></view>
			</view>
			<view class="search" @click="search(searchVal)">
				搜索
			</view>
			<view class="searchSuggest" v-if="suggestShow">
				<view @click="search(item.name)" class="suggestItem" v-for="(item,index) in suggestList" :key="index">
					<view class="suggestIcon"></view> {{item.name}}
				</view>
			</view>
			<view class="searchResult" v-if="resultShow">
				<view class="resultItem" v-for="(item,index) in searchList" :key="index">
					{{item.name}}
					<view class="playIcon"></view>
				</view>
			</view>
		</view>
		<view class="type">
			
		</view>
		<view class="historyTitle" v-if="historyList.length>0">
			<view class="">
				搜索历史
			</view>
			<view class="clearHistory" @click="clearHistory">
				清空
			</view>
		</view>
		<view class="history">
			<view class="historyItem" @click="search(item)" v-for="(item,index) in historyList" :key="index">
				{{item}}
			</view>
		</view>
		<view class="likeTitle">
			<view class="">
				猜你喜欢
			</view>
			<view class="clearHistory" @click="clearHistory">
				刷新
			</view>
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
			
		</view>
	</view>
		
		
</template>



<style lang="scss" scoped>

.box{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: rgb(244,246,249);
	.header{
		position: relative;
		margin-top: rpx(10);
		height: rpx(40);
		display: flex;
		.inp-wrap{
			display: flex;
			background-color: white;
			border-radius: rpx(40);
			width: rpx(320);
			padding: 0 rpx(5);
			.search-icon{
				width:rpx(40);
				height: rpx(40);
				background: url(../../icon/search.svg) no-repeat center;
				background-size: rpx(15);
			}
			.inp{
				width: 100%;
				height: 100%;
			}
			.close-icon{
				width: rpx(40);
				height: rpx(40);
				background: url(../../icon/close.svg) no-repeat center;
				background-size: rpx(20);
			}
		}
		.search{
			flex: 1;
			line-height: rpx(40);
			text-align: center;
			color: rgb(40,50,72);
		}
	}
}

.searchSuggest{
	position: absolute;
	left: 0;
	top: rpx(45);
	background-color: white;
	width: 100%;
	.suggestItem{
		display: flex;
		width: 100%;
		height: rpx(30);
		line-height: rpx(30);
		border-bottom: 1px dashed #ccc;
		.suggestIcon{
			width: rpx(30);
			height: rpx(30);
			background: url(../../icon/search.svg) no-repeat center;
			background-size: rpx(15);
		}
	}
}

.searchResult{
	position: absolute;
	height: rpx(745);
	overflow-y: auto;
	overflow-x: hidden;
	padding-right:rpx(50);
	left: 0;
	top: rpx(45);
	background-color: white;
	width: 100%;
	.resultItem{
		display: flex;
		justify-content: space-between;
		padding: 0 rpx(20);
		width: 100%;
		height: rpx(50);
		line-height: rpx(50);
		border-bottom: 1px dashed #ccc;
		padding: 0 rpx(10);
		.playIcon{
			width: rpx(50);
			height: rpx(50);
			background: url(../../icon/play.svg) no-repeat center;
			background-size: rpx(30);
		}
	}
}

.history{
	margin-top: rpx(5);
	display: flex;
	flex-wrap: wrap;
	.historyItem{
		display: flex;
		padding: rpx(10) rpx(20);
		background: #ccc;
		border-radius: rpx(20);
		margin-top: rpx(10);
		margin-right: rpx(10);
	}
}

.historyTitle{
	display: flex;
	justify-content: space-between;
	margin-top: rpx(10);
	padding: 0 rpx(10);
}

.like{
	margin-top: rpx(5);
	display: flex;
	flex-wrap: wrap;
	.likeItem{
		display: flex;
		padding: rpx(10) rpx(20);
		background: #ccc;
		border-radius: rpx(20);
		margin-top: rpx(10);
		margin-right: rpx(10);
	}
}

.likeTitle{
	display: flex;
	justify-content: space-between;
	margin-top: rpx(10);
	padding: 0 rpx(10);
}

</style>
