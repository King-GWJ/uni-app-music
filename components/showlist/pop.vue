
<script setup>
	import {useMusicstore} from '../../store/music.js'
	import { ref , defineProps,defineEmits} from "vue";
	
	const useStore=useMusicstore()
	
	const emits=defineEmits(['childClick'])
	console.log( Props.aaa)
	
	//点击确认清空列表，返回首页
	const affirm=()=>{
		console.log(8);
		// emits('childClick',1123)
		console.log(123)
		this.Props.aaa
		useStore.musicList=[]
		
	}
	
	const aaa =() => {
		console.log(12);
	}
	
</script>




<template>
	<view class="pop">
		<view class="uni">
			<view class="text">确定要清空播放列表？</view>
			<view class="btn">
				<button @click="aaa">取消</button>
				<button  @click="affirm" class="affirm">确认</button>
			</view>
			
		</view>
	</view>
</template>



<style lang="scss" scoped>
	// .pop{
	// 	position: fixed;
	// 	width:100%;
	// 	height:100%;
	// 	left:0;
	// 	top:0;
	// 	background: rgba(0,0,0,.5);
	// }
	
	// .uni{
	// 	width:rpx(300);
	// 	height:rpx(100);
	// 	background: #fff;
	// 	position: absolute;
	// 	left:50%;
	// 	top:50%;
	// 	transform: translate(-50%,-50%);
	// 	border-radius: rpx(8);
	// }
	// .text{
	// 	padding:rpx(15) rpx(15);
	// 	font-size: rpx(14);
	// 	color:#696969;
	// }
	// .btn{
	// 	display: flex;
	// 	position: absolute;
	// 	right:0;
	// 	bottom:rpx(6);
	// 	button{
	// 		width:rpx(70);
	// 		height:rpx(25);
	// 		line-height: rpx(25);
	// 		font-size: rpx(13);
	// 		outline: 0;
	// 		border:0;
	// 		background: #fff;
	// 		margin:0 rpx(5);
	// 		color:red;
	// 	}
	// }
	
	
		
	
</style>