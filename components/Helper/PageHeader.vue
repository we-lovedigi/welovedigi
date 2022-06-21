<template lang="pug">
	.page
		header.page__header
			slot
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.page
	padding-top 8rem
	&__header
		section()
		padding-bottom 0
</style>
