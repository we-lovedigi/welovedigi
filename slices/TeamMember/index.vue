<template lang="pug">
	//- nuxt-link(v-if="slice.primary.hasCV" :to="'/meettheteam/' + slice.primary.name.replace(' ','').toLowerCase()").teammember
	//- 	.teammember__text
	//- 		h5 {{ slice.primary.jobTitle }}
	//- 		h3 {{ slice.primary.name }}
	//- 		a(:href="slice.primary.linkedinUrl" target="_blank" rel="noopener").teammember__icon
	//- 			include ./assets/linkedin.svg
	//- 	.teammember__image
	//- 		nuxt-img(:src="slice.primary.image.url" alt="image")
	.teammember
		.teammember__text
			.h5 {{ slice.primary.jobTitle }}
			nuxt-link(v-if="slice.primary.hasCV" :to="'/meettheteam/' + slice.primary.name.replace(' ','').toLowerCase()")
				h3 {{ slice.primary.name }}
				span
					include ./assets/arrow-right.svg
			h3(v-else) {{slice.primary.name}}
			.teammember__icon
				a(:href="slice.primary.linkedinUrl" target="_blank" rel="noopener")
					include ./assets/linkedin.svg
		.teammember__image
			nuxt-img(:src="slice.primary.image.url" alt="image")
			.teammember__icon.icon-play(v-if="slice.primary.hasVideo" @click="showModal(slice.primary.youtubeVideoID)")
				include ./assets/play.svg
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TeamMember",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  methods:{
	showModal: function(id){
		this.$store.commit('showEmbedModal', {visible: true, id: id})
	}
  }
}
</script>

<style lang="stylus" scoped>
.teammember
	display grid
	grid-template-columns 1fr 1.618fr
	gap 1rem
	position relative
	&__text
		position relative
		.h5
			border-top 1px solid $black
			padding-top 1.6rem
			padding-bottom 0rem
			font-size 1rem
		h3
			// word-break break-word
			margin-top .6rem
			font-size 1.6rem
			max-width 8rem
		span
			display block
			margin-top 2.4rem
			svg
				fill $black
				width 3.2rem
				height @width
	&__image
		position relative
		z-index 1
		width 100%
		aspect-ratio 10/12
		clip-path polygon(0 0, 100% 0, 100% 90%, 86% 100%, 0% 100%)
		filter saturate(10%) contrast(90%) sepia(20%) hue-rotate(220deg)
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
		color $text-light
		top 1.2rem
		right 0
		// mix-blend-mode difference
		cursor pointer
		&:hover
			color $secondary
		svg
			width 2.4rem
			height @width
	.icon-play
		right 1rem
		color $white
		mix-blend-mode difference
</style>
