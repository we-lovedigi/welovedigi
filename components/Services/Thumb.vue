<template lang="pug">
	nuxt-link(:to="'/services/' + service.uid").servicethumb
		.servicethumb__image
			nuxt-picture(:src="service.data.image.url" alt="image")
		.servicethumb__text
			h4 {{service.data.title}}
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
.servicethumb
	&__image
		position relative
		width 100%
		aspect-ratio 16/9
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
		padding-top 1.2rem
		h5
			color $text-light
		h4
			font-size 1.2rem
</style>
