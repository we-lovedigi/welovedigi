<template lang="pug">
	.blogpost
		PageHeader(:image="post.image.url" :title="post.title[0].text" subtitle="Blogpost")
		section.blogpost__body
			.blogpost__bodytext
				prismic-rich-text(:field="post.bodytext")
				ul.blogpost__meta
					li
						include ./assets/calendar.svg
						span {{niceDate(post.date)}}
					li
						include ./assets/user.svg
						span {{post.author}}
					li
						include ./assets/archive.svg
						nuxt-link(:to="'/blog/category/' + post.category")
							span {{post.category}}
			aside.blogpost__aside
				ul.blogpost__otherposts
					li(v-for="allpost in allPosts.slice(0,5)")
						nuxt-link(:to="'/blog/' + allpost.uid").blogpost__asidepost
							.blogpost__asideimage
								nuxt-picture(:src="allpost.data.image.url" alt="image")
							.blogpost__asidetext
								h3 {{allpost.data.title[0].text}}
								ul.blogpost__asidemeta
									li
										include ./assets/calendar.svg
										span {{niceDate(allpost.data.date)}}
									li
										include ./assets/user.svg
										span {{allpost.data.author}}
									li
										include ./assets/archive.svg
										span {{allpost.data.category}}
			nuxt-link(to="/blog").btn-back
				svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right")
					line(x1="5" y1="12" x2="19" y2="12")
					polyline(points="12 5 19 12 12 19")
				span Back to all Blogposts
</template>

<script>
import dayjs from 'dayjs'

export default {
	props:{
		post:{
			type: Object,
			default: ()=> {}
		},
		allPosts:{
			type: Array,
			default: () => {}
		}
	},
	methods:{
		niceDate: function(date){
			return dayjs(date).format('DD MMM')
		}
	},
}
</script>

<style lang="stylus">
.blogpost
	&__body
		section()
		display grid
		grid-template-columns 1.618fr 1fr
		gap 6rem
		align-items start
		max-width 120rem
		+mobile()
			grid-template-columns 1fr
	&__bodytext
		h5
			text-transform none
			margin 0
			font-size 1.8rem
			letter-spacing 0px
			bold()
			margin-top 2.4rem
		h4,h3,h2
			margin-top 5.6rem
			margin-bottom 1.2rem
		b, strong
			color $black
		ul, ol
			margin 2.4rem 0
			li
				margin-left 2.4rem
				list-style-type disc
				color $text
				font-size 1.8rem
				line-height 2
		ol
			li
				font-size 1.1rem
				color $black
				list-style-type decimal
				line-height 1.6
				+ li
					margin-top .6rem
	&__meta
		margin-top 2.4rem
		padding-top 2.4rem
		border-top 1px solid rgba($black,.05)
		display flex
		align-items center
		li
			display grid
			grid-template-columns 2rem auto
			gap .6rem
			align-items center
			color $text-light
			+mobile()
				font-size 1.2rem
			svg
				color $primary
			+ li
				margin-left 2.4rem
	&__otherposts
		background rgba($text,.1)
		border-radius 1.3rem
		padding 4rem
		+mobile()
			padding 2rem
		> li
			+ li
				margin-top 2.4rem
	&__asidepost
		display grid
		grid-template-columns 7.2rem auto
		gap 2rem
		align-items center
		+mobile()
			grid-template-columns 4.2rem auto
			gap 1.2rem
		h3
			line-height .8
			+mobile()
				margin 0
	&__asideimage
		width 100%
		aspect-ratio 1/1
		border-radius .7rem
		overflow hidden
		position relative
		img,picture
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			object-fit cover
			object-position center
	&__asidemeta
		display flex
		align-items center
		li
			display grid
			grid-template-columns 1.6rem auto
			gap .4rem
			align-items center
			headline()
			font-size 1.3rem
			line-height 1
			+li
				margin-left 1.6rem
			svg
				color $primary
	.btn-back
		display grid
		grid-template-columns 2rem auto
		gap .6rem
		align-items center
		color $primary
		headline()
		font-size 2rem
		margin-top 10.2rem
		svg
			transform scale(-1,1)
			margin-top -.3rem
</style>
