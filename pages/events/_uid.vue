<template lang="pug">
	EventsSlugPage(:doc="doc")
</template>

<script>
export default {
	async asyncData({ $prismic, params, error }) {
		const doc = await $prismic.api.getByUID('event', params.uid)
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
        title: 'Event - WeLoveDigi',
    }
}
</script>

<style lang="stylus">

</style>
