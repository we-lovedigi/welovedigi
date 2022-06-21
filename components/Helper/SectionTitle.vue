<template lang="pug">
	.sectiontitle(:class="{'is-center' : center, 'has-bg': bg}")
		section
			slot
</template>

<script>
export default {
	props:{
		center:{
			type: Boolean,
			default: false
		},
		bg:{
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="stylus">
.sectiontitle
	section
		section()
		padding-bottom 0
	&.is-center
		section
			text-align center
			max-width 72rem
	&.has-bg
		background $bg
	& + div > section
		padding-top 4.2rem
</style>
