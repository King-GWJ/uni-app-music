<script setup>
	const props = defineProps(['showDialog','detailItem'])
	const emits = defineEmits(['closeDialog'])
	
	
	const fn = (e)=>{
		e.stopPropagation()
	}
</script>



<template>
	<view class="dialogWrap" v-if="showDialog" @click="emits('closeDialog')">
		<view class="dialog" @click="fn">
			<view class="header">
				
			</view>
			<view class="content">
				主题
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>

.dialogWrap{
	position: absolute;
	width: 100vw;
	height: rpx(620);
	background: rgba(0, 0, 0,.2)
}
.dialog{
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: rpx(400);
	overflow: auto;
	bottom: 0;
	background: white;
	border-top-right-radius:rpx(20);
	border-top-left-radius:rpx(20);
	.header{
		height: rpx(80);
	}
	.content{
		flex: 1;
	}
}


</style>
