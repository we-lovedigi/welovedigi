<template lang="pug">
.connectedproducts
	.connectedproducts_product(v-for="(item, i) in slice.items" :key="`slice-item-${i}`")
		PrismicLink(:field="item.ConnectedProductSlug") My Link
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ConnectedProduct",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
