import smConfig from "./sm.json";
import prismic from "@nuxtjs/prismic";

export default {
	target: "static",

	head: {
		title: "We Love Digi",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"The flexible event solution. Create outstanding event landing pages with ease.",
			},
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
		script: [
			{
				//   src: 'panorama.js',
			},
			{
				hid: "uxcam-inline-loader",
				innerHTML: `(function(appKey,opts){
        window.uxc={__t:[],__ak:appKey,__o:opts,
          event:function(n,p){this.__t.push(['event',n,p])},
          setUserIdentity:function(i){this.__t.push(['setUserIdentity',i])},
          setUserProperty:function(k,v){this.__t.push(['setUserProperty',k,v])},
          setUserProperties:function(p){this.__t.push(['setUserProperties',p])}
        };
        var head=document.getElementsByTagName('head')[0];
        var script=document.createElement('script');
        script.type='text/javascript';
        script.src='https://websdk-recording.uxcam.com/index.js';
        script.async=true;
        script.defer=true;
        script.id='uxcam-web-sdk';
        script.crossOrigin='anonymous';
        head.appendChild(script);
      })('u4fo96pwp0xa5zy-eu',{});`,
				type: "text/javascript",
				defer: true,
			},
		],
		__dangerouslyDisableSanitizersByTagID: {
			"nevronix-init": ["innerHTML"],
		},
	},

	plugins: [
		{ src: "~plugins/vue-carousel-3d", ssr: false },
		{ src: "~/plugins/swiper.client.js", mode: "client" },
		{ src: "~/plugins/nevronix-ai.client.js", mode: "client" },
	],

	components: true,

	buildModules: ["@nuxtjs/prismic"],

	prismic: {
		endpoint: "https://welovedigi.cdn.prismic.io/api/v2",
		modern: process.env.NODE_ENV === "production",
		/* see configuration for more */
	},

	modules: [
		"@nuxtjs/axios",
		"@nuxt/image",
		"@nuxtjs/style-resources",
		[
			"@nuxtjs/prismic",
			{
				endpoint: smConfig.apiEndpoint || "",
			},
		],
		"@nuxtjs/google-gtag",
	],

	"google-gtag": {
		id: "G-41EENVRKGQ",
		config: {
			anonymize_ip: true, // anonymize IP
			//   send_page_view: false, // might be necessary to avoid duplicated page track on page reload
			//   linker: {
			//     domains: ['domain.com','domain.org']
			//   }
		},
		debug: true, // enable to track in dev mode
		// disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
		disableAutoPageTrack: true,
	},

	image: {
		provider: "prismic",
		prismic: {},
	},

	styleResources: {
		// your settings here
		sass: [], // alternative: scss
		stylus: ["./assets/sharedstyles/*.styl"],
	},

	axios: {
		baseURL: "/",
	},

	build: {
		transpile: ["@prismicio/vue", "swiper/vue"],
	},
};
