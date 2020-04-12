<template>
	<div class="deatailnavbar">
		<nav-bar>
			<template v-slot:left>
				<div class="back-image" @click="backClick()">
					<img src="~assets/img/common/back.svg" alt="">
				</div>
			</template>
			<template v-slot:center>
				<div class="titles">
					<div v-for="( item,index ) in titles" 
                    class="title" 
                    @click="itemClick(index)" 
                    :class="{ activeClass : index === currentIndex}">{{ item }}</div>
				</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
	name: 'DeatailNavBar',
	components: {
		NavBar
	},
	props: {

	},
	data() {
		return {
			titles: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		}
	},
	methods: {
		itemClick(index) {
			// console.log(index)
            this.currentIndex = index;
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.go(-1)
        }
	}
}
</script>

<style lang='scss' scoped>
.titles {
	display: flex;
}
.title {
	flex: 1;
	font-size: 13px;
}
.activeClass {
	color: var(--color-high-text);
}
.back-image {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}
.back-image img {
	width: 15px;
	height: 15px;
}
</style>