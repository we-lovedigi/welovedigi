<template lang="pug">
.detailedcv
	section
		.detailedcv__text
			h5 {{doc.primary.jobTitle}}
			h1 {{doc.primary.name}}
			prismic-rich-text(:field="doc.primary.detailedCV")
		.detailedcv__image
			nuxt-picture(:src="doc.primary.image.url" alt="image")
			HelperButton Linkedin
			HelperButton Schedule a call
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
.detailedcv
	section
		section()
		display grid
		grid-template-columns 1fr 1fr
		gap 6rem
	&__text
		h3,h2,h4
			margin-top 2.4rem
</style>
