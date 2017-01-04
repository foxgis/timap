<template>
  <div id="app">
    <Map :access-token="accessToken" :options="options"></Map>
    <Legend class="legend"></Legend>
    <Toolbar class="toolbar"></Toolbar>
    <Sidebar class="sidebar"></Sidebar>
  </div>
</template>


<script>
import style from './style'

export default {
  data () {
    return {
      accessToken: 'pk.eyJ1IjoibWFwZXIiLCJhIjoiY2l4Z3gxaTliMDAxMjJ5dG1iNjAxcmJ3MiJ9.SzNnsW1nwiAraIkhlYlPfA',
      options: {
        style,
        attributionControl: false,
        center: [114.354631, 30.528430],
        zoom: 16.8
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

.sidebar {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
