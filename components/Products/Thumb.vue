<template lang="pug">
	nuxt-link(:to="'/products/' + product.uid").productthumb
		.productthumb__image
			nuxt-picture(:src="product.data.image.url" alt="image")
		.productthumb__text
			h5 {{product.data.subtitle}}
			h4 {{product.data.title}}
</template>

<script>
export default {
	props:{
		product:{
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="stylus">
.productthumb
	display grid
	grid-template-columns 25% auto
	gap 1.2rem
	// align-content start
	&__image
		position relative
		width 100%
		aspect-ratio 10/8
		display block
		img,picture
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
			object-position center
	&__text
		border-top 1px solid $black
		padding-top 0rem
		h5
			color $text-light
		h4
			font-size 1.2rem
</style>
