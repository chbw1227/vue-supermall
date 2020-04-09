<template>
	<div class="home">
		<!-- 导航栏 -->
		<nav-bar class="home-nav">
			<template v-slot:center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<scroll class="content" ref="scroll" :probe-type="3" 
        @scroll="contentScroll" :pull-up-load='true' @pullingUp="loadMore">
			<!-- banner轮播图 -->
			<home-swiper :banners="banners" />
			<!-- Recomend -->
			<recommend-view :recommends="recommends" />
			<!-- feature -->
			<feature-view />
			<!-- tabControl -->
			<tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"
            ref="tabControl"></tab-control>
			<goods-list :goods="showGoods">
				<goods-list-item></goods-list-item>
			</goods-list>
		</scroll>
		<!-- 返回顶部 -->
		<back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
	</div>
</template>

<script>
// 公共组件导入
import NavBar from 'components/common/navBar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
// 子组件导入
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

import homeApi from 'assets/api/home/home'

import { debounce } from 'common/utils'
export default {
	name: 'Home',
	components: {
		NavBar,
		TabControl,
		HomeSwiper,
		RecommendView,
		FeatureView,
		GoodsList,
		GoodsListItem,
		Scroll,
		BackTop
	},
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				'pop': {
					page: 0,
					list: []
				},
				'new': {
					page: 0,
					list: []
				},
				'sell': {
					page: 0,
					list: []
				}
			},
			currentType: 'pop',
			isShowBacktop: false,
		}
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list
		}
	},
	methods: {
        /**
         * 网络请求方法
         */
		getHomeMultidata() {
			homeApi.getHomeMultidata({
			}).then(res => {
				console.log(res)
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list
			})
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			homeApi.getHomeGoods(type, page).then(res => {
				console.log(res.data)
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
				this.$refs.scroll.finishPullUp()
			})
		},

        /**
         * 事件监听相关方法
         */
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
			}
		},
		contentScroll(position) {
			// console.log(position)
			this.isShowBacktop = -(position.y) > 1000
		},
		backClick() {
			this.$refs.scroll.scrollTo(0, 0, 500)
		},
		loadMore() {
			this.getHomeGoods(this.currentType)
		},

	},
	created() {
		// 请求houme页面数据
		this.getHomeMultidata();
		// 请求home页面商品数据 
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');

	},
	mounted() {
		// 监听item中图片加载完成
		const refresh = debounce(this.$refs.scroll.refresh, 50)
		this.$bus.$on('itemImgLoad', () => {
			refresh()
        })
        // 获取tabControl的offsetTop
        console.log(this.$refs.tabControl.$el.offsetTop)
	},
}
</script>

<style lang='scss' scoped>
.home {
	position: relative;
	padding-top: 44px;
	height: 100vh;
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
.tab-control {
	position: sticky;
	top: 44px;
	z-index: 9;
}
.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	right: 0;
	left: 0;
	overflow: hidden;
}
</style>