import MyComponent from '../../../../slices/TeamMember';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TeamMember'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"team_member","items":[],"primary":{"name":"expedite plug-and-play e-tailers","jobTitle":"morph collaborative technologies","linkedinUrl":"morph revolutionary blockchains","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=500&fit=crop"},"hasVideo":false,"youtubeVideoID":"utilize integrated functionalities"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
