<template lang="pug">
	CaseStudiesSlugPage(:doc="doc")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const doc = await $prismic.api.getByUID('casestudie', params.uid)
		if (doc) {
			return { doc }
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	data(){
		return{
			doc: null
		}
	},
	head:{
        title: 'Case Study - We Love Digi',
    }
}
</script>

<style lang="stylus">

</style>
