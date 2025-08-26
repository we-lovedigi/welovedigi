<template lang="pug">
	.app
		Nav
		nuxt
		LazyFooter
		//- code
		//- 	pre {{$store.state.content}}
		<iframe id="nevronixFrame" src="https://platform.nevronix.ai/?id=49&s=5653dd37-55ad-4107-977b-dce9db60f884" referrerpolicy="unsafe-url" sandbox="allow-scripts allow-same-origin allow-modals allow-top-navigation allow-popups allow-presentation allow-popups-to-escape-sandbox allow-forms" allow="camera;microphone;autoplay;" style="position: fixed; bottom: 0; right: 0; width: 540px; height: 520px; z-index: 99999; border: none; max-width: 100%; border-radius: 25px; transition: transform 300ms ease-out, opacity 300ms ease-out; opacity: 1; transform: scale(0.8); transform-origin: bottom right;">
		</iframe>
</template>

<script>
import OGimage from "~/assets/images/og_image.jpg";

export default {
	head() {
		return {
			meta: [
				{
					hid: "og:image",
					property: "og:image",
					content: OGimage,
				},
				{
					hid: "og:title",
					property: "og:title",
					content: "WeLoveDigi",
				},
				{
					hid: "og:description",
					property: "og:description",
					content:
						"The flexible event solution. Create outstanding event landing pages with ease.",
				},
			],
		};
	},
	mounted() {
		if (process.browser) {
			this.$gtag("config", "G-41EENVRKGQ", {
				page_title: this.$metaInfo.title,
				page_path: this.$route.fullPath,
			});
		}
	},
};
</script>

<style lang="stylus" src="./styles/reset.styl"></style>
<style lang="stylus" src="./styles/typography.styl"></style>
<style lang="stylus"></style>
