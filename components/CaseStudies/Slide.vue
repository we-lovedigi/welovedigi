<template lang="pug">
	li.caseslide
		nuxt-link(:to="'/casestudies/' +doc.uid").caseslide__image
			nuxt-picture(:src="doc.data.image.url" alt="image")
		.caseslide__text
			.h5 Case Study
			nuxt-link(:to="'/casestudies/' +doc.uid")
				h3 {{doc.data.title}}
			//- p {{doc.data.bodytext[0].text | truncate(110)}}
			HelperButton(:to="	'/casestudies/' +doc.uid") Read more
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
.caseslide
	height 100%
	background transparent
	padding 2rem
	&__image
		display block
		objectFitImage()
		aspect-ratio 16/16
		clip-path polygon(0 0, 100% 0, 100% 94%, 94% 100%, 0% 100%)
		margin-bottom 1.2rem
		pointer-events none
	&__text
		opacity 0
		padding-bottom 0rem
		transition all 300ms ease
		transform translate3d(0,2rem,0)
	.h5
		font-size .9rem
	h3
		margin-top .6rem
		font-size 2rem
		line-height 1.4
	p
		font-size 1.4rem
	.btn
		color $primary
		margin-top auto
		margin-left -1.8rem
		align-self flex-start
		.circle
			border-color $primary
			opacity 0
		&:hover
			.circle
				opacity 1
		svg
			color $primary
</style>
