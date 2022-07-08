<template lang="pug">
	.casepage
		section
			HelperBackButton(to="/casestudies") see all stories
			.casepage__body
				.casepage__text
					h5 Case Study
					h1 {{doc.data.title}}
					article
						prismic-rich-text(:field="doc.data.Introduction")
						HelperButton(to="/scheduleacall") Requst a demo
					article
						slice-zone(:components="components" :slices="doc.data.slices.filter(x => x.slice_type == 'case_study_stats')")
					prismic-rich-text(:field="doc.data.bodytext")
					HelperButton(to="/scheduleacall") Requst a demo
					.backbtn
						HelperBackButton(to="/casestudies") see all stories
				.casepage__aside
					.casepage__image
						nuxt-picture(:src="doc.data.image.url" alt="image")
					div
					.casepage__meta
						h5 Case Study metadata:
						.casepage__metaitem Customer:
							span {{doc.data.customer}}
						.casepage__metaitem Industry:
							span {{doc.data.industry}}
						.casepage__metaitem Company size:
							span {{doc.data.companySize}}
						.casepage__connected(v-if="connectedProducts")
							h5 Connected Products:
							ul
								li(v-for="p in connectedProducts")
									nuxt-link(:to="'/products/' + p.uid")
										.image
											nuxt-picture(:src="p.data.image.url" alt="image")
										.text
											h5 {{p.data.subtitle}}
											h4 {{p.data.title}}
						.casepage__share
							h5 Share this case study:
							ul
								li
									a(href="" target="blank" rel="noopener")
										include ./assets/linkedin.svg
								li
									a(href="" target="blank" rel="noopener")
										include ./assets/instagram.svg

</template>

<script>
import { components } from '~/slices'

export default {
	props:{
		doc:{
			type: Object,
			default: () => {}
		}
	},
	data(){
		return{
			connectedProducts: null,
			components
		}
	},
	mounted(){
		this.getConnectedProducts()
	},
	methods:{
		getConnectedProducts: function(){
			let filteredSlices = this.doc.data.slices.filter(x => x.slice_type == 'connected_product')
			let uids = filteredSlices.map(x => x.primary.connectedProduct.uid)
			let products = this.$store.state.content.products.filter(x => uids.includes(x.uid) )
			this.connectedProducts = products
		}
	}

}
</script>

<style lang="stylus">
.casepage
	padding-top 8rem
	section
		section()
	&__body
		display grid
		grid-template-columns 1fr 1fr
		gap 6rem
		+mobile()
			gtc(1fr)
			gap 2rem
		h1
			font-size 3.6rem
			line-height 1.2
			margin-bottom 4.2rem
			+mobile()
				font-size 3.2rem
	&__text
		p
			color $black
			font-size 2rem
		ul
			margin 2.4rem 0
			li
				padding-left 2.4rem
				position relative
				font-size 2rem
				line-height 1.6
				+ li
					margin-top 1.2rem
				&::after
					content '\2022'
					position absolute
					font-size 2rem
					left 0rem
					top -.1rem
					color $primary

		article
			margin-bottom 6.2rem
		.backbtn
			margin-top 6.2rem
	&__image
		aspect-ratio 10/12
		objectFitImage()
		grid-column span 2
	&__aside
		display grid
		grid-template-columns 1fr 2fr
		align-content start
		+mobile()
			gtc(1fr)
	&__meta
		background $bg
		padding 4rem 2rem
		position sticky
		top 8rem
	&__metaitem
		color $text-light
		font-size 1rem
		bold()
		margin-top 1.6rem
		min-width 26rem
		&:first-child
			// border-top 1px solid $black
			padding-top 2.4rem
		span
			font-size 1.4rem
			color $black
			display block
	&__connected
		margin-top 4.2rem
		ul
			margin-top 1.6rem
			li
				a
					display grid
					grid-template-columns 12.2rem auto
					gap 1rem
					align-items stretch
					+bp(1242px)
						grid-template-columns 1fr
				+ li
					margin-top 1.6rem
				.text
					border-top 1px solid $black
					padding .4rem 0
				.image
					aspect-ratio 16/10
					objectFitImage()
				h4
					font-size 1.4rem
	&__share
		margin-top 4.2rem
		ul
			margin-top 1.6rem
			display grid
			grid-template-columns repeat(6,1fr)
			gap 4rem
			li
				a
					&:hover
						svg
							color $primary


</style>
