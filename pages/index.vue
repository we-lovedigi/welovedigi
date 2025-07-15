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
		p {{$store.state.content.metadata.data.caseStudiesSectionIntroduction}}
	LazyCaseStudiesSlider
	//- LazyCaseStudiesList
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
	
	<iframe id="nevronixFrame" src="https://platform.nevronix.ai?id=47&s=01cb7098-142b-4133-a174-80e224b10ede" referrerpolicy="unsafe-url" sandbox="allow-scripts allow-same-origin allow-modals allow-top-navigation allow-popups allow-presentation allow-popups-to-escape-sandbox allow-forms" allow="camera;microphone;autoplay;" style="position: fixed; bottom: 0; right: 0; width: 540px; height: 520px; z-index: 99999; border: none; max-width: 100%; border-radius: 25px; transition: transform 300ms ease-out, opacity 300ms ease-out; opacity: 1; transform: scale(0.8); transform-origin: bottom right;">
	</iframe>
</template>

<script>
export default {
	layout: "lightNav",
	head: {
		title: "WeLoveDigi",
	},
};
</script>

<style lang="stylus"></style>
