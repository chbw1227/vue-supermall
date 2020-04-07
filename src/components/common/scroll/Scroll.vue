<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: '',
	props: {
		probeType: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			scroll: null
		}
	},
	methods: {
		scrollTo(x, y, time) {
			this.scroll.scrollTo(0, 0, time)
		}
	},
	mounted() {
		// 1.创建BScroll对象
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: true,
			probeType: this.probeType
		})
		// 2. 实时监听滚动位置
		this.scroll.on('scroll', (position) => {
			this.$emit('scroll', position)
		})
	},
}
</script>

<style lang='scss' scoped>
</style>