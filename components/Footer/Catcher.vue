<template lang="pug">
	.catcher
		.catcher__wrapper
			.catcher__text
				h3 There is no need to reinvent the wheel.
				p Take advantage of our best practice experience for your processes. Adapt our tools to your needs and come up with your own configurations.
				nuxt-link(to="/scheduleacall").catcher__button Request an enterprise trail
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.catcher
	padding 0 2rem
	&__wrapper
		section()
		background linear-gradient(to top right, $secondary -10%, $primary 50%, $error 120%)
		text-align center
		clip-path polygon(0 0, 100% 0, 100% 90%, 97% 100%, 0% 100%)
		filter saturate(110%)
		margin-bottom -8rem
	&__text
		max-width 92rem
		margin 0 auto
		padding 4rem
	h3
		color $white
		regular()
		font-size 4.2rem
	p
		color $white
	&__button
		background $white
		padding 1.6rem 3.4rem
		font-size 1.2rem
		border-radius 10rem
		color $black
		bold()
		margin-top 2.4rem
		display inline-block
</style>
