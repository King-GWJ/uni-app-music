<script setup>
    import {onLaunch} from '@dcloudio/uni-app'
    import {useUserStore} from './store/user'

    const userStore = useUserStore()

    onLaunch(() => {
        // 获取登录状态
        userStore.getProfile()
    })
	import aaa from './components/showlist/showlist.vue'
</script>

<template>
  <view>
 
    
    <aaa />
  </view>
</template>

<style lang="scss">
    // @import "/uni_modules/uni-scss/index.scss";
    /*每个页面公共css */
    page, uni-page-body,uni-page {
        width: 100%;
        height: 100%;
    }

</style>
