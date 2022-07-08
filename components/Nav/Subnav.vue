<template lang="pug">
	.subnav
		section(v-if="content == 'Products'")
			.subnav__intro
				div
					h5 On the products page:
					nuxt-link(to="/products") All of our products
				div
					h5 Featured content:
					p {{$store.state.content.metadata.data.productsNavigationFeaturedText}}
			.subnav__list
				h5 Our products
				.subnav__list__products
					ProductsThumb(v-for="p in products.slice(0,4)" :product="p" :key="p.uid")
		section(v-if="content == 'Case Studies & Stories'")
			.subnav__intro
				div
					h5 On the stories page:
					nuxt-link(to="/casestudies") All of our Case Studies & Stories
				div
					h5 Featured content:
					p {{$store.state.content.metadata.data.storiesNavigationFeaturedText}}
			.subnav__list
				h5 Our Case Studies
				.subnav__list__products
					CaseStudiesThumb(v-for="c in casestudies.slice(0,4)" :doc="c" :key="c.uid")
		section(v-if="content == 'Events'")
			.subnav__intro
				div
					h5 On the events page:
					nuxt-link(to="/events") All of our events
				div
					h5 Featured content:
					p {{$store.state.content.metadata.data.eventsNavigationFeaturedText}}
			.subnav__list
				h5 Newest events
				.subnav__list__products
					EventsThumb(v-for="p in events.slice(0,2)" :doc="p" :key="p.uid")
</template>

<script>
export default {
	props:{
		content:{
			type:String,
			default: 'Products'
		}
	},
	computed:{
		products(){
			return this.$store.state.content.products
		},
		casestudies(){
			return this.$store.state.content.casestudies
		},
		events(){
			return this.$store.state.content.events
		}
	}
}
</script>

<style lang="stylus">
.subnav
	background rgba($white,.85)
	backdrop-filter blur(18px) saturate(160%)
	transition background 300ms ease
	background-clip padding-box
	border-bottom 2px solid rgba($black,.07)
	transition all 600ms ease
	position relative
	z-index -1
	opacity 0
	transform translate(0,-4rem)
	my-shadow(darken($primary,70%))
	pointer-events none
	+mobile()
		display none
	section
		max-width $pagewidth
		margin 0 auto
		display grid
		gap 2rem
		padding 4rem 4rem
		display grid
		grid-template-columns 1fr 2fr
		gap 4rem
		h5
			margin-bottom .6rem
	&__intro
		display flex
		flex-direction column
		justify-content space-between
		a,p
			bold()
			color $black
			font-size 1.2rem
		a
			font-size 1.6rem
			&:hover
				color $primary
		p
			max-width 42ch
	&__list
		h5
			margin-bottom 1.2rem
		&__products
			display grid
			grid-template-columns 1fr 1fr
			gap 2rem 6rem
	&.is-visible
		opacity 1
		transform translate3d(0,0,0)
		transition all 300ms ease
		pointer-events auto
	&.is-light
		background rgba($black,.5)
		*
			color $white
			border-color $white
		h5
			color $text-light
	&.is-sticky
		background rgba($white,.85)
		*
			color $black
			border-color $black
		h5
			color $text-light
</style>
