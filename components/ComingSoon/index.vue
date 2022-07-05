<template lang="pug">
.comingsoon
	img(:src="imgBg" alt="image").comingsoon__bg
	section
		div
			h5 The flexible event solution.
			h1 Coming soon
			p Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
			ComingSoonCountdown(end="August 22, 2022")
			HelperButton(to="/scheduleacall") Get notified
		div
</template>

<script>
import imgBg from './assets/bg_countdown.jpg'
export default {
	data(){
		return{
			imgBg
		}
	}
}
</script>

<style lang="stylus">
.comingsoon
	min-height 100vh
	position relative
	display flex
	flex-direction column
	justify-content center
	align-items flex-start
	&__bg
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		object-fit cover
		object-position center center
	section
		section()
		height 100%
		width 100%
		display grid
		grid-template-columns 1.618fr 1fr
		gap 2rem
</style>
