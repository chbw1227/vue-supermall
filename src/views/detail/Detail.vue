<template>
	<div class="detail">
		<detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
		<scroll class="content" ref="scroll">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-info :goods="goods"></detail-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-image :detail-info="detailInfo" @imageLoad="imageLoad"></detail-image>
			<detail-param ref="params" :param-info="paramInfo"></detail-param>
			<detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
			<goods-list ref="recommend" :goods="recommendList"></goods-list>
		</scroll>
	</div>
</template>

<script>
//导入公共组件
import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'
// 导入子组件
import DetailNavBar from './cildComps/DetailNavBar'
import DetailSwiper from './cildComps/DetailSwiper'
import DetailInfo from './cildComps/DetailInfo'
import DetailShopInfo from './cildComps/DetailShopInfo'
import DetailImage from './cildComps/DetailImage'
import DetailParam from './cildComps/DetailParam'
import DetailCommentInfo from './cildComps/DetailCommentInfo'

import { getDetailList, getRecommend, Goods, Shop, GoodsParam } from 'assets/api/detail/detail'

import { debounce } from 'common/utils'
import { imageLoadMixin } from 'common/mixin'

export default {
	name: 'Detail',
	components: {
		Scroll,
		DetailNavBar,
		DetailSwiper,
		DetailInfo,
		DetailShopInfo,
		DetailImage,
		DetailParam,
		DetailCommentInfo,
		GoodsList
	},
	mixins: [imageLoadMixin],
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommendList: [],
			themeTopY: [],
			getThemeTopY: null
		}
	},
	methods: {
		// 获取详情
		getDetailList() {
			getDetailList(this.iid)
				.then(res => {
					console.log(res.result)
					const data = res.result;
					// 获取顶部的图片诗句
					this.topImages = data.itemInfo.topImages;
					// 获取商品信息
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
					//获取店铺信息
					this.shop = new Shop(data.shopInfo);
					//获取商品详情图片
					this.detailInfo = data.detailInfo;
					//获取上片参数
					this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
					//获取评论信息 
					if (data.rate.cRate !== 0) {
						this.commentInfo = data.rate.list[0]
					}
				})
		},
		// 获取推荐数据
		getRecommend() {
			getRecommend().then(res => {
				console.log(res.data.list, 'recommend')
				this.recommendList = res.data.list
			})
		},
		imageLoad() {
			this.$refs.scroll.refresh()
			this.getThemeTopY()
		},
		titleClick(index) {
			// console.log('index', index)
			this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500)
		}
	},
	created() {
		this.iid = this.$route.params.id;
		this.getDetailList();
		this.getRecommend();
		this.getThemeTopY = debounce(() => {
			this.themeTopY = []
			this.themeTopY.push(0);
			this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
			this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
			this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)
		},100)
	},
	destroyed() {
		// console.log('111')
		this.$bus.$off('itemImageListener', this.itemImageListener)
	},
}
</script>

<style lang='scss' scoped>
.detail {
	position: relative;
	height: 100vh;
	background-color: #fff;
	z-index: 9;
}
.content {
	height: calc(100% - 44px);
}
.detail-nav {
	position: relative;
	background-color: #fff;
	z-index: 9;
}
</style>