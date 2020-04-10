<template>
	<div id="app">
		<keep-alive exclude="Detail">
			<router-view />
		</keep-alive>
		<tab-bar>
			<main-tab-bar></main-tab-bar>
		</tab-bar>
	</div>
</template>
<script>
import tabBar from 'components/common/tabBar/TabBar.vue'
import mainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
	components: {
		tabBar,
		mainTabBar
	},
}
</script>
<style lang="scss">
@import "./assets/css/base.css";
</style>
