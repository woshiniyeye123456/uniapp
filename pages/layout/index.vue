<template>
	<view>
    <u-button type="primary">主要按钮</u-button>
	<u-button type="primary">主要按钮</u-button>
	<u-button type="success">成功按钮</u-button>
	<u-button type="info">信息按钮</u-button>
	<u-button type="warning">警告按钮</u-button>
	<u-button type="error">危险按钮</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''				
			}
		},
		methods: {
			change(e) {
							console.log(e);
						}
		}
	}
</script>

<style>

</style>
