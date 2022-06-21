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
      mock: {"variation":"default","name":"Default","slice_type":"team_member","items":[],"primary":{"name":"grow granular e-tailers","jobTitle":"incentivize robust markets","linkedinUrl":"orchestrate out-of-the-box e-commerce","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=500&fit=crop"},"hasVideo":true,"youtubeVideoID":"facilitate strategic infomediaries","hasCV":true,"detailedCV":[{"type":"paragraph","text":"Tempor et anim ullamco occaecat cupidatat aliquip nulla tempor labore sit Lorem proident cupidatat mollit anim. Amet id nostrud tempor ut reprehenderit non magna anim adipisicing mollit reprehenderit nulla commodo.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
