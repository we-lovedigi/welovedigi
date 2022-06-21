<template lang="pug">
.eventslist
	section
		ul
			li(v-for="event in $store.state.content.events")
				EventsCard(:doc="event")
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.eventslist
	position relative
	&::after
		content ''
		position absolute
		background $bg
		width 100%
		top 6rem
		bottom 0
		left 0
		z-index -1
	section
		section()
		padding-top 0
	ul
		display grid
		grid-template-columns repeat(6,1fr)
		gap 4rem
		align-items stretch
		li
			grid-column span 2
			border-bottom 1px solid $black
			&:nth-child(1), &:nth-child(2)
				grid-column span 3
</style>
