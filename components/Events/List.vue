<template lang="pug">
.eventslist
	section
		ul.eventslist__tabs
			li Filter events by:
			li(@click="showAll" :class="{'is-active' : activeTab == 'all'}") all Events
			li(@click="showUpcoming" :class="{'is-active' : activeTab == 'upcoming'}") Upcoming Events
			li(@click="showPast" :class="{'is-active' : activeTab == 'past'}") Past Events
		ul.eventslist__list
			li(v-for="event in events")
				EventsCard(:doc="event")
</template>

<script>
import dayjs from 'dayjs'
export default {
	data(){
		return{
			activeTab: 'all',
			events:{}
		}
	},
	mounted(){
		this.events = this.$store.state.content.events
	},
	methods:{
		showUpcoming: function(){
			this.events = this.$store.state.content.events.filter(e => {
			 	return dayjs(e.data.date).diff(dayjs()) >= 0
			})
			this.activeTab = 'upcoming'
		},
		showPast: function(){
			this.events = this.$store.state.content.events.filter(e => {
			 	return dayjs(e.data.date).diff(dayjs()) <= 0
			})
			this.activeTab = 'past'
		},
		showAll: function(){
			this.events = this.$store.state.content.events
			this.activeTab = 'all'
		}
	}
}
</script>

<style lang="stylus">
.eventslist
	position relative
	&::after
		content ''
		position absolute
		background $bg
		width 100%
		top 16rem
		bottom 0
		left 0
		z-index -1
	section
		section()
	&__list
		display grid
		grid-template-columns repeat(6,1fr)
		gap 4rem
		align-items stretch
		+mobile()
			gtc(1fr)
		li
			grid-column span 2
			border-bottom 1px solid $black
			&:nth-child(1), &:nth-child(2)
				grid-column span 3
	&__tabs
		margin-bottom 4.2rem
		margin-top -2.4rem
		display flex
		align-items center
		justify-content flex-start
		+mobile()
			flex-direction column
			align-items flex-start
			margin-top -6.2rem
		li
			font-size 1.6rem
			bold()
			color $black
			cursor pointer
			position relative
			+mobile()
				font-size 1.3rem
				line-height 2
			&::after
				content ''
				position absolute
				left -3.2rem
				width 2.6rem
				height 1.3rem
				top .7rem
				background url(assets/arrow-right.svg)
				background-size contain
				background-repeat no-repeat
				opacity 0
			+li
				margin-left 7.2rem
				+mobile()
					margin-left 3.2rem
			&:first-child
				color $text-light
				cursor default
			&.is-active
				&::after
					opacity 1
</style>
