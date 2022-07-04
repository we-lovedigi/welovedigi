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
	section
		section()
		h2
			margin-bottom 4.2rem
		> ul
			display grid
			grid-template-columns repeat(3,1fr)
			gap 6rem
			+mobile()
				gtc(1fr)
				gap 2rem
</style>
