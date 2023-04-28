<template>
	<view>
		手机  <u-button type="primary" @click="add">添加</u-button>
		{{appData.phoneCount}}
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				appData:{}
			}
		},
			
		computed:{
		
		},
		methods: {
			...mapActions(['addcount']),
			add() {
				this.addcount()
			}
		},
		created(){
			this.appData= this.$store.state.app.appData
		},	
		
	}
</script>

<style>

</style>
