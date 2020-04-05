<template>
	<div id="app">
		<router-view />
		<tab-bar>
			<main-tab-bar></main-tab-bar>
		</tab-bar>
	</div>
</template>
<script>
import tabBar from 'components/common/tabBar/TabBar.vue'
import mainTabBar from 'components/content/MainTabBar.vue'

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
