<script setup>
	import {
		ref
	} from "vue";
	const data = [{
			title: "当前播放",
			text: [123, 321],
		},
		{
			title: "历史播放",
			text: [789, 567],
		},
	];
	const curIndex = ref(0);
</script>


<template>
	<view class="footer">
		<view class="current">
			<view class="songCover">
				<view class="img">
					<imgage />
				</view>
			</view>
			<view class="name">歌曲名称</view>
			<p>
				<image src="../../icon/songlist/icon-bf.png" />
			</p>
			<p>
				<image src="../../icon/songlist/icon-lb.png" />
			</p>
		</view>
		<view class="showlibiao">
			<view class="curlist">
				<header>
					<!-- <p
            v-for="(item, index) in data"
            :class="{ active: curIndex === index }"
            @click="curIndex = index"
          >
            {{ item.title }}
          </p> -->
				</header>
				<view class="center">
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :interval="interval"
						:duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<view class="logo">
									<view class="xunhuan">
										<p>
											<image src="../../icon/songlist/icon-light.png" />
										</p>
										无限循环
									</view>
									<view class="icon">
										<span class="img">
											<image src="../../icon/songlist/icon-xiaz.png" />
										</span>
										<span class="img">
											<image src="../../icon/songlist/icon-tjia.png" />
										</span>
										<span class="img">
											<image src="../../icon/songlist/icon-lajit.png" />
										</span>
									</view>
								</view>
								<view class="listenList">
									<view class="item">
										<p class="songName">
											<image src="../../icon/songlist/icon-lvdong.png" /><span></span>
										</p>
										<p class="ly">来源</p>
										<span><span class="img">
												<image src="../../icon/songlist/icon-outline.png" />
											</span></span>
									</view>
								</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<view>
									<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
										:interval="interval" :duration="duration">
										<swiper-item>
											<view class="swiper-item uni-bg-red">A</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-item uni-bg-green">B</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-item uni-bg-blue">C</view>
										</swiper-item>
									</swiper>
								</view>
								<view></view>
								<p></p>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
</style>