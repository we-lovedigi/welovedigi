<template lang="pug">
nuxt-link(:to="'/events/' + doc.uid").eventsthumb
	.eventsthumb__image
		nuxt-picture(:src="doc.data.image.url" alt="image")
	.eventsthumb__text
		h5 {{ niceDate(doc.data.date) }}
		h3 {{doc.data.title}}
		.eventsthumb__date
			include ./assets/clock.svg
			span {{doc.data.time}}
		.eventsthumb__date
			include ./assets/map-pin.svg
			span {{doc.data.location}}
</template>

<script>
import dayjs from 'dayjs'

export default {
	props:{
		doc:{
			type: Object,
			default: () => {}
		}
	},
	methods:{
		niceDate: function(date){
			return dayjs(date).format('MMM D, YYYY')
		}
	}
}
</script>

<style lang="stylus">
.eventsthumb
	display block
	color $black
	&__image
		aspect-ratio 16/6
		objectFitImage()
	&__text
		padding 2rem 2rem 0 2rem
		h3
			margin .6rem 0 2.4rem 0
			font-size 1.2rem
	&__date
		display grid
		grid-template-columns 2.4rem auto
		gap 1rem
		align-items center
		span
			font-size 1.2rem
</style>
