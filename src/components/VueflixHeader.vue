<template>
	<header class="header" :class="{scroll : isScroll}" @scroll="handleScroll">
		<div class="inner">
			<div class="col-left">
				<h1 class="logo">
					<router-link to="/">
						<img src="../../assets/logo.svg" alt="뷰플릭스"/>
					</router-link>
				</h1>
				<Menu></Menu>
			</div>
			<div class="col-right">
				<button class="gnb-open">
					<span class="blind">대메뉴 열기</span>
					<span></span>
					<span></span>
				</button>
			</div>
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
	data() {
		return {
			isScroll: false
		}
	},
	methods: {
		handleScroll() {
			this.isScroll = 0 < Math.round(window.scrollY)
		}
	},
	created() {
		window.addEventListener("scroll", this.handleScroll)
	},
	unmounted() {
		window.removeEventListener("scroll", this.handleScroll)
	}
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0);
	-webkit-backdrop-filter: blur(0);
	backdrop-filter: blur(0);
	position: fixed;

	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 7.2rem;
		.col-left{
			display: flex;
			align-items: center;
			.logo{
				display: flex;
				align-items: center;
				width: 10.8rem;
				height: 7.2rem;
				padding: 0 1.5rem;
				a{
					display: flex;
					width: 100%;
				}
			}
		}
	}

	transition: all 250ms ease-out;
	&.scroll{
		background-color:hsla(0, 0%, 100%, .5);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid #efefef;
	}
}
</style>
