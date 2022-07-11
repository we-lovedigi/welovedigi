<template lang="pug">
.nav__wrapper(@mouseleave="closeSubNav()")
	nav.nav(:class="{'is-sticky' : stickyBar, 'is-light' : light}")
		section
			nuxt-link(to="/" @mouseenter.native="closeSubNav()").nav__logo
				img(:src="logoWhite" v-if="light && !stickyBar" alt="logo")
				img(:src="logoBlack" v-else alt="logo")
			ul.nav__menu
				li(v-for="m in $store.state.metadata.navItems" @mouseover="setSubNavHover(m.name)")
					nuxt-link(:to="m.link") {{m.name}}
			.nav__cta(@mouseenter="closeSubNav()")
				nuxt-link(to="/scheduleacall") Schedule a call
				.dot
				.dot
				.dot
				.dot
			.nav__burger(@click="toggleBurger()" v-if="!burgerOpen")
				include ./assets/burger.svg
			.nav__burger(@click="toggleBurger()" v-else).nav__burger-close
				include ./assets/closeburger.svg
	.nav__burgermenu(:class="{'is-visible' : burgerOpen, 'is-sticky' : stickyBar, 'is-light' : light}" )
		ul
			li(v-for="m in $store.state.metadata.navItems" @click="toggleBurger()")
				nuxt-link(:to="m.link") {{m.name}}
	NavSubnav(:content="subNavContent" :class="{'is-visible' : subNavVisible , 'is-sticky' : stickyBar, 'is-light' : light}")
</template>

<script>
import logoWhite from './assets/logo_white.png'
import logoBlack from './assets/logo_black.png'
export default {
	props:{
		light:{
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			burgerOpen: false,
			stickyBar: false,
			logoWhite,
			logoBlack,
			subNavVisible: false,
			subNavContent: 'Products'
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
		setSubNavHover: function(name){
			if(name == 'Home' || name  == 'Meet the Team' || name == 'Coming Soon') {
				this.closeSubNav()
			}
			else{
				this.subNavVisible = true
				this.subNavContent = name
			}
		},
		closeSubNav: function(){
			this.subNavVisible = false
		}
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
	border-bottom 1px solid rgba($black,.1)
	background $white
	z-index 100
	transition background 300ms ease
	&__wrapper
		width 100%
		position fixed
		top 0
		left 0
		z-index 100
		pointer-events none
	section
		max-width $pagewidth
		margin 0 auto
		display grid
		grid-template-columns auto 1fr auto
		align-items center
		justify-content space-between
		gap 2rem
		padding 2rem 4rem
		pointer-events auto
		+bp(1124px)
			grid-template-columns auto auto
	&__logo
		max-width 18rem
	&__menu
		display flex
		align-items center
		justify-content center
		a
			bold()
			font-size 1.3rem
		+bp(1124px)
			display none
		li + li
			margin-left 4.2rem
	&__cta
		justify-self end
		position relative
		padding 1.2rem 2rem
		border 1px solid rgba($black,.1)
		cursor pointer
		a
			bold()
			font-size 1.3rem
		+bp(1124px)
			display none
		.dot
			position absolute
			width .2rem
			height @width
			background $black
			&:nth-child(2)
				top -.1rem
				left -.1rem
			&:nth-child(3)
				top -.1rem
				right -.1rem
			&:nth-child(4)
				right -.1rem
				bottom -.1rem
			&:nth-child(5)
				left -.1rem
				bottom -.1rem
		&:hover
			border 1px solid rgba($black,.3)
	&__burger
		display none
		> svg
			fill $black
			width 3.2rem
			height @width
		&-close
			svg
				width 2.4rem
				height @width
		+bp(1124px)
			display block
	&.is-light
		background transparent
		border-bottom 1px solid rgba($white,.1)
		a
			color $white
		.nav__cta
			border 1px solid rgba($white,.2)
			.dot
				background $white
			&:hover
				border 1px solid rgba($white,.4)
		.nav__burger
			> svg
				fill $white
	&.is-sticky
		background rgba($white,.85)
		backdrop-filter blur(18px) saturate(160%)
		transition background 300ms ease
		background-clip padding-box
		border-bottom 2px solid rgba($black,.07)
		a
			color $black
		.nav__cta
			border 1px solid rgba($black,.2)
			.dot
				background $black
			&:hover
				border 1px solid rgba($black,.4)
		.nav__burger
			> svg
				fill $black
	&__burgermenu
		padding 2rem
		background rgba($white,.85)
		backdrop-filter blur(18px) saturate(160%)
		transition background 300ms ease
		background-clip padding-box
		border-bottom 2px solid rgba($black,.07)
		transition all 600ms ease
		opacity 0
		pointer-events none
		transform translate3d(0,-4rem, 0)
		z-index -1
		position relative
		display none
		+bp(1124px)
			display block
		li
			line-height 3
			border-bottom 1px solid rgba($black,.1)
			&:last-child
				border-bottom 0
			a
				bold()
				color $black
				font-size 1.4rem
				padding 0 1.2rem
				&:hover
					color $primary
		&.is-visible
			opacity 1
			transform translate3d(0,0,0)
			pointer-events auto
			transition all 300ms ease
		&.is-light
			background rgba($black,.5)
			*
				color $white
				border-color rgba($white,.1)
		&.is-sticky
			background rgba($white,.85)
			*
				color $black
				border-color rgba($black,.1)
</style>
