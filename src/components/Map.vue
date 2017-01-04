<template>
  <div></div>
</template>


<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import { mapState } from 'vuex'

let map

export default {
  props: {
    accessToken: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true,
      validator (value) {
        return !!value.style
      }
    }
  },

  computed: {
    ...mapState([
      'year',
      'theme'
    ])
  },

  ready () {
    mapboxgl.accessToken = this.accessToken
    this.options.container = this.$el
    map = new mapboxgl.Map(this.options)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    map.addControl(new mapboxgl.ScaleControl({unit: 'metric'}))
  },

  watch: {
    'year + theme': function () {
      let GB = '110100'
      switch (this.theme) {
        case '湖泊':
          GB = '110100'
          break
        case '居民地':
          GB = '110100'
          break
        case '铁路':
          GB = '110100'
          break
        case '城际公路':
          GB = '110100'
          break
        case '城市道路':
          GB = '110100'
          break
        case '城市管线':
          GB = '110100'
          break
        case '城市绿地':
          GB = '110100'
          break
      }
      map.setFilter('ti-layer', ['all', ['<=', 'VERSION', this.year], ['==', 'GB', GB]])
    }
  }
}
</script>


<style scoped>
div {
  height: 100%;
}
</style>
