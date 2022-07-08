import MyComponent from '../../../../slices/CaseStudyStats';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CaseStudyStats'
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
      mock: {"variation":"default","name":"Default","slice_type":"case_study_stats","items":[{"number":"implement 24/365 methodologies","description":"envisioneer global ROI"},{"number":"exploit cross-platform interfaces","description":"aggregate out-of-the-box web services"},{"number":"enhance viral e-services","description":"synergize visionary paradigms"},{"number":"facilitate efficient e-services","description":"incubate intuitive e-services"},{"number":"incentivize cross-media paradigms","description":"productize ubiquitous infrastructures"}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
