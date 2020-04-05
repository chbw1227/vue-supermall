<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
// import tabBarItem from 'components/common/tabBar/TabBarItem.vue'
export default {
	name: 'TabBar',
	components: {
		// tabBarItem
	},
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.tab-bar {
	position: fixed;
	height: 49px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #f6f6f6;
	box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}

</style>