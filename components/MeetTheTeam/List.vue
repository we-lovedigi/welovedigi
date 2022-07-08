<template lang="pug">
	.meettheteam
		section
			slice-zone(:components="components" :slices="members" :class="{'founders' : !joiners}").meettheteam__list
</template>

<script>
import { components } from '~/slices'
export default {
	props:{
		joiners:{
			type:Boolean,
			default: false,
		}
	},
	computed:{
		members(){
			if(this.joiners) {
				return this.$store.state.content.joiners.data.slices
			} else {
				return this.$store.state.content.founders.data.slices
			}
		}
	},
	data(){
		return{
			components
		}
	}
}
</script>

<style lang="stylus">
.meettheteam
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(3,1fr)
		gap 6rem
		+mobile()
			gtc(1fr 1fr)
			gap 2rem
		&.founders
			grid-template-columns 1fr 1fr 1fr
			+mobile()
				gtc(1fr)
.meettheteam + .meettheteam
	section
		padding-top 0
</style>
