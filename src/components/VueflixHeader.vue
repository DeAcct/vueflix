<template>
	<header class="header">
		<div class="inner">
			<h1>
				<router-link to="/"><img src="../../assets/logo.svg" /></router-link>
			</h1>
			<button class="gnb-open">
				<span class="blind">대메뉴 열기</span>
				<span></span>
				<span></span>
			</button>
			<Menu></Menu>
		</div>
	</header>
</template>

<script>
import Menu from './Menu.vue';
export default {
	name: 'VueflixHeader',
	components: {
		Menu,
	},
};
</script>

<style lang="scss" scoped>
.header {
	background-color: #fff;
}
</style>