<script setup>
    import {useUserStore} from "../../../store/user";
    import {ref} from "vue";

    const userStore = useUserStore()
    const form = ref(null);
    const formData = ref({
        phone: '',
        password: ''
    })
    const rules = {
        phone: {
            rules: [
                {required: true, errorMessage: '手机号不能为空'},
                {
                    minLength: 1,
                    maxLength: 11,
                    errorMessage: '手机号长度必须为{maxLength}位'
                }
            ]
        },
        password: {
            rules: [{
                required: true,
                errorMessage: '密码不能为空'
            }]
        }
    }

    const submit = () => {
        form.value.validate().then(res => {
            userStore.getLogin("phone",res.phone,res.password)
        }).catch(err => {
            console.log('表单错误信息：', err);
        })
    }
</script>

<template>
    <view className='PhoneLogin'>
        <uni-forms ref="form" :rules="rules" :modelValue="formData">
            <uni-forms-item name="phone">
                <uni-easyinput prefixIcon="phone" type="number" v-model="formData.phone" placeholder="请输入手机号" />
            </uni-forms-item>
            <uni-forms-item name="password">
                <uni-easyinput prefixIcon="locked" type="password" v-model="formData.password" placeholder="请输入密码" />
            </uni-forms-item>
        </uni-forms>
        <button @click="submit" >登录</button>
    </view>
</template>

<style scoped lang="scss">
    button{

    }
</style>