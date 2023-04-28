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
		<view class="collapse">
			<u-collapse>
					<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
						{{item.body}}
					</u-collapse-item>
				</u-collapse>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				itemList: [{
									head: "赏识在于角度的转换",
									body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
									open: true,
									disabled: true
								},{
									head: "生活中不是缺少美，而是缺少发现美的眼睛",
									body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
									open: false,
								},{
									head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
									body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
									open: false,
								}],
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
			
		.collapse {
			padding:0 40rpx;
		}
</style>
