<script setup>
    import {onLaunch} from '@dcloudio/uni-app'
    import {useUserStore} from './store/user'
    import {ref} from "vue";

    const userStore = useUserStore()

    onLaunch(() => {
        // 获取登录状态
        userStore.getProfile()
    })
</script>

<style lang="scss">
    // @import "/uni_modules/uni-scss/index.scss";
    /*每个页面公共css */
    page, uni-page-body, uni-page {
        width: 100%;
        height: 100%;
    }

</style>
