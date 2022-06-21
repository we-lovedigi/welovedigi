import MyComponent from '../../../../slices/ConnectedProduct';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ConnectedProduct'
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
      mock: {"variation":"default","name":"Default","slice_type":"connected_product","items":[],"primary":{"connectedProduct":{"link_type":"Web","url":"http://google.com"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
