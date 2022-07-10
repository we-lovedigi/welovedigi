<template lang="pug">
.detailedcv
	HelperBackground(offset="34rem")
		section
			.detailedcv__text
				HelperBackButton(to="/meettheteam") back to meet the team
				h5 {{doc.primary.jobTitle}}
				h1 {{doc.primary.name}}
				prismic-rich-text(:field="doc.primary.detailedCV")
			div
				.detailedcv__image
					nuxt-picture(:src="doc.primary.image.url" alt="image")
				.detailedcv__meta
					.detailedcv__metaitem
						h5 Contact {{doc.primary.name}}:
						ul
							li
								a(:href="doc.primary.linkedinUrl" target="_blank" rel="noopener") LinkedIn
							li
								nuxt-link(to="/scheduleacall") Schedule a call
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
	+mobile()
		.lightbg
			.curtain
				background transparent
				border none
	section
		section()
		display grid
		grid-template-columns 1fr 1fr
		gap 6rem
		+mobile()
			gap 2rem
			gtc(1fr)
	&__text
		h1
			margin-bottom 6.2rem
			max-width 20rem
			+mobile()
				margin-bottom 2rem
		h3,h2,h4
			margin-top 2.4rem
	&__image
		aspect-ratio 10/12
		clip-path polygon(0 0, 100% 0, 100% 90%, 86% 100%, 0% 100%)
		objectFitImage()
		filter saturate(10%) contrast(90%) sepia(20%) hue-rotate(220deg)
	&__meta
		display grid
		gtc(1fr 1fr)
		gap 6rem
		margin-top 2.4rem
	&__metaitem
		border-top 1px solid $black
		padding-top 1.2rem
		a
			bold()
			color $black
			line-height 2
</style>
