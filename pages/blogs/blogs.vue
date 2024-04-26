<template>
	<view>
			<TabToggle :tabList="tabList" @tabIndexEvent="getTabIndex"></TabToggle>
		<view class="main">
			<view v-if="tabIndex === 0" class="view">
				<audioBook />
			</view>
			<view v-if="tabIndex === 1" class="view">
				<listening />
			</view>
			<view v-if="tabIndex === 2" class="view">
				<radioPlay />
			</view>
			<view v-if="tabIndex === 3" class="view">
				<recommend />
			</view>
		</view>
		<musicBar></musicBar>
	</view>
</template>

<script setup>
	import recommend from '@/pages/blogs/components/recommend/recommend.vue'
	import audioBook from '@/pages/blogs/components/audioBook/audioBook.vue'
	import listening from '@/pages/blogs/components/listening/listening.vue'
	import radioPlay from '@/pages/blogs/components/radioPlay/radioPlay.vue'
	import TabToggle from "../../components/tab/TabToggle.vue";
	import { ref } from "vue"
	
	const tabIndex = ref(0)
	const tabList = ref([{
			name: '有声书',
			isSelect: true,
		},
		{
			name: "听书",
			isSelect: false,
		},
		{
			name: '广播剧',
			isSelect: false,
		},
		{
			name: '推荐',
			isSelect: false,
		}
	])
		const getTabIndex = (index) => {
			tabIndex.value = index
		}
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-around;
		height: 30px;
		line-height: 30px;

	}
</style>