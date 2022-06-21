<template lang="pug">
	.meettheteam
		section
			h5 Meet the team
			h2 Meet our founders
			slice-zone(:components="components" :slices="$store.state.content.founders.data.slices").meettheteam__list.founders
			h5 Welcome to the team
			h2 New Joiners
			slice-zone(:components="components" :slices="$store.state.content.joiners.data.slices").meettheteam__list
</template>

<script>
import { components } from '~/slices'
export default {
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
		margin-top 4.2rem
		margin-bottom 8rem
		&.founders
			grid-template-columns 1fr 1fr
</style>
