<template lang="pug">
	LegalPage(:doc="doc")
</template>

<script>
export default {
	computed:{
		doc(){
			return this.$store.state.content.dataprivacy
		}
	}
}
</script>

<style lang="stylus">

</style>
