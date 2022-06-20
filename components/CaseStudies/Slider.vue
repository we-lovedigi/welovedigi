<template lang="pug">
.test
	client-only
		carousel-3d(perspective="12")
			slide(:index="0") hello
			slide(:index="1") hello
			slide(:index="2") hello
			slide(:index="3") hello
			slide(:index="4") hello
</template>

<script>

export default {

}
</script>

<style lang="stylus">

</style>
