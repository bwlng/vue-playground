import Vue from 'vue'
import AccordionItem from './components/AccordionItem.vue'
import MainNav from './components/MainNav.vue'

Vue.config.productionTip = false

import "./styles.css";

new Vue({
  el: "#app",
  components: {
    AccordionItem,
    MainNav,
  }
})
