<template lang="pug">
	.social
		.channels
			p Our social channels:
			ul
				li
					a(:href="$store.state.metadata.socialChannels.linkedIn" rel="noopener" target="blank") LinkedIn
				li
					a(:href="$store.state.metadata.socialChannels.instagram" rel="noopener" target="blank") Instagram
				li
					a(:href="$store.state.metadata.socialChannels.twitter" rel="noopener" target="blank") Twitter
		.email
			p Questions?
			a(href="mailto:" rel="noopener" target="blank") write us an email.
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
