import Vue from 'vue'
import EventBus from 'event-bus.js'
import App from './components/App.vue'

window.EventBus = EventBus

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})
