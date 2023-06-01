<template lang="pug">
	.blogpostcard
		.blogpostcard__image
			nuxt-picture(:src="post.image.url" alt="image")
		ul.blogpostcard__meta
			li
				include ./assets/calendar.svg
				h5 {{niceDate}}
			li
				include ./assets/user.svg
				h5 {{post.author}}
			li
				include ./assets/archive.svg
				h5 {{post.category}}
		.blogpostcard__text
			h3 {{post.title}}
			p {{post.bodytext[0].text | truncate(110)}}
			HelperButton(:to="'/blog/'+ uid").readmore Read more
</template>

<script>
import dayjs from 'dayjs'

export default {
	props:{
		post:{
			type: Object,
			default: () => {}
		},
		uid:{
			type:String,
			default: null
		}
	},
	computed:{
		niceDate: function(){
			return dayjs(this.post.date).format('DD MMM')
		}
	},
	filters: {
		truncate: function(text, length, clamp){
			if(process.browser){
				clamp = clamp || '...';
				var node = document.createElement('div');
				node.innerHTML = text;
				var content = node.textContent;
				return content.length > length ? content.slice(0, length) + clamp : content;
			}
		}
	},
}
</script>

<style lang="stylus">
.blogpostcard
	display block
	position relative
	transition all 600ms ease
	border-bottom 1px solid $black
	padding-bottom 2.4rem
	&__image
		width 100%
		aspect-ratio 16/9
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
	&__meta
		display flex
		align-items center
		justify-content flex-start
		z-index 3
		position relative
		padding-top 1.2rem
		padding-bottom 1.2rem
		margin-top 1.2rem
		h5
			font-size 1.2rem
			line-height 1.2
		li
			display grid
			grid-template-columns 2rem auto
			gap .6rem
			color $white
			align-items center
			+li
				margin-left 2.4rem
			svg
				color $primary
				margin-top -.2rem
	&__text
		p
			font-size 1.3rem
		h5
			margin-top .6rem
			font-size 1.2rem
			line-height 1.2
			margin-bottom 0
			padding-bottom 0
</style>
