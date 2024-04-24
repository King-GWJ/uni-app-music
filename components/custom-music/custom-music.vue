<script setup>
    const innerAudioContext = uni.createInnerAudioContext();
    innerAudioContext.src = 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3';
    // innerAudioContext.autoplay = true;
    innerAudioContext.onPlay(() => {
        console.log('开始播放');
    });
    innerAudioContext.onPause(()=>{
        console.log('暂停播放');
    })
    const getPlay = () => {
        innerAudioContext.play()
    }
    const getPause = () => {
        innerAudioContext.pause()
    }

</script>

<template>
    <view>
        <button @click="getPlay">
            <text class="word-btn-white">播放</text>
        </button>
        <button @click="getPause">
            <text class="word-btn-white">暂停</text>
        </button>
    </view>
</template>

<style scoped lang="scss">

</style>