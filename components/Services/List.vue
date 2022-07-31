<template lang="pug">
	.serviceslist
		section.serviceslist__list
			ServicesCard(v-for="p in services" :service="p" :key="p.uid")
</template>

<script>
export default {
	computed:{
		services(){
			return this.$store.state.content.services
		}
	}
}
</script>

<style lang="stylus">
.serviceslist
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(3,1fr)
		gap 4rem
		+mobile()
			gtc(1fr 1fr)
			gap 2rem
</style>
