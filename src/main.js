import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MainNav from './components/MainNav.vue'

Vue.config.productionTip = false

import "./styles.css";

new Vue({
  el: "#app",
  components: {
    HelloWorld,
    MainNav
  }
})
