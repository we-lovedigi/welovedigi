<template lang="pug">
	nuxt-link(:to="to").btn__back
		include ./assets/arrow-right.svg
		slot
</template>

<script>
export default {
	props:{
		to:{
			type: String,
			default: '/'
		}
	}
}
</script>

<style lang="stylus">
.btn__back
	color $black
	display grid
	grid-template-columns 2.4rem auto
	align items center
	gap .6rem
	font-size 1.2rem
	bold()
	line-height 2
	margin-bottom 4.2rem
	svg
		width 2.4rem
		height @width
		fill currentColor
		transform rotate(1/2 turn)
	&:hover
		color $primary
</style>
