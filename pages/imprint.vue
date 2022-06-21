<template lang="pug">
	LegalPage(:doc="doc")
</template>

<script>
export default {
	computed:{
		doc(){
			return this.$store.state.content.imprint
		}
	}
}
</script>

<style lang="stylus">

</style>
