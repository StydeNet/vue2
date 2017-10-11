<template>
	<div class="row">
        <div class="col-xs-6 col-md-6">
            <div class="top">
                <h2>Tareas</h2>
                <router-link :to="{ name: 'tasks.create' }">Nueva tarea</router-link>
            </div>

            <ul class="list-group tasks-list">
                <task-item v-for="(task, index) in tasks" :key="task.id" :task="task"></task-item>
            </ul>

            <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>            
        </div>
        <div class="col-xs-6 col-md-6">
            <router-view></router-view>
        </div>
	</div>
</template>

<script>
import store from 'store'
// mapState
import TaskItem from './ListItem.vue'

export default {
    computed: {
        tasks: () => store.state.tasks
    },
    components: {
        'task-item': TaskItem
    },
    methods: {
        deleteCompleted() {
            store.dispatch('deleteCompletedTasks');
        }
    }
}
</script>

<style lang="scss">
    .top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .tasks-list {
        margin-bottom: 40px;
    }
</style>




