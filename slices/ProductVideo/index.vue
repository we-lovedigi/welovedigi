<template lang="pug">
.productvideo
	PrismicEmbed(:field="slice.primary.video")
	div
		PrismicText(:field="slice.primary.title" class="title")
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

<style lang="stylus" scoped>
.productvideo
	display grid
</style>
