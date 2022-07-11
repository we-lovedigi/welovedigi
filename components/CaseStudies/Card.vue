<template lang="pug">
	li.casecard
		nuxt-link(:to="'/casestudies/' +doc.uid").casecard__image.cursor
			nuxt-picture(:src="doc.data.image.url" alt="image")
		.h5 Case Study
		h3 {{doc.data.title}}
		//- p {{doc.data.bodytext[0].text | truncate(110)}}
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
	height 100%
	&__image
		display block
		aspect-ratio 16/10
		objectFitImage()
		clip-path polygon(0 0, 100% 0, 100% 90%, 94% 100%, 0% 100%)
		margin-bottom 1.2rem

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
	.cursor
		&:hover
			cursor url('assets/cursor.svg'), auto;
</style>
