import 'iview/dist/styles/iview.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Vue from 'vue'
import iview from 'iview'
import App from './App'
import Map from './components/Map'
import Legend from './components/Legend'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar'

Vue.use(iview)
Vue.component('Map', Map)
Vue.component('Legend', Legend)
Vue.component('Toolbar', Toolbar)
Vue.component('Sidebar', Sidebar)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
