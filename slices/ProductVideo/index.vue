<template lang="pug">
.productvideo#demo
	section
		PrismicEmbed(:field="slice.primary.video")
		div
			h3
				PrismicText(:field="slice.primary.title")
			PrismicRichText(:field="slice.primary.description")
			HelperButton(to="/scheduleacall") Schedule a call
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ProductVideo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="stylus" >
.productvideo
	background $bg
	border-top 1px solid darken($bg,5%)
	border-bottom 1px solid darken($bg,5%)
	section
		section()
		margin-top 4.2rem
		display grid
		grid-template-columns 2fr 1fr
		gap 2rem
		align-items center
		iframe
			aspect-ratio 16/9
			width 100%
			height 100%
			border-radius 1.5rem
			overflow hidden
</style>
