<template lang="pug">
	footer
		FooterCatcher
		.footer
			section
				.footer__logo
					HelperLogo
					p Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				.footer__menu
					p Explore
					ul
						li(v-for="item in $store.state.metadata.navItems")
							nuxt-link(:to="item.link") {{item.name}}
						li
							nuxt-link(to="/scheduleacall") Schedule a call
						li
							nuxt-link(to="/imprint") Imprint
						li
							nuxt-link(to="/dataprivacy") Data Privacy
				.footer__address
					p Address
					.footer__addressitem
						include ./assets/map-pin.svg
						address
							span {{$store.state.metadata.address.street}}
							span {{$store.state.metadata.address.city}}
							span {{$store.state.metadata.address.country}}
					p Email
					.footer__addressitem
						include ./assets/at-sign.svg
						a(:href="'mailto:' + $store.state.metadata.address.email") {{$store.state.metadata.address.email}}
					p Phone
					.footer__addressitem
						include ./assets/phone.svg
						a(:href="$store.state.metadata.address.phone") {{$store.state.metadata.address.phoneNice}}
				.footer__social
					p Social
					ul
						li
							a(:href="$store.state.metadata.socialChannels.linkedIn")
								include ./assets/linkedin.svg
						li
							a(:href="$store.state.metadata.socialChannels.instagram")
								include ./assets/instagram.svg
</template>

<script>
export default {
}
</script>

<style lang="stylus">
footer
	margin-top 6rem
	.footer
		padding-top 8rem
		background $black
		p
			font-size 1rem
			bold()
			margin-bottom 0
		section
			section()
			display grid
			grid-template-columns repeat(4,1fr)
			gap 6rem
			+mobile()
				gtc(1fr)
		&__logo
			img
				max-width 16rem
		&__menu
			ul
				li
					line-height 2
					a
						color $white
						bold()
						font-size 1.2rem
						position relative
						&::after
							content ''
							position absolute
							background-image url(./assets/arrow.svg)
							background-repeat no-repeat
							background-size contain
							background-position center center
							top 0
							left -2rem
							width 1.6rem
							height @width
							opacity 0
							transform translateX(-.6rem)
							transition all 600ms ease
						&:hover::after
							opacity 1
							transform translateX(0)
							transition all 100ms ease
		&__address
			p
				margin-left 3rem
		&__addressitem
			display grid
			align-items start
			gap 1rem
			grid-template-columns 2rem auto
			margin-bottom 2.4rem
			svg
				color $secondary
				height 2rem
				width @height
			address, a, span
				color $white
				line-height 1.6
				display block
				font-style normal
				bold()
				font-size 1.2rem
		&__social
			ul
				display flex
				align-items center
				li
					padding 1rem
					svg
						color $white
						width 2.4rem
						height @width
					&:hover svg
						color $secondary
					& + li
						margin-left 1.2rem
</style>
