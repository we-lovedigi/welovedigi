<template lang="pug">
.comingsoon
	img(:src="imgBg" alt="image").comingsoon__bg
	section
		div
			h5 {{doc.subheadline}}
			h1 {{doc.title}}
			prismic-rich-text(:field="doc.bodytext")
			ComingSoonCountdown(:deadline="date")
			HelperButton(:to="doc.buttonLink") Schedule a call
		div
</template>

<script>
import imgBg from './assets/bg_countdown.jpg'
import dayjs from 'dayjs'

export default {
	data(){
		return{
			imgBg,
			date: 'August 22, 2026'
		}
	},
	beforeMount(){
		this.date = dayjs(this.$store.state.content.comingsoon.data.endDate).format('MMMM D, YYYY')
	},
	computed:{
		doc: function(){
			return this.$store.state.content.comingsoon.data
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
		p
			b,strong
				color $black
</style>
