<script>
import store from 'store'
import Form from './Form.vue'

export default {
	props: ['id'],
	computed: {
		task() {
			return store.findTask(this.id)
		}
	},
	render(createElement) {
		return createElement(Form, {
			props: {
				title: 'Editar tarea',
				action: 'Actualizar tarea',
				task: this.task
			},
			on: {
				save: (draft) => {
					store.updateTask(this.id, draft);

					this.$router.push({
						name: 'tasks.details',
						params: {id: this.id}
					});
				}
			}
		});
	}
}
</script>





