<<<<<<< HEAD
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style lang="scss">
	// @import "/uni_modules/uni-scss/index.scss";
	/*每个页面公共css */
	page,
	uni-page-body {
		height: 100%;
	}
</style>
=======
<script setup>
    import {onLaunch} from '@dcloudio/uni-app'
    import {useUserStore} from './store/user'

    const userStore = useUserStore()

    onLaunch(() => {
        // 获取登录状态
        userStore.getProfile()
    })
</script>

<style lang="scss">
    // @import "/uni_modules/uni-scss/index.scss";
    /*每个页面公共css */
    page, uni-page-body {
        height: 100%;
    }


</style>
>>>>>>> foreshow
