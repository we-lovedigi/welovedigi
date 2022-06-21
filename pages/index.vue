<template lang="pug">
main
	LandingPageHero
	LazyHelperSectionTitle(bg)
		h5 What we offer
		h2 Our Products
	HelperBackground(offset="0")
		LazyProductsList
	LazyHelperSectionTitle(center)
		h5 Have a look
		h2 Case Studies & Stories
		p Increase your employee happiness by giving them access to our products. Make their workplace be a happy place.
	LazyCaseStudiesList
	LazyHelperSectionTitle
		h5 Meet the team
		h2 Our Founders
	LazyMeetTheTeamList
	LazyHelperSectionTitle(center)
		h5 Welcome
		h2 Our new recruits
	LazyMeetTheTeamList(joiners)
</template>

<script>
export default {
	layout: 'lightNav'
}
</script>

<style lang="stylus">

</style>
