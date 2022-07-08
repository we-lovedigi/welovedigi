<template lang="pug">
	.casestudiessection
		section
			h5 Have a look
			h2 Case Studies & Stories
			p {{$store.state.content.metadata.data.caseStudiesSectionIntroduction}}
		CaseStudiesList
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.casestudiessection
	> section
		section()
		text-align center
		padding-bottom 0
		max-width 72rem
</style>
