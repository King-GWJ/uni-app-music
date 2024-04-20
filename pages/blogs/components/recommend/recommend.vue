<style lang="scss">
	.recommend {
		padding: 20px;
		box-sizing: border-box;
		background-color: #F8F9FD;

		.search {
			width: 100%;
			height: 30px;
			border: 1px solid #eee;
			border-radius: 15px;
			background-color: #F2F3F7;
			position: relative;

			span {
				position: absolute;
				left: 10px;
				top: 5px;
				width: 10px;
				width: 20px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			input {
				padding-left: 40px;
				padding-top: 5px;
			}
		}

		.nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 10px;

			p {
				border: 1px solid #eee;
				background-color: white;
				padding: 5px;
			}
		}





		.uni-margin-wrap {
			padding: 30rpx;

			.swiper {
				border-radius: 20rpx;
				overflow: hidden;
				height: 256rpx;

				image {
					width: 100%;
				}
			}
		}

		.type {
			display: flex;
			flex-direction: column;

			.lists {
				display: flex;
				justify-content: space-around;
				algin-items: center;

				.list {
					width: calc(100%/3 - 60px);

					img {
						width: 100%;
						height: 40px;
						border: 1px solid #eee;
					}
				}
			}
		}
	}
</style>

<template>
	<view class="recommend">
		<view class="search">
			<span><img src="@/icon/search.svg" alt=""></span>
			<input type="text" name="" id="" placeholder="大家都在听一人一首成名曲">
		</view>

		<view class="nav">
			<p>我的博客</p>
			<p>全部分类</p>
			<p>排行榜</p>
			<p>宝藏博客</p>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"
				indicator-active-color="#ffffff" circular autoplay>
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
		<view class="type">
			<h1>为你推荐</h1>
			<view class="lists">
				<view v-for="(item,index) in background" :key="index" class="list">
					<view>
						<view>
							<view class="img">
								sadas
							</view>
							<view class="txt">
								{{item}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "recommend",
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		}
	}
</script>