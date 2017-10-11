<script>
import store from 'store'
import Form from './Form.vue'

export default {
    render(createElement) {
        return createElement(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task: {}
            },
            on: {
               save: (draft) => {
                    store.dispatch('createTask', draft);

                    this.$router.push({
                        name: 'tasks',
                    });
                }
            }
        });
    }
}
</script>











