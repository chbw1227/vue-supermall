<template>
	<div class="main-tab-bar">
		<!-- 首页 -->
		<tab-bar-item link="/home" activeColor="#FF5777">
			<template v-slot:item-icon>
				<img class="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
			</template>
			<template v-slot:item-icon-active>
				<img class="item-icon" src="@/assets/img/tabbar/home_active.svg" alt="">
			</template>
			<template v-slot:item-text>
				<div>首页</div>
			</template>
		</tab-bar-item>
		<!-- 分类 -->
		<tab-bar-item link="/category" activeColor="#FF5777">
			<template v-slot:item-icon>
				<img class="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
			</template>
			<template v-slot:item-icon-active>
				<img class="item-icon" src="@/assets/img/tabbar/category_active.svg" alt="">
			</template>
			<template v-slot:item-text>
				<div>分类</div>
			</template>
		</tab-bar-item>
		<!-- 购物车 -->
		<tab-bar-item link="/cart" activeColor="#FF5777">
			<template v-slot:item-icon>
				<img class="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
			</template>
			<template v-slot:item-icon-active>
				<img class="item-icon" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
			</template>
			<template v-slot:item-text>
				<div>购物车</div>
			</template>
		</tab-bar-item>
		<!-- 我的 -->
		<tab-bar-item link="/profile" activeColor="#FF5777">
			<template v-slot:item-icon>
				<img class="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
			</template>
			<template v-slot:item-icon-active>
				<img class="item-icon" src="@/assets/img/tabbar/profile_active.svg" alt="">
			</template>
			<template v-slot:item-text>
				<div>我的</div>
			</template>
		</tab-bar-item>
	</div>
</template>

<script>
import tabBarItem from 'components/common/tabBar/TabBarItem.vue'
export default {
	name: 'MainTabBar',
	components: {
		tabBarItem
	},
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.main-tab-bar {
	display: flex;
}
.item-icon {
	width: 24px;
	height: 24px;
	margin: 3px 0 2px 0;
	visibility: middle;
}
</style>