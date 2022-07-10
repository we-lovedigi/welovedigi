<template lang="pug">
nuxt-link(:to="'/events/' + doc.uid").eventcard
	.eventcard__image
		nuxt-picture(:src="doc.data.image.url" alt="image")
	.eventcard__text
		h5 {{ niceDate(doc.data.date) }}
		h3 {{doc.data.title}}
		.bottom
			.eventcard__date
				include ./assets/clock.svg
				span {{doc.data.time}}
			.eventcard__date
				include ./assets/map-pin.svg
				span {{doc.data.location}}
			HelperButton(:to="'/events/' + doc.uid") Read more
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
.eventcard
	display block
	color $black
	display flex
	flex-direction column
	flex-grow 1
	&__image
		aspect-ratio 16/10
		objectFitImage()
	&__text
		padding 2rem
		display flex
		flex-direction column
		flex-grow 1
		h3
			margin .6rem 0 2.4rem 0
	&__date
		display grid
		grid-template-columns 2.4rem auto
		gap 1rem
	.bottom
		margin-top auto
</style>
