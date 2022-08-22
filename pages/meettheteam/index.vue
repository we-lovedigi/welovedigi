<template lang="pug">
main
	HelperPageHeader
		h5 Lets introduce
		h1 Meet the team
	HelperBackground
		MeetTheTeamList
	MeetTheTeamList(joiners v-if="$store.state.content.joiners")
</template>

<script>
export default {
	head:{
        title: 'Meet the team - We Love Digi',
    }
}
</script>

<style lang="stylus">

</style>
