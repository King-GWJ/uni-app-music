<template>
	<view>
		粉丝
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from "vue"
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		useUserStore
	} from '@/store/user'
	import {
		userFollowApi
	} from '/base/api'
	
	
	const userStore = useUserStore()
	const profile = ref(userStore.profile)
	const Follows = ref([])
	onShow(() => {
		if (!profile.value) {
			profile.value = userStore.setProfileData()
		}
	})
	watch(()=>profile.value, () => {
		userFollowApi({
			uid: profile.value.userId
		}).then(res => {
			console.log("aaa:", res);
			Follows.value = res.follow
		})
	})
</script>

<style lang="scss">

</style>