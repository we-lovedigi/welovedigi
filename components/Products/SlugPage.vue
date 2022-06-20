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
		align-items center
		h1
			margin-bottom 8.2rem
		.btn
			color $primary
</style>
