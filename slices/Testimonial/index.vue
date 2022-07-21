<template lang="pug">
	.testimonial
		blockquote "{{slice.primary.quote}}"
		.testimonial__author
			.testimonial__image
				nuxt-picture(:src="slice.primary.image.url")
			div
				.testimonial__name {{slice.primary.name}}
				.testimonial__jobtitle {{slice.primary.jobtitle}}
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Testimonial",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="stylus">
.testimonial
	background linear-gradient(to bottom, $white 25%, lighten($secondary,90%) 100%)
	my-shadow(darken($bg,20%))
	padding 2rem
	display flex
	flex-direction column
	justify-content space-between
	border-bottom 1px solid $black
	blockquote
		font-size 1.6rem
		margin-bottom 2rem
		line-height 1.6
	&__author
		display grid
		grid-template-columns 4.2rem auto
		align-items center
		gap 2rem
		line-height 1.2
	&__image
		border-radius 50%
		width 4.2rem
		height 4.2rem
		overflow hidden
		objectFitImage()
	&__name
		bold()
	&__jobtitle
		bold()
		color $text-light
		font-size 1.2rem
</style>
