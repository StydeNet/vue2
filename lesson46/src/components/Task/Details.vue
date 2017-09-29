<template>
	<div v-if="task">
		<h2>{{ task.title }}</h2>

		<p>{{ task.description }}</p>

		<div class="well">
			<button @click="toggleTask" class="btn" :class="task.pending ? 'btn-default' : 'btn-primary'">
				<app-icon img="ok"></app-icon> Completar
			</button>
			<button @click="editTask" class="btn btn-default">
				<app-icon img="edit"></app-icon> Editar
			</button>
			<button @click="deleteTask" class="btn btn-default">
				<app-icon img="trash"></app-icon> Eliminar
			</button>
		</div>
	</div>
</template>

<script>
	import store from 'store';

	export default {
		props: ['id'],
		computed: {
			task() {
				return store.findTask(this.id)
			}
		},
		methods: {
			toggleTask() {
				store.toggleTask(this.task);
			},
			editTask() {
				this.$router.push({
					name: 'tasks.edit',
					params: {id: this.id}
				});
			},
			deleteTask() { 
				store.deleteTask(this.id);

				this.$router.replace({ name: 'tasks' });
			}
		}
	}
</script>









