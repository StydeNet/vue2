<template>
    <div>
        <h2>Tareas:</h2>

        <ul class="list-group tasks-list">
            <task-item v-for="(task, index) in tasks" :key="task.id"
                :tasks="tasks" :task="task" :index="index" @remove="deleteTask"></task-item>
        </ul>

    </div>
</template>

<script>
import TaskItem from './ListItem.vue'

export default {
    components: {
        'task-item': TaskItem
    },
    props: ['tasks'],
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
    },
    computed: {
        hasPendingTasks() {
            return this.tasks.some(task => task.pending);
        }
    }
}
</script>

<style lang="scss">
    .tasks-list {
        margin-bottom: 40px;
    }
</style>




