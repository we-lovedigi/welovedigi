<template lang="pug">
	nav.nav(:class="{'is-sticky' : stickyBar}")
		section
			.nav__logo
				HelperLogo
			ul.nav__menu
				li(v-for="m in $store.state.metadata.navItems")
					nuxt-link(:to="m.link") {{m.name}}
			.nav__cta
				nuxt-link(to="/scheduleacall") Schedule a call
			.nav__burger
				include ./assets/burger.svg
</template>

<script>

export default {
	data(){
		return{
			burgerOpen: false,
			stickyBar: false
		}
	},
	methods:{
		toggleBurger: function(){
			this.burgerOpen = !this.burgerOpen
		},
		handleScroll () {
			if (window.scrollY >= 40){
				this.stickyBar = true
			}else{
				this.stickyBar = false
			}
		},
	},
	created () {
		if (process.browser) {
			window.addEventListener('scroll', this.handleScroll);
		}
	},
	destroyed () {
		if (process.browser) {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}
}
</script>

<style lang="stylus">
.nav
	position fixed
	top 0
	left 0
	width 100%
	border-bottom 1px solid rgba($white,.1)
	z-index 100
	transition background 300ms ease
	section
		max-width $pagewidth
		margin 0 auto
		display grid
		grid-template-columns auto 1fr auto
		align-items center
		justify-content space-between
		gap 2rem
		padding 2rem 4rem
		+mobile()
			grid-template-columns auto auto
	&__logo
		max-width 18rem
	&__menu
		display flex
		align-items center
		justify-content center
		+mobile()
			display none
		li + li
			margin-left 4.2rem
	&__cta
		justify-self end
		+mobile()
			display none
	a
		color $white
		bold()
		font-size 1.4rem
	&.is-sticky
		background rgba(black,.33)
		backdrop-filter blur(18px) saturate(160%)
		transition background 300ms ease
		background-clip padding-box
		border-bottom 2px solid rgba($black,.2)
	&__burger
		display none
		cursor pointer
		> svg
			fill $white
			width 3.2rem
			height @width
		+mobile()
			display block
</style>
