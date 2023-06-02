<template lang="pug">
	.blog
		section(v-if="posts.length >= 1")
			ul.blog__tabs
				li
					h5 Categories:
				li(v-for="cat in categories")
					nuxt-link(:to="'/blog/category/' + cat") {{cat}}
			ul.blog__list
				li(v-for="post in posts")
					nuxt-link(:to="'/blog/'+ post.uid")
						BlogpostCard(:post="post.data" :uid="post.uid")
		section(v-else).blog__empty
			h1 There are no blogposts yet. #[br]Check back soon.
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
		> li > a
			display block
			height 100%
	&__tabs
		margin-bottom 4.2rem
		display flex
		align-items center
		justify-content start
		li
			font-size 1.2rem
			bold()
			cursor pointer
			a
				color $black
				&:hover
					color $primary
			+ li
				margin-left clamp(2rem, 4vw, 6rem)
			&.is-active
				color $primary
				cursor default
				pointer-events none
	&__empty
		display flex
		align-items center
		justify-content center
		min-height 75vh
		h1
			text-align center
			font-size 3.2rem
			line-height 1
</style>
