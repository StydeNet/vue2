import Vue from 'vue'
import Router from 'vue-router'
import EventBus from 'event-bus.js'
import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import Tasks from './components/Task/Tasks.vue'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/tasks',
			component: Tasks
		}
	]
});

window.EventBus = EventBus

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
