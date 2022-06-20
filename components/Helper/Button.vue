<template lang="pug">
	nuxt-link(:to="to").btn
		.btn__arrow
			include ./assets/arrow-right.svg
			.circle
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
.btn, button
	display inline-block
	appearance none
	border none
	outline none
	color inherit
	font-size 1.2rem
	padding 1.4rem 2rem 1.4rem 6rem
	bold()
	cursor pointer
	position relative
	line-height 1.2
	margin-top 2.4rem
	&__arrow
		position absolute
		top 0
		left 0
		height 100%
		width 100%
		svg
			position absolute
			top 50%
			left 2rem
			transform translate(0%,-50%)
			fill currentColor
			width 2.4rem
			height @width
			transition all 300ms ease
		.circle
			position absolute
			left 0
			top 50%
			width 3.2rem
			height 3.2rem
			border-radius 10rem
			border 1px solid
			border-color inherit
			transform translate(0,-50%)
			transition all 300ms ease
	&:hover
		.btn__arrow
			svg
				left 1.5rem
			.circle
				width 100%
</style>
