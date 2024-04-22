<script setup>
    import {useUserStore} from "../../store/user";
    import EmailLogin from "../../components/login/EmailLogin.vue";
    import {ref, watch} from "vue";
    import PhoneLogin from "../../components/login/PhoneLogin.vue";
    import QrCodeLogin from "../../components/login/QrCodeLogin.vue";

    const userStore = useUserStore()

    const radio = ref(0)

    const localData = ref([
        {
            text: '邮箱',
            value: 0
        }, {
            text: '手机号',
            value: 1
        }, {
            text: '二维码',
            value: 2
        },
        {
            text: '游客登录',
            value: 3
        }
    ])

    watch(radio,(newValue, oldValue)=>{
        if(newValue === 3){
            userStore.getLogin("anonimous")
        }
    })

</script>

<template>
    <view class="login">
        <EmailLogin v-if="radio === 0" />
        <PhoneLogin v-else-if="radio === 1" />
        <QrCodeLogin v-else-if="radio === 2" />
        <uni-data-checkbox mode="tag" icon="left" selectedColor="#c5483c" v-model="radio" :localdata="localData"></uni-data-checkbox>
    </view>
</template>

<style scoped lang="scss">
    .login {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: rpx(15);

        .uni-data-checklist {
            display: flex;
            justify-content: center;
            padding-top: rpx(15);

        }
    }

</style>
