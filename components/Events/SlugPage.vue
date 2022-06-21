<template lang="pug">
.eventpage
	section
		HelperBackButton(to="/events") see all events
		.eventpage__intro
			div
				h5 Event
				h1 {{doc.data.title}}
			.eventpage__meta
				.eventpage__metaitem Date:
					span {{doc.data.date}}
				.eventpage__metaitem time:
					span {{doc.data.time}}
				.eventpage__metaitem Location:
					span {{doc.data.location}}
				HelperButton(to="/scheduleacall") Register now
		.eventpage__body
			.eventpage__bodytext
				prismic-rich-text(:field="doc.data.bodytext")
				HelperButton(to="/scheduleacall") Register now
			.eventpage__bodyimage
				nuxt-picture(:src="doc.data.image.url" alt="image")
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
.eventpage
	padding-top 8rem
	position relative
	&::after
		content ''
		position absolute
		background $bg
		width 100%
		top 16rem
		bottom 0
		right 0
		width 33.3%
		z-index -1
	section
		section()
	&__intro
		display grid
		grid-template-columns 1fr 1fr
		gap 6rem
	&__meta
		justify-self end
		border-top 1px solid $black
	&__metaitem
		color $text-light
		font-size 1rem
		bold()
		margin-top 1.6rem
		min-width 26rem
		span
			font-size 1.4rem
			color $black
			display block
	&__body
		display grid
		grid-template-columns 1fr 1fr
		gap 6rem
		padding-top 4.2rem
	&__bodyimage
		aspect-ratio 10/11
		objectFitImage()
</style>
