<template>
  <div id="app">
    <Map :access-token="accessToken" :options="options"></Map>
    <Legend class="legend"></Legend>
    <Toolbar class="toolbar"></Toolbar>
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
}

.toolbar {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
}
</style>
