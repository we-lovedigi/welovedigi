<template lang="pug">
	.embedmodal(v-if="modal.visible")
		.embedmodal__bg(@click="hideModal()")
		.embedmodal__close(@click="hideModal()")
			include ./assets/x.svg
		.embedmodal__asset
			.embedmodal__assetcontainer
				iframe(:src="`https://www.youtube.com/embed/${modal.id}?showinfo=0&video-id=${modal.id}&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video")
</template>

<script>
export default {
	computed:{
		modal(){
			return this.$store.state.embedModal
		}
	},
	methods:{
		hideModal: function(){
			this.$store.commit('showEmbedModal', {visible: false, id: null})
		}
	}
}
</script>

<style lang="stylus">
.embedmodal
	position fixed
	top 0
	left 0
	width 100%
	height 100%
	z-index 102
	::selection
		color $white
		background transparent
	&__bg
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		background rgba($black,.95)
	&__close
		position absolute
		top 2rem
		right 2rem
		cursor pointer
		width 2.4rem
		height @width
		svg
			color $white
	&__asset
		position absolute
		top 50%
		left 50%
		width 90%
		height 90%
		pointer-events none
		transform translate(-50%,-50%)
	&__assetcontainer
		position absolute
		top 50%
		left 50%
		width 100%
		transform translate(-50%,-50%)
		max-width (16 / 10 * 100)vh
		aspect-ratio 16/9
		border-radius .3rem
		overflow hidden
		padding-bottom 56.25%
		iframe
			pointer-events auto
			position absolute
			top 0%
			left 0%
			width 100%
			height 100%
</style>
