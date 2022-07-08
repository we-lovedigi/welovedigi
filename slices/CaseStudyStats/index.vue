<template lang="pug">
	.casestudiestats
		.casestudiestats__stat(v-for="item,i in slice.items" :key="i")
			.casestudiestats__number {{item.number}}
			.casestudiestats__desc {{item.description}}
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "CaseStudyStats",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="stylus">
.casestudiestats
	display grid
	grid-template-columns 1fr 1fr
	gap 6rem
	+mobile()
		grid-template-columns 1fr
	&__number
		bold()
		color $secondary
		font-size 5.2rem
		line-height 1.2
	&__desc
		bold()
		color $black
		font-size 1.2rem
</style>
