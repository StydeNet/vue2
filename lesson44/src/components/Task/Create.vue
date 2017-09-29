<script>
import store from 'store'
import Form from './Form.vue'

export default {
    render(createElement) {
        let task = {
            id: '',
            title: '',
            description: '',
            pending: true
        };

        return createElement(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task
            },
            on: {
               save: (newTask) => {
                    store.createTask(newTask);

                    this.$router.push({
                        name: 'tasks.details',
                        params: {id: newTask.id}
                    });
                }
            }
        });
    }
}
</script>











