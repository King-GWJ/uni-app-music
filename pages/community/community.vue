<template>
	<view class="community">
		<view class="li" v-for="(item,index) in Follows">
			<view class="avatar">
				<span class="img">
					<image :src="item.avatarUrl" mode=""></image>
				</span>
				<view class="name">
					<text>{{item.nickname}}</text>
					<image :src="(item.vipRights.associator.iconUrl || item.avatarDetail.identityIconUrl)" mode=""></image>
				</view>
			</view>
			<view class="">
				{{item.signature}}
			</view>
		</view>
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
	const Follows = ref([])
	onShow(() => {
		userStore.getAccount()
	})
	watch(() => userStore.profile, () => {
		const profile = userStore.profile
		userFollowApi({
			uid: profile.userId
		}).then(res => {
			console.log(res);
			Follows.value = res.follow
		})
	})
</script>

<style lang="scss">
	.community {
		padding: 0 20px;

		.li {
			display: flex;
			flex-direction: column;

			.avatar {
					display:flex;
					align-items:center;

				.img {
					margin: 10px;
					width: 40px;
					height: 40px;
					flex-shrink: 0;
					display: inline-block;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.name {
					display: flex;
					flex-direction: column;

					image {
						width: 60px;
						height: 20px;
					}
				}
			}
		}
	}
</style>