<template>
	<div class="comment_info" v-if="Object.keys(commentInfo).length !==0 ">
		<div class="user">
			<img :src="commentInfo.user.avatar" />
			<div class="name">{{ commentInfo.user.uname }}</div>
		</div>
		<div class="comment">
			<p>{{ commentInfo.content }}</p>
			<div class="center">
				<span class="data">{{ commentInfo.created | showDate }}</span>
				<span>{{ commentInfo.style }}</span>
			</div>
			<div class="img">
				<img :src="item" v-for="(item,index) in commentInfo.images" :key="index" />
			</div>
		</div>
	</div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
	name: 'DetailCommentInfo',
	props: {
		commentInfo: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {

		}
	},
	filters: {
		showDate(value) {
			// 1. 将时间戳转化成Date对象
			const date = new Date(value * 1000)
			// 2.将date进行格式化
			return formatDate(date, 'yyyy-MM-dd')
		}
	}
}
</script>

<style lang='scss' scoped>
// .comment_info {

// }
</style>