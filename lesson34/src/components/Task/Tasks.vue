<template>
	<div>
	    <task-list :tasks="tasks"></task-list>

	    <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>

	    <task-form @created="createTask"></task-form>
	</div>
</template>

<script>
import TaskList from './List.vue'	
import TaskForm from './CreateForm.vue'

export default {
    components: {
        'task-list': TaskList,
        'task-form': TaskForm
    },
    methods: {
        createTask(task) {
            this.tasks.push(task);
        },
        alertTask(task) {
            alert(task.description)
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending);
        }
    },
    created() {
        this.tasks.forEach((task, index) => {
            this.$set(task, 'id', index + 1)
        });
    },
    data() { 
        return {
            new_task: '',
            tasks: [
                {
                    description: 'Aprender Vue.js',
                    pending: true,
                },
                {
                    description: 'Suscribirse a Styde.net',
                    pending: true,
                },
                {
                    description: 'Grabar lección de Vue',
                    pending: false,
                }
            ]
        }
    }
}
</script>