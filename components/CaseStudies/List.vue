<template lang="pug">
	.caselist
		section
			ul
				li(v-for="doc in $store.state.content.casestudies")
					CaseStudiesCard(:doc="doc")
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.caselist
	padding-top 8rem
	section
		section()
		> ul
			display grid
			grid-template-columns repeat(3,1fr)
			gap 6rem
</style>
