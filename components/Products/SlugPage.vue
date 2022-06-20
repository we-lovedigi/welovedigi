<template lang="pug">
	.productspage
		section
			HelperBackButton(to="/products") see all products
			article
				h5 Product
				h1 {{content.title}}
				prismic-rich-text(:field="content.bodytext")
				HelperButton(to="/scheduleacall") Request a demo
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
.productspage
	margin-top 8rem
	section
		section()
</style>
