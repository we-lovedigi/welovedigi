<template lang="pug">
	ProductsSlugPage(:content="doc.data")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const doc = await $prismic.api.getByUID('product', params.uid)
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
        title: 'Products - WeLoveDigi',
    }
}
</script>

<style lang="stylus">

</style>
