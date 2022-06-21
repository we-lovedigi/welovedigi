<template lang="pug">
	.hero
		.hero__bg
			video(muted loop autoplay playsinline)
				source(:src="HeroVid" type="video/mp4")
		.hero__social
			LandingPageHeroSocial
		.hero__headline
			p The flexible event solution.
			h1 Create outstanding event landing pages with ease.
			HelperButton Discover more
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
	&__aside
		align-self end
		justify-self end
		svg
			width 6.2rem
			height @width
</style>
