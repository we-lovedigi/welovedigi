<template lang="pug">
	.errorpage
		h1(v-if="error.statusCode === 404") Page not found.
		h1(v-else) An error occured.
		HelperButton(to="/") Back to Homepage
</template>

<script>
export default {
	props: ['error'],
}
</script>

<style lang="stylus">
.errorpage
	min-height 75vh
	display flex
	align-items center
	justify-content center
	flex-direction column
</style>
