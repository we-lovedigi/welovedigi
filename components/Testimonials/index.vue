<template lang="pug">
	.testimonials
		section
			slice-zone(:components="components" :slices="testimonials").testimonials__list
</template>

<script>
import { components } from '~/slices'

export default {
	data(){
		return{
			components
		}
	},
	computed:{
		testimonials: function(){
			return this.$store.state.content.testimonials.data.slices
		}
	}
}
</script>

<style lang="stylus">
.testimonials
	section
		section()
	&__list
		display grid
		gtc(repeat(3,1fr))
		gap 4rem
		+bp(1000px)
			gtc(repeat(2,1fr))
		+mobile()
			gtc(1fr)
</style>
