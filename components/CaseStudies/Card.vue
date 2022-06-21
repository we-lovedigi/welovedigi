<template lang="pug">
	.casecard
		nuxt-link(:to="'/casestudies/' +doc.uid").casecard__image
			nuxt-picture(:src="doc.data.image.url" alt="image")
		.casecard__text
			h5 Case Study
			h3 {{doc.data.title}}
			p {{doc.data.bodytext[0].text | truncate(110)}}
			HelperButton(:to="'/casestudies/' +doc.uid") Read more
</template>

<script>
export default {
	props:{
		doc:{
			type: Object,
			default: () => {}
		}
	},
	filters: {
		truncate: function(text, length, clamp){
			if(process.browser){
				clamp = clamp || '...';
				var node = document.createElement('div');
				node.innerHTML = text;
				var content = node.textContent;
				return content.length > length ? content.slice(0, length) + clamp : content;
			}
		}
	},
}
</script>

<style lang="stylus">
.casecard
	border-bottom 1px solid $black
	padding-bottom 2.4rem
	&__image
		display block
		aspect-ratio 16/10
		objectFitImage()
		clip-path polygon(0 0, 100% 0, 100% 90%, 94% 100%, 0% 100%)
		margin-bottom 1.2rem
	&__text
		h3
			margin-top .6rem
</style>
