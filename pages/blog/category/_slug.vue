<template lang="pug">
	.page
		.blogfiltered
			section
				h4.activefilter #[nuxt-link(to="/blog") Back to all Posts] • {{$route.params.slug}}
				ul.blog__list
					li(v-for="post in filteredPosts")
						nuxt-link(:to="'/blog/'+ post.uid")
							BlogBlogpostCard(:post="post.data")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const allPosts = await $prismic.api.query(
			$prismic.predicates.at('document.type','blogposts')
		)
		if (allPosts) {
			return {allPosts}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	computed:{
		filteredPosts(){
			return this.allPosts.results.filter(x => x.data.category == this.$route.params.slug)
		}
	},
}
</script>

<style lang="stylus">
.blogfiltered
	background rgba($text,.05)
	border-bottom 1px solid rgba($black,.05)
	.activefilter
		margin-bottom 2.4rem
		color $text-light
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(3,1fr)
		gap 4rem
		+mobile()
			grid-template-columns 1fr
</style>
