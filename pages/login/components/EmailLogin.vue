<script setup>
    import {useUserStore} from "../../../store/user";
    import {ref} from "vue";

    const userStore = useUserStore()
    const formData = ref({
        email: '',
        password: ''
    })
    const form = ref(null);
    const rules = {
        email: {
            rules: [
                { required: true, errorMessage: '邮箱不能为空'},
                { format: 'email', errorMessage: '邮箱格式错误'},
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
            userStore.getLogin("email",res.email,res.password)
        }).catch(err => {
            console.log('表单错误信息：', err);
        })
    }

</script>

<template>
    <view className='EmailLogin'>
        <uni-forms ref="form" :rules="rules" :modelValue="formData">
            <uni-forms-item name="email">
                <uni-easyinput prefixIcon="email" v-model="formData.email" placeholder="请输入邮箱" />
            </uni-forms-item>
            <uni-forms-item name="password">
                <uni-easyinput prefixIcon="locked" type="password" v-model="formData.password" placeholder="请输入密码" />
            </uni-forms-item>
        </uni-forms>
        <button @click="submit">登录</button>
    </view>
</template>

<style scoped lang="scss">

</style>