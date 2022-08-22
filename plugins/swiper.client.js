import Vue from 'vue';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper'
import EffectPanorama from '../lib/panorama.js'

const swiper = {
    install(Vue, options) {
        Vue.prototype.$swiper = Swiper;
        Vue.prototype.$swiperModules = {
            Navigation,
            Pagination,
            Scrollbar,
			EffectPanorama
        };
    }
};

Vue.use(swiper);
