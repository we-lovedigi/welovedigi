<template lang="pug">
	.caselist
		section
			ul
				CaseStudiesCard(v-for="doc,i in $store.state.content.casestudies" :doc="doc" :key="i")
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
			li
				display flex
				flex-direction column
</style>
