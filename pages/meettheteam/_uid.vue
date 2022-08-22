<template lang="pug">
div
	MeetTheTeamCVpage(:doc="correctCV[0]")
</template>

<script>
export default {
	asyncData({params, error, store }){
		let allCVs
		if(store.state.content.joiners){
			allCVs = store.state.content.founders.data.slices.concat(store.state.content.joiners.data.slices)
		} else {
			allCVs = store.state.content.founders.data.slices
		}
		let correctCV = allCVs.filter(x => x.primary.name.replace(' ', '').toLowerCase() == params.uid)
		if(correctCV.length && correctCV[0].primary.hasCV != false) {
			return {correctCV}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
		}

	},
	head:{
        title: 'Meet the team - We Love Digi',
    }

}
</script>

<style lang="stylus" scoped>
div
	margin-top 12rem
</style>
