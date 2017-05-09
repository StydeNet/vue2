<template>
    <form @submit.prevent="create" class="new-task-form">
        <input v-model="draft" type="text" class="form-control">
        <button class="btn btn-primary">Crear tarea</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            draft: ''
        }
    },
    methods: {
        create() {
            this.$emit('created', {
                description: this.draft,
                pending: true,
                editing: false
            });

            this.draft = '';
        },
    }
}
</script>

<style>
    .new-task-form {
        display: flex;
    }

    .new-task-form input {
        margin-right: 10px;
    }
</style>











