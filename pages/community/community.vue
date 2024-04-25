<template>

	<view class="community">

		<TabToggle :tabList="tabList" @tabIndexEvent="getTabIndex" />

		<view v-if="tabIndex === 0" class="view">
			<view class="nav">
				<view class="top" v-for="(item,index) in Follows">
					<span class="img">
						<image :src="item.avatarUrl" mode=""></image>
					</span>
					<view class="text">{{item.nickname}}</view>
				</view>
			</view>
			<view class="watch">
				我的关注
			</view>
			<view class="li" v-for="(item,index) in Follows">
				<view class="avatar">
					<span class="img">
						<image :src="item.avatarUrl" mode=""></image>
					</span>
					<view class="name">
						<text>{{item.nickname}}</text>
						<image
							:src="(item.vipRights.associator ? item.vipRights.associator.iconUrl:item.avatarDetail.identityIconUrl)"
							mode="">
						</image>
					</view>
				</view>
				<view class="content">
					{{item.signature}}
				</view>
				<view class="component">
					<forward></forward>
				</view>
			</view>
		</view>
		<view v-if="tabIndex === 1" class="view">
			播客s
		</view>
		<view class="music">
			<musicBar class="bar"></musicBar>
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
	import TabToggle from "../../components/tab/TabToggle.vue";


	const userStore = useUserStore()
	const profile = ref(userStore.profile)
	const Follows = ref([])
	const tabIndex = ref(0)
	const tabList = ref([{
			isSelect: true,
			name: "关注",
		},
		{
			isSelect: false,
			name: "广场",
		},
	])
	const getTabIndex = (index) => {
		tabIndex.value = index
	}
	onShow(() => {
		if (!profile.value) {
			profile.value = userStore.setProfileData()
		} else {
			userFollowApi({
				uid: profile.value.userId
			}).then(res => {
				console.log("aaa:", res);
				Follows.value = res.follow
			})
		}
	})

	watch(profile, () => {
		userFollowApi({
			uid: profile.value.userId
		}).then(res => {
			console.log("aaa:", res);
			Follows.value = res.follow
		})
	})
</script>

<style lang="scss">
	.community {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 50px;

		.view {
			min-height: 800rpx;
			overflow: auto;

			.watch {
				width: 100%;
				margin-left: 40rpx;
				margin-top: 10rpx;
			}
		}

		.nav {
			padding: 0 20rpx;
			width: 100vw;
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			height: 220rpx;
			border-bottom: 1px solid #eee;

			.top {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-right: 20px;

				.text {
					display: block;
					width: 70px;
					text-align: left;
					white-space: nowrap;
					-webkit-box-orient: vertical;
					/* 控制只有第二行才会溢出隐藏 */
					-webkit-line-clamp: 1;
					/* 确保文本溢出时显示省略号 */
					overflow: hidden;
					text-overflow: ellipsis;

				}

				.img {
					margin: 10px;
					width: 50px;
					height: 50px;
					flex-shrink: 0;
					display: inline-block;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
			}
		}

		.li {
			padding: 0 20rpx;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid #eee;

			.avatar {
				display: flex;
				align-items: center;

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
			}

			.name {
				display: flex;
				flex-direction: column;

				image {
					width: 60px;
					height: 20px;
				}
			}

			.content {
				margin-left: 120rpx;
			}

			.component {
				margin: 40rpx;
				margin-left: 100rpx;
			}
		}

		.music {
			position: sticky;
			bottom: 50px;
		}
	}
</style>