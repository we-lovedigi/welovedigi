<template lang="pug">
	.productcard
		nuxt-link(:to="'/products/' + product.uid").productcard__image
			nuxt-picture(:src="product.data.image.url" alt="image")
		h5.productcard__subtitle {{product.data.subtitle}}
		h4.productcard__title {{product.data.title}}
		.btn-group
			nuxt-link(:to="'/products/' + product.uid + '#demo'").btn__demo Watch demo
			HelperButton(:to="'/products/' + product.uid") Read more
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
.productcard
	&__image
		position relative
		width 100%
		aspect-ratio 10/12
		display block
		img,picture
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
			object-position center
	&__subtitle
		margin-top 1rem
		border-top 1px solid $black
		padding-top .6rem
		margin-bottom 1rem
	.btn
		color $primary
	.btn__demo
		color $primary
		font-size 1.2rem
		bold()
		margin-top 2.4rem
	.btn-group
		display flex
		align-items center
		justify-content space-between
</style>
