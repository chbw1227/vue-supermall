<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		recommends: {
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
.recommend {
	display: flex;
	text-align: center;
}

.recommend-item {
	flex: 1;
	font-size: 12px;
    padding: 10px 0 20px;
    border-bottom:10px solid #eee;
}
.recommend-item img {
	width: 70px;
	height: 70px;
    margin-bottom: 10px;
}
</style>