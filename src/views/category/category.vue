<template>
	<div class="category">
		分类
		<scroll class="content">
            ul>li.li-item{li_$}*100
        </scroll>
	</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
	name: 'Category',
	components: {
		Scroll
	},
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.content{
    background-color: red;
    // height:  ;
}
</style>