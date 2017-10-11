<script>
import store from 'store'
import Form from './Form.vue'

export default {
    render(createElement) {
        return createElement(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task: {
                    title: '',
                    description: ''
                }
            },
            on: {
               save: (draft) => {
                    store.dispatch('createTask', draft).then(newTask => {
                        this.$router.push({
                            name: 'tasks.details',
                            params: {id: newTask.id}
                        })
                    }).catch(error => {
                        alert(error)
                    })

                        this.$router.push({
                            name: 'tasks',
                            //params: {id: newTask.id}
                        })
                }
            }
        });
    }
}
</script>











