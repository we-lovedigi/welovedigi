<template lang="pug">
	.app
		Nav
		nuxt
		LazyFooter
		//- code
		//- 	pre {{$store.state.content}}
</template>

<script>
import OGimage from '~/assets/images/og_image.jpg'

export default {
	head(){
		return{
			meta: [
				{
					hid: 'og:image',
					property: 'og:image',
					content: OGimage
				},
					{
					hid: 'og:title',
					property: 'og:title',
					content: 'Circle Communications'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: "Connecting healthcare professionals and patients through empowered conversation."
				}
			]
		}
	},
}
</script>

<style lang="stylus" src="./styles/reset.styl"></style>
<style lang="stylus" src="./styles/typography.styl"></style>
<style lang="stylus">
</style>
