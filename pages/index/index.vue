<template>
	<view class="content">
	 <view class="title">
		 	<icon type="search"  class="custom-icon" size="20" ></icon>		
	 	<text>首 页</text>
			<icon type="success"  class="custom-icon" size="20" ></icon>
	 </view>
	 <view class="wrap">
	 		<u-swiper :list="list" keyName="image"></u-swiper>
	 	</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				list: [{
										image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
										title: '昨夜星辰昨夜风，画楼西畔桂堂东'
									},
									{
										image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
										title: '身无彩凤双飞翼，心有灵犀一点通'
									},
									{
										image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
										title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
									}
								],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.title {
		height:100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content:space-between;
		align-items: center;
		.custom-icon {
			line-height: 1;
			margin:0 20rpx
		}
	}
	.wrap {
			padding:0 40rpx;
		}
</style>
