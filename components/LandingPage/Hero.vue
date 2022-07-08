<template lang="pug">
	.hero
		.hero__bg
			video(muted loop autoplay playsinline)
				source(:src="HeroVid" type="video/mp4")
		.hero__social
			LandingPageHeroSocial
		.hero__headline
			p {{content.subtitle}}
			h1 {{content.headline}}
			HelperButton(:to="content.buttonLink") Discover more
		.hero__aside
			include ./assets/scroll.svg
</template>

<script>
import HeroVid from './assets/hero_vid.mp4'

export default {
	data(){
		return{
			HeroVid
		}
	},
	computed:{
		content: function(){
			return this.$store.state.content.herosection.data
		}
	}
}
</script>

<style lang="stylus">
.hero
	min-height 100vh
	position relative
	display grid
	grid-template-columns 12rem 1fr 12rem
	gap 2rem
	align-items center
	padding 4rem
	height 100%
	+mobile()
		grid-template-columns 1fr
	&__bg
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		z-index -1
		video
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
	&__headline
		text-align center
		max-width 92rem
		margin 0 auto
		color $white
		p
			color $white
			bold()
		h1
			color $white
			regular()
		.btn
			&:hover
				span
					color $white
				svg
					fill $white !important
				.circle
					border-color $white !important
	&__social
		align-self end
		+mobile()
			display none
	&__aside
		align-self end
		justify-self end
		+mobile()
			display none
		svg
			width 6.2rem
			height @width
</style>
