<template lang="pug">
	.btn
		slot
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.btn, button
	display inline-block
	appearance none
	border none
	outline none
	padding 2.4rem 3.8rem 2.2rem 3.8rem
	color $white
	font-size 1.6rem
	bold()
	cursor pointer
</style>
