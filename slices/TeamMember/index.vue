<template lang="pug">
.teammember
	.teammember__text
		h5 {{ slice.primary.jobTitle }}
		h3 {{ slice.primary.name }}
	.teammember__image
		nuxt-img(:src="slice.primary.image.url" alt="image")
		a(href="bla").teammember__icon
			include ./assets/linkedin.svg
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TeamMember",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="stylus" scoped>
.teammember
	display grid
	grid-template-columns 1fr 1.618fr
	gap 1rem
	position relative
	&__text

		h5
			border-top 1px solid $black
			padding-top 1.6rem
			padding-bottom 0rem
		h3
			word-break break-word
	&__image
		position relative
		z-index 1
		width 100%
		aspect-ratio 10/14
		clip-path polygon(0 0, 100% 0, 100% 90%, 86% 100%, 0% 100%)
		img, picture
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
			object-position center
	&__icon
		position absolute
		z-index 2
		color white
		top 1rem
		right 1rem
		mix-blend-mode difference
		svg
			width 2.4rem
			height @width
</style>
