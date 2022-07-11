<template lang="pug">
	.app
		Nav(light)
		nuxt
		LazyFooter
		HelperEmbedModal
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
					content: 'WeLoveDigi'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: "The flexible event solution."
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
