<template lang="pug">
main
	LandingPageHero
	LazyHelperSectionTitle(bg)
		.h5 What we offer
		h2 Our Products
	HelperBackground(offset="0")
		LazyProductsList
	LazyHelperSectionTitle()
		.h5 We assist
		h2 Our Services
	LazyServicesList
	LazyHelperSectionTitle(center)
		.h5 Have a look
		h2 Case Studies & Stories
		p Increase your employee happiness by giving them access to our products. Make their workplace be a happy place.
	LazyCaseStudiesList
	HelperBackground(offset="0" hasBorderTop)
		LazyHelperSectionTitle(center)
			.h5 Testimonials
			h2 What's said about us
		LazyTestimonials
	LazyHelperSectionTitle
		.h5 Meet the team
		h2 Our Founders
	LazyMeetTheTeamList
	LazyHelperSectionTitle(center v-if="$store.state.content.joiners")
		.h5 Welcome
		h2 Our new recruits
	LazyMeetTheTeamList(joiners v-if="$store.state.content.joiners")
</template>

<script>
export default {
	layout: 'lightNav'
}
</script>

<style lang="stylus">

</style>
