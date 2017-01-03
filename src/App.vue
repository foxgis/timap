<template>
  <div id="app">
    <Legend></Legend>
    <Map :access-token="accessToken" :options="options"></Map>
  </div>
</template>


<script>
export default {
  data () {
    return {
      accessToken: 'pk.eyJ1IjoibWFwZXIiLCJhIjoiY2l4Z3gxaTliMDAxMjJ5dG1iNjAxcmJ3MiJ9.SzNnsW1nwiAraIkhlYlPfA',
      options: {
        style: 'mapbox://styles/mapbox/streets-v9',
        attributionControl: false,
        center: [-74.50, 40],
        zoom: 9
      }
    }
  }
}
</script>


<style>
html, body {
  height: 100%;
}

/** {
  outline: red solid 1px;
}*/
</style>

<style scoped>
#app {
  height: 100%;
}

.legend {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
}
</style>
