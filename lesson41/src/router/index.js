import Vue from 'vue'
import Router from 'vue-router'
import TaskList from 'components/Task/List.vue'
import Dashboard from 'components/Dashboard.vue'
import TaskCreate from 'components/Task/Create.vue'
import TaskDetails from 'components/Task/Details.vue'
import ErrorNotFound from 'components/errors/NotFound.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/to-dos',
			component: TaskList,
			children: [
				{
					path: '',
					name: 'tasks',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: ':id',
					name: 'tasks.details',
					component: TaskDetails,
					props: true
				},
				{
					path: 'create',
					name: 'tasks.create',
					component: TaskCreate
				}
			]
		},
		{
			path: '/404',
			component: ErrorNotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
});

export default router






