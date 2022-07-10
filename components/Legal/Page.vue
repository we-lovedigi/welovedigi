<template lang="pug">
	.legalpage
		section
			h1 {{doc.data.pageTitle}}
			prismic-rich-text(:field="doc.data.bodytext")
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
.legalpage
	padding-top 8rem
	section
		section()
		max-width 72ch
		margin 0 auto
		p
			font-size 1.2rem
		h1
			font-size 4.2rem
			line-height 1
			+mobile()
				font-size 2.6rem
</style>
