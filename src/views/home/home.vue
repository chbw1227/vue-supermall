<template>
	<div class="home">
		<!-- 导航栏 -->
		<nav-bar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<!-- banner轮播图 -->
		<home-swiper :banners="banners" />
		<!-- Recomend -->
		<recommend-view :recommends="recommends"/>
        <!-- feature -->
        <feature-view />
        <!-- tabControl -->
        <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
        <ul>
            <li>1_li</li>
            <li>2_li</li>
            <li>3_li</li>
            <li>4_li</li>
            <li>5_li</li>
            <li>6_li</li>
            <li>7_li</li>
            <li>8_li</li>
            <li>9_li</li>
            <li>10_li</li>
            <li>11_li</li>
            <li>12_li</li>
            <li>13_li</li>
            <li>14_li</li>
            <li>15_li</li>
            <li>16_li</li>
            <li>17_li</li>
            <li>18_li</li>
            <li>19_li</li>
            <li>20_li</li>
            <li>21_li</li>
            <li>22_li</li>
            <li>23_li</li>
            <li>24_li</li>
            <li>25_li</li>
            <li>26_li</li>
            <li>27_li</li>
            <li>28_li</li>
            <li>29_li</li>
            <li>30_li</li>
            <li>31_li</li>
            <li>32_li</li>
            <li>33_li</li>
            <li>34_li</li>
            <li>35_li</li>
            <li>36_li</li>
            <li>37_li</li>
            <li>38_li</li>
            <li>39_li</li>
            <li>40_li</li>
            <li>41_li</li>
            <li>42_li</li>
            <li>43_li</li>
            <li>44_li</li>
            <li>45_li</li>
            <li>46_li</li>
            <li>47_li</li>
            <li>48_li</li>
            <li>49_li</li>
            <li>50_li</li>
            <li>51_li</li>
            <li>52_li</li>
            <li>53_li</li>
            <li>54_li</li>
            <li>55_li</li>
            <li>56_li</li>
            <li>57_li</li>
            <li>58_li</li>
            <li>59_li</li>
            <li>60_li</li>
            <li>61_li</li>
            <li>62_li</li>
            <li>63_li</li>
            <li>64_li</li>
            <li>65_li</li>
            <li>66_li</li>
            <li>67_li</li>
            <li>68_li</li>
            <li>69_li</li>
            <li>70_li</li>
            <li>71_li</li>
            <li>72_li</li>
            <li>73_li</li>
            <li>74_li</li>
            <li>75_li</li>
            <li>76_li</li>
            <li>77_li</li>
            <li>78_li</li>
            <li>79_li</li>
            <li>80_li</li>
            <li>81_li</li>
            <li>82_li</li>
            <li>83_li</li>
            <li>84_li</li>
            <li>85_li</li>
            <li>86_li</li>
            <li>87_li</li>
            <li>88_li</li>
            <li>89_li</li>
            <li>90_li</li>
            <li>91_li</li>
            <li>92_li</li>
            <li>93_li</li>
            <li>94_li</li>
            <li>95_li</li>
            <li>96_li</li>
            <li>97_li</li>
            <li>98_li</li>
            <li>99_li</li>
            <li>100_li</li>
        </ul>
	</div>
</template>

<script>
// 公共组件导入
import NavBar from 'components/common/navBar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'
// 子组件导入
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import homeApi from 'assets/api/home/home'
export default {
	name: 'Home',
	components: {
		NavBar,
        TabControl,
		HomeSwiper,
        RecommendView,
        FeatureView,
	},
	data() {
		return {
			banners: [],
			recommends: []
		}
	},
	methods: {
		click() {
			console.log(this.recommends)
		}
	},
	created() {
		// 请求home页面数据
		homeApi.getHomeMultidata({
		}).then(res => {
			console.log(res)
			this.banners = res.data.banner.list;
			this.recommends = res.data.recommend.list
		})
	},
}
</script>

<style lang='scss' scoped>
.home{
    padding-top: 44px;
}
.home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
	background-color: var(--color-tint);
	color: white;
    z-index: 9;
}
.tab-control{
    position: sticky;
    top:44px;
}
</style>