<template lang="pug">
	.blog
		section
			ul.blog__tabs
				li(v-for="cat in categories")
					nuxt-link(:to="'/blog/category/' + cat") {{cat}}
			ul.blog__list
				li(v-for="post in posts")
					nuxt-link(:to="'/blog/'+ post.uid")
						BlogpostCard(:post="post.data" :uid="post.uid")
</template>

<script>
import BlogpostCard from './BlogpostCard'

export default {
	components:{
		BlogpostCard
	},
	computed:{
		posts(){
			return this.$store.state.content.blogposts
		},
		categories(){
			let allCats = this.posts.map(x => x.data.category)
			let cleanedCats = [...new Set(allCats)]
			return cleanedCats
		}
	}
}
</script>

<style lang="stylus">
.blog
	background rgba($text,.05)
	border-bottom 1px solid rgba($black,.05)
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(3,1fr)
		gap 4rem
		+mobile()
			grid-template-columns 1fr
	&__tabs
		margin-bottom 4.2rem
		display flex
		align-items center
		justify-content center
		li
			headline()
			font-size 2rem
			letter-spacing .1rem
			color $text-light
			cursor pointer
			+mobile()
				text-align center
				font-size 1.8rem
			+ li
				margin-left clamp(2rem, 4vw, 6rem)
			&.is-active
				color $primary
				cursor default
				pointer-events none
</style>
