<template>
	<div class="home">
        <nav-bar class="home-nav">
           <template v-slot:center>
               <div>购物街</div>
           </template>
        </nav-bar>
	</div>
</template>

<script>
import navBar from 'components/common/navBar/NavBar'
export default {
    name: 'Home',
    components:{
        navBar
    },
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.home-nav{
    background-color: var(--color-tint);
    color: white;
}
</style>