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
		},
		pullUpLoad: {
			type: Boolean,
			default: false
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
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }
	},
	mounted() {
		// 1.创建BScroll对象
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: true,
			probeType: this.probeType,
			pullUpLoad: true
		})
		// 2. 实时监听滚动位置
		this.scroll.on('scroll', (position) => {
			this.$emit('scroll', position)
		})
		//3.监听上拉事件
		this.scroll.on('pullingUp', () => {
		    // console.log('上拉加载更多')
			this.$emit('pullingUp')
		})
	},
}
</script>

<style lang='scss' scoped>
</style>