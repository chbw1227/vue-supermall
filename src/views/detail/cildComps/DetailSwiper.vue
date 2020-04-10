<template>
	<!-- <div class="datail-swiper"> -->
		<swiper class="items">
			<swiper-item v-for="item in topImages">
				<img :src="item" alt="">
			</swiper-item>
		</swiper>
	<!-- </div> -->
</template>

<script>
//倒导入公共组件
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
	name: '',
	components: {
		Swiper,
		SwiperItem
	},
	props: {
		topImages: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.items {
	height: 300px;
}
</style>