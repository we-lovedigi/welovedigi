<template lang="pug">
	BlogBlogpost(:post="doc.data" :allPosts="allPosts.results")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const doc = await $prismic.api.getByUID('blogposts', params.uid)
		const allPosts = await $prismic.api.query(
			$prismic.predicates.at('document.type','blogposts')
		)
		if (doc && allPosts) {
			return { doc, allPosts }
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},

}
</script>

<style lang="stylus">

</style>
