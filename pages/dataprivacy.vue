<template lang="pug">
	LegalPage(:doc="doc")
</template>

<script>
export default {
	computed:{
		doc(){
			return this.$store.state.content.dataprivacy
		}
	},
	head:{
        title: 'Data Privacy - WeLoveDigi',
    }
}
</script>

<style lang="stylus">

</style>
