<template lang="pug">
	.productslist
		section.productslist__list
			ProductsCard(v-for="p in products" :product="p" :key="p.uid")
</template>

<script>
export default {
	computed:{
		products(){
			return this.$store.state.content.products
		}
	}
}
</script>

<style lang="stylus">
.productslist
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(4,1fr)
		gap 4rem
		+mobile()
			gtc(1fr 1fr)
			gap 2rem
</style>
