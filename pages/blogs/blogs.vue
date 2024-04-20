<template>
	<view>
		<view class="header">
		</view>
		<view class="main">
			<recommend></recommend>
			<!-- <audioBook></audioBook> -->
		</view>

	</view>
</template>

<script>
	import recommend from '@/pages/blogs/components/recommend/recommend.vue'
	import audioBook from '@/pages/blogs/components/audioBook/audioBook.vue'

	export default {
		components: {
			audioBook,
			recommend
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>