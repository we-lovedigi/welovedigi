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
					content: 'WeLoveDigi'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: "The flexible event solution. Create outstanding event landing pages with ease."
				}
			]
		}
	},
	mounted() {
		if (process.browser) {
			this.$gtag('config', 'G-41EENVRKGQ', {
				page_title: this.$metaInfo.title,
				page_path: this.$route.fullPath,
			})
		}
  	}
}
</script>

<style lang="stylus" src="./styles/reset.styl"></style>
<style lang="stylus" src="./styles/typography.styl"></style>
<style lang="stylus">
</style>
