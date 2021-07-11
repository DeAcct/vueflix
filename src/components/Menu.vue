<template>
	<nav class="menu">
		<ul class="items">
			<li v-for="(item, index) in items" :key="index">
				<router-link :to="item.to">
					<i><ion-icon :name="item.icon"></ion-icon></i>
					<span>{{ item.item }}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Menu',
	data() {
		return {
			items: [
				{
					to: '/tagsearch',
					item: '태그검색',
					icon: 'checkbox-outline',
				},
				{
					to: '/daily',
					item: '요일별 신작',
					icon: 'calendar-outline',
				},
				{
					to: '/recommend',
					item: '테마추천',
					icon: 'dice-outline',
				},
				{
					to: '/membership',
					item: '멤버쉽',
					icon: 'diamond-outline',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.menu{
	margin-left: 2.5rem;
	.items {
		display: flex;

	}
}

</style>
