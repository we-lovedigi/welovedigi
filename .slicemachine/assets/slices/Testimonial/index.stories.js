import MyComponent from '../../../../slices/Testimonial';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Testimonial'
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
      mock: {"variation":"default","name":"Default","slice_type":"testimonial","items":[],"primary":{"quote":"brand world-class paradigms","name":"recontextualize 24/365 e-commerce","jobtitle":"innovate intuitive supply-chains","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
