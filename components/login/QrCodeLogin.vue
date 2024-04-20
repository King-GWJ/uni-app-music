<script setup>
    import {qrCreateApi, qrKeyApi} from "../../base/api";
    import {ref, watch} from "vue";
    const img = ref("")

    qrKeyApi().then(res => {
        if (res.code === 200) {
            qrCreateApi(res.data.unikey).then(res => {
                img.value = res.data.qrimg
            })
        }
    })

</script>

<template>
    <view className='QrCodeLogin'>
        <image style="width: 200px; height: 200px; background-color: #eeeeee;" :src="img"></image>
    </view>
</template>

<style scoped lang="scss">

</style>