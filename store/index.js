export const state = () => ({
	content: {},
	embedModal:{
		visible: false,
		id: null
	},
	metadata: {
		socialChannels: {
			linkedIn: 'https://www.google.com',
			instagram: 'https://www.google.com',
			twitter: 'https://www.google.com'
		},
		navItems:[
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Products',
				link: '/products'
			},
			{
				name: 'Case Studies & Stories',
				link: '/casestudies'
			},
			{
				name: 'Meet the Team',
				link: '/meettheteam'
			},
			{
				name: 'Events',
				link: '/events'
			},
		],
		address: {
			street: 'Im Blumenkübel 12',
			city: 'Frankfurt am Main',
			country: 'Germany',
			phone: '58158158119',
			phoneNice: '+49 124 124124',
			email: 'hello@we-lovedigi.com'
		}
	}
})

export const mutations = {
    setContent( state, content){
        state.content = {...state.content, ...content}
    },
	showEmbedModal(state, object){
		state.embedModal = object
	}
}

export const actions ={
    async nuxtServerInit({ commit }){

		// Products
		const products = await this.$prismic.api.query(
			this.$prismic.predicates.at('document.type','product')
		)
		commit('setContent', {products: products.results})

		// Case Studies
		const casestudies = await this.$prismic.api.query(
			this.$prismic.predicates.at('document.type','casestudie')
		)
		commit('setContent', {casestudies: casestudies.results})

		// EVENTS
		const events = await this.$prismic.api.query(
			this.$prismic.predicates.at('document.type','event')
		)
		commit('setContent', {events: events.results})

		// Team members
		const founders =  await this.$prismic.api.getSingle('founders')
		commit('setContent', {founders})
		const joiners =  await this.$prismic.api.getSingle('joiners')
		commit('setContent', {joiners})

		// General
		const metadata =  await this.$prismic.api.getSingle('general')
		commit('setContent', {metadata})
		// General
		const herosection =  await this.$prismic.api.getSingle('herosection')
		commit('setContent', {herosection})

		// Imprint
		const imprint =  await this.$prismic.api.getSingle('imprint')
		commit('setContent', {imprint})

		const dataprivacy =  await this.$prismic.api.getSingle('dataprivacy')
		commit('setContent', {dataprivacy})

		const comingsoon =  await this.$prismic.api.getSingle('comingSoon')
		commit('setContent', {comingsoon})
    },
}
