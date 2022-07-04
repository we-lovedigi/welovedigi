<template lang="pug">
	nuxt-link(:to="'/casestudies/' +doc.uid").casethumb
		.casethumb__image
			nuxt-picture(:src="doc.data.image.url" alt="image")
		.casethumb__text
			h5 Case Study
			h3 {{doc.data.title}}
</template>

<script>
export default {
	props:{
		doc:{
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="stylus">
.casethumb
	display grid
	grid-template-columns 25% auto
	gap 1.2rem
	&__image
		display block
		aspect-ratio 16/10
		objectFitImage()
		clip-path polygon(0 0, 100% 0, 100% 90%, 94% 100%, 0% 100%)
	&__text
		border-top 1px solid $black
		h5
			padding-top .6rem

		h3
			margin-top .6rem
			font-size 1.2rem
			line-height 1.2
</style>
