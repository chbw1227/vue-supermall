<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
	</div>
</template>

<script>
// 导入子组件
import DetailNavBar from './cildComps/DetailNavBar'
import DetailSwiper from './cildComps/DetailSwiper'


import detailApi from 'assets/api/detail/detail'
export default {
	name: 'Detail',
	components: {
		DetailNavBar,
		DetailSwiper
	},
	data() {
		return {
			iid: null,
			topImages: []
		}
	},
	methods: {
		// 获取详情
		getDetailList() {
			detailApi.getDetailList(this.iid)
				.then(res => {
					console.log(res.result)
                    this.topImages = res.result.itemInfo.topImages
                    console.log('轮播图图片',res.result.itemInfo.topImages)
				})
		}
	},
	created() {
		this.iid = this.$route.params.id;
		this.getDetailList()
	}
}
</script>

<style lang='scss' scoped>
</style>