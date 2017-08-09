import Vue from 'vue'
import Router from 'vue-router'
import Tasks from 'components/Task/Tasks.vue'
import Dashboard from 'components/Dashboard.vue'

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

export default router