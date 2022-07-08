<template lang="pug">
.preview
	p loading preview...
</template>

<script>
export default {
	mounted() {
		this.$prismic.preview()
	}
}
</script>

<style lang="stylus">
.preview
	min-height 100vh
</style>
