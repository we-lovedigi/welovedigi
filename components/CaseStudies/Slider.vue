<template lang="pug">
	.slider
		.swiper
			.swiper-wrapper
				.swiper-slide(v-for="doc,i in $store.state.content.casestudies" :key="i" )
					.slide-content
						CaseStudiesSlide(:doc="doc")
			.swiper-pagination
			.swiper-button-prev
			.swiper-button-next
		.slider__all-btn
			HelperButton(to="/casestudies") See all Stories
</template>

<script>
import placeholder from './assets/placeholder.png'
export default {
	data(){
		return{
			placeholder,
			swiper: null,
			activeSlide: 0
		}
	},
	mounted(){
		const that = this
		this.swiper = new this.$swiper('.swiper', {
			loop: true,
			slidesPerView: 5,
			spaceBetween: 50,
			centeredSlides: true,
			effect: 'panorama',
			slideToClickedSlide: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				// when window width is >= 320px
				340: {
					allowTouchMove: true,
					slidesPerView: 1.5,
					spaceBetween: 0
				},
				// when window width is >= 480px
				580: {
					allowTouchMove: true,
					slidesPerView: 2,
					spaceBetween: 0
				},
				// when window width is >= 640px
				840: {
					allowTouchMove: false,
					slidesPerView: 3.5,
					spaceBetween: 0
				},
				1024: {
					allowTouchMove: false,
					slidesPerView: 4.5,
					spaceBetween: 0
				}
			},
			on: {
				slideChange: function (slide) {
					// let activeIndex = this.activeIndex;
					// let realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
					// that.activeSlide = realIndex
					}
			},
			// configure Swiper to use modules
			modules: [this.$swiperModules.Navigation, this.$swiperModules.EffectPanorama]
		});
		// this.swiper.on('slideChange', function (swip) {
		// 	console.log(swip);
		// });
	}
}
</script>

<style lang="stylus">
@import 'node_modules/swiper/swiper-bundle.min.css';
.slider
	overflow hidden
	padding 10rem 0
	+bp(1980px)
		padding 6rem 0
	+mobile()
		padding 2rem 0
	&__all-btn
		margin 0 auto
		max-width $pagewidth
		display flex
		justify-content center
		margin-top -6rem
		margin-bottom 4rem
.swiper-panorama
	overflow visible
.swiper-slide-active
	&:hover
		cursor url('assets/cursor.svg') 50 50, auto;
	.caseslide
		background $bg
	.caseslide__image
		pointer-events auto
		&:hover
			cursor url('assets/cursor.svg') 50 50, auto;
	.caseslide__text
		opacity 1
		transform translate3d(0,0,0)
		transition all 100ms ease
		h3
			&:hover
				cursor url('assets/cursor.svg') 50 50, auto;
.swiper-button-next,.swiper-button-prev
	border 1px solid $black
	width 4.2rem
	height @width
	padding 1.2rem
	border-radius 50%
	color $black
	top auto
	bottom 15%
	z-index 9
	+bp(1968px)
		bottom 25%
	&::after
		font-size 1.6rem
	&:hover
		color $primary
		border-color $primary
.swiper-button-next
	right 35%
	+bp(1024px)
		right 30%
	+bp(840px)
		right 4rem
	+mobile()
		right 1rem
	&::after
		transform translateX(.1rem)
.swiper-button-prev
	left 35%
	+bp(1024px)
		left 30%
	+bp(840px)
		left 4rem
	+mobile()
		left 1rem
	&::after
		transform translateX(-.1rem)
</style>
