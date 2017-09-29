import Vue from 'vue'
import router from 'router'
import EventBus from 'event-bus.js'
import App from './components/App.vue'

window.EventBus = EventBus

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
