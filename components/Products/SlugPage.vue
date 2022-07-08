<template lang="pug">
	.productpage
		section
			HelperBackButton(to="/products") see all products
			article
				.productpage__introduction
					h5 Product
					h1 {{content.title}}
					prismic-rich-text(:field="content.bodytext")
					HelperButton(to="/scheduleacall") Request a demo
				.productpage__image
					nuxt-picture(:src="content.image.url" alt="image")
		slice-zone(:components="components" :slices="content.slices")
</template>

<script>
import { components } from '~/slices'

export default {
	data(){
		return{
			components
		}
	},
	props:{
		content: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="stylus">
.productpage
	margin-top 8rem
	section
		section()
	article
		display grid
		grid-template-columns 1fr 1fr
		gap 12rem
		margin-bottom 12rem
		align-items start
		+mobile()
			grid-template-columns 1fr
			margin-bottom 6rem
			gap 4rem
		h1
			font-size 3.6rem
			line-height 1.2
			margin-bottom 4.2rem
			+mobile()
				font-size 3.2rem
		.btn
			color $primary
	&__image
		aspect-ratio 10/12
		objectFitImage()
</style>
