<template>
	<view>
		<video id="myVideo" 
			:src=useStore.musicLookMv 
			@error="videoErrorCallback" 
			:danmu-list="danmuList"
			enable-danmu danmu-btn controls
	></video>
	</view>
</template>

<script setup>
	import {useMusicstore} from '../../store/music.js'
	const useStore = useMusicstore()
</script>

<style lang="scss" scoped>
#myVideo{
	width: 100%;
}
</style>
