<template>
	<div class="tab-bar-item" @click="itemClick">
        <!-- 图标 -->
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
        <!-- 激活图标 -->
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
        <!-- 文字 -->
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>
<script>


export default {
	name: 'TabBarItem',
	props: {
        link: String,
        activeColor:{
            type:String,
            default:'blue'
        }
	},
	data() {
		return {
		}
	},
	methods: {
        // 路由跳转
		itemClick() {
            // console.log(this.$route)
            this.$router.replace(this.link)
		}
    },
    computed:{
        // 动态改变激活图标
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1
        },
        // 动态改变导航栏字体颜色
        activeStyle(){
            return this.isActive ? { color : this.activeColor } : {}
        }
    }
}
</script>

<style lang='scss' scoped>
.tab-bar-item {
	flex: 1;
	height: 49px;
	font-size: 14px;
	text-align: center;
}
</style>