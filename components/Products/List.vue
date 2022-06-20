<template lang="pug">
	.productslist
		section
			h5 What we offer.
			h2 Our Products
			.productslist__list
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
	background $bg
	border-bottom 1px solid darken($bg,5%)
	section
		section()
		> h2
			margin-bottom 4.2rem
	&__list
		display grid
		grid-template-columns repeat(4,1fr)
		gap 4rem
</style>
