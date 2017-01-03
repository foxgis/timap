<template>
  <div></div>
</template>


<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

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

  ready () {
    mapboxgl.accessToken = this.accessToken
    this.options.container = this.$el
    map = new mapboxgl.Map(this.options)
    map.addControl(new mapboxgl.NavigationControl())
  }
}
</script>


<style scoped>
div {
  height: 100%;
}
</style>
