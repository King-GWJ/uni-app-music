<script setup>
    import {qrCreateApi, qrKeyApi} from "../../base/api";
    import {ref} from "vue";
    import {useUserStore} from "../../store/user";
    const userStore = useUserStore()
    const img = ref("")

    qrKeyApi().then(res => {
        if (res.code === 200) {
            qrCreateApi(res.data.unikey).then(res1 => {
                img.value = res1.data.qrimg
                userStore.getCheckQr(res.data.unikey)
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
    .QrCodeLogin{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>