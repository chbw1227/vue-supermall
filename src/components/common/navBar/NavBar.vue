<template>
	<div class="nav-bar">
		<!-- right -->
		<div class="left">
			<slot name="left"></slot>
		</div>
		<!-- center -->
		<div class="center">
			<slot name="center"></slot>
		</div>
		<!-- left -->
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {

		}
	}
}
</script>

<style lang='scss' scoped>
.nav-bar {
	display: flex;
	height: 44px;
	line-height: 44px;
	box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
	width: 60px;
	// background-color: pink;
}
.center {
	flex: 1;
	text-align: center;
	// background-color: red;
}
</style>