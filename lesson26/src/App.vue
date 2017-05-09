<template>
    <div id="app" class="container">
        <h2>Tareas</h2>

        <app-task-list :tasks="tasks"></app-task-list>

        <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>

        <h2>Nueva tarea:</h2>

        <app-task-form @created="createTask"></app-task-form>

        <footer class="footer">
            <p>&copy; 2017 Styde.net.</p>
        </footer>
    </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'

export default {
    components: {
        'app-task-list': TaskList,
        'app-task-form': TaskForm
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

<style>
    body {
        margin: 10px;
    }

    .container {
        max-width: 650px;
    }

    .container h2 {
        margin-bottom: 20px;
    }

    .container footer {
        margin: 40px 0;
        padding-top: 20px;
        border-top: 1px solid #ccc;
        color: #999;
    }
</style>











