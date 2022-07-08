import smConfig from "./sm.json"

export default {

  target: 'static',

  head: {
    title: 'We Love Digi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  plugins: [
	{ src: '~plugins/vue-carousel-3d', ssr: false }
  ],

  components: true,

  buildModules: [
	'@nuxtjs/prismic'
  ],

  prismic: {
    endpoint: 'https://welovedigi.cdn.prismic.io/api/v2',
    modern: process.env.NODE_ENV === 'production'
    /* see configuration for more */
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/style-resources',
	["@nuxtjs/prismic", {
		endpoint: smConfig.apiEndpoint|| ""
	}]
  ],

  image: {
    provider: "prismic",
    prismic: {}
  },

  styleResources: {
    // your settings here
    sass: [], // alternative: scss
    stylus: ["./assets/sharedstyles/*.styl"]
  },

  axios: {
    baseURL: '/',
  },

  build: {
	transpile: ["@prismicio/vue"]
  }
}
