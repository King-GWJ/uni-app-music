<template>
	<view>
		<view class="header">
			<view v-for="(item,index) in list" :key="index" @click="curIndex=index">
				<view>
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="main">
					  <audioBook v-if="list[curIndex].component === 'audioBook'" />
					  <listening v-else-if="list[curIndex].component === 'listening'" />
					  <radioPlay v-else-if="list[curIndex].component === 'radioPlay'" />
					  <recommend v-else />
		</view>

	</view>
</template>

<script>
	import recommend from '@/pages/blogs/components/recommend/recommend.vue'
	import audioBook from '@/pages/blogs/components/audioBook/audioBook.vue'
	import listening from '@/pages/blogs/components/listening/listening.vue'
	import radioPlay from '@/pages/blogs/components/radioPlay/radioPlay.vue'


	export default {
		components: {
			audioBook,
			recommend,
			listening,
			radioPlay
		},
		data() {
			return {
				list: [{
						component: 'audioBook',
						name: '有声书',
						isShow: true
					},
					{
						component: 'listening',
						name: "听书",
						isShow: false
					},
					{
						component: 'radioPlay',
						name: '广播剧',
						isShow: false
					},
					{
						component: 'recommend',
						name: '推荐',
						isShow: false
					}
				],
				curIndex: 3
			}
		},
		methods: {
			changeIndex(e){
				this.curIndex = e.target.num
			}

		}
	}
</script>

<style scoped>
	.header {
		display:flex;
		justify-content:space-around;
		height:30px;
		line-height:30px;
		
	}

</style>