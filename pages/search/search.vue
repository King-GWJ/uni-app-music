<script setup>
import { ref } from 'vue'
import { searchApi } from '../../base/api';
import HeaderVue from '../../components/search/Header.vue';

const searchVal = ref('')


//清空
const clear = () =>{
	searchVal.value=''
}

let timer = null
//开始搜索
const search = () =>{
	if(timer) clearTimeout(timer)
	timer = setTimeout(()=>{
		
		console.log(searchApi(searchVal.value))
	},1000)
}

</script>

<template>
	<view class="box">
		<view class="header">
			<view class="inp-wrap">
				<view class="search-icon"></view>
				<input class="inp" @input="search" v-model="searchVal" type="text" placeholder="请输入搜索内容"/>
				<view class="close-icon" @click="clear" v-if="searchVal.length>0"></view>
			</view>
			<view class="search">
				搜索
			</view>
			<view class="searchSuggest">
				
			</view>
		</view>
		<view class="type">
			
		</view>
		<view class="history">
			
		</view>
		<view class="like">
			
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




</style>
