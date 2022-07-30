<template lang="pug">
	.servicecard
		nuxt-link(:to="'/services/' + service.uid").servicecard__image
			nuxt-picture(:src="service.data.image.url" alt="image")
		h4.servicecard__title {{service.data.title}}
		.btn-group
			HelperButton(:to="'/services/' + service.uid") Request a quote
</template>

<script>
export default {
	props:{
		service:{
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="stylus">
.servicecard
	display flex
	flex-direction column
	// align-content start
	&__image
		position relative
		width 100%
		aspect-ratio 10/6
		display block
		img,picture
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
			object-position center
	&__title
		+mobile()
			font-size 1.4rem
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
		+mobile()
			display none
	.btn-group
		display flex
		align-items center
		justify-content space-between
		margin-top auto
</style>
