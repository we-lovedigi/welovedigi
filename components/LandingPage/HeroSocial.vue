<template lang="pug">
	.social
		.channels
			p Our social channels:
			ul
				li
					a(:href="$store.state.content.metadata.data.linkedinUrl" rel="noopener" target="blank") LinkedIn
				li
					a(:href="$store.state.content.metadata.data.instagramUrl" rel="noopener" target="blank") Instagram
		.email
			p Questions?
			a(href="mailto:hello@we-lovedigi.com?subject=Hello WeLoveDigi 👋" rel="noopener" target="blank") write us an email.
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.social
	> div
		border-top 1px solid $white
		padding-top 1rem
		p
			color $white
			opacity .5
			bold()
			font-size 1rem
			margin-bottom 1rem
		a
			bold()
			font-size 1rem
			color $white
			&:hover
				opacity .8
	.email
		margin-top 20vh
</style>
