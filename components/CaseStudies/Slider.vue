<template lang="pug">
	.slider
		.swiper
			.swiper-wrapper
				.swiper-slide(v-for="doc,i in $store.state.content.casestudies" :key="i" )
					.slide-content
						CaseStudiesSlide(:doc="doc")
			.swiper-pagination
			//- .swiper-button-prev
			//- .swiper-button-next
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
					slidesPerView: 1.5,
					spaceBetween: 5
				},
				// when window width is >= 480px
				580: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				// when window width is >= 640px
				840: {
					slidesPerView: 3.5,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 4.5,
					spaceBetween: 30
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
	padding 8rem 0
.swiper-panorama
	overflow visible
.swiper-slide-active
	.caseslide__text
		opacity 1
		transform translate3d(0,0,0)
		transition all 100ms ease
</style>
