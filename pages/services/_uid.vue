
<template lang="pug">
	ServicesSlugPage(:content="doc.data")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const doc = await $prismic.api.getByUID('services', params.uid)
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
        title: 'Services - WeLoveDigi',
    }
}
</script>

<style lang="stylus">

</style>
