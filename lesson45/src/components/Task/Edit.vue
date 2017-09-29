<script>
import store from 'store'
import Form from './Form.vue'

export default {
	props: ['id'],
	render(createElement) {
		if (!this.task) {
			return createElement('h2', 'Cargando...');
		}

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
	},
	data() {
		return {
			task: null
		}
	},
	created() {
		this.findTask();
	},
	watch: {
		'id': 'findTask'
	},
	methods: {
		findTask() {
			setTimeout(() => {
				this.task = clone(store.findTask(this.id));

				not_found_unless(this.task);
			}, 2000);
		}
	}
}
</script>





