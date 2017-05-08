var EventBus = new Vue;

Vue.component('app-icon', {
    template: '<span :class="cssClasses" aria-hidden="true"></span>',
    props: ['img'],
    computed: {
        cssClasses: function () {
            return 'glyphicon glyphicon-'+this.img;
        }
    }
});

Vue.component('app-task', {
    data: function () {
        return {
            editing: false,
            draft: ''
        };
    },
    template: '#task-template',
    props: ['task', 'index'],
    created: function () {
        EventBus.$on('editing', function (index) {
            if (this.index != index) {
                console.log('Discarding: '+this.index);

                this.discard();
            }
        }.bind(this));
    },
    methods: {
        toggleStatus: function () {
            this.task.pending = !this.task.pending;
        },
       edit: function () {
            console.log('Editing ' + this.index);

            EventBus.$emit('editing', this.index);

            this.draft = this.task.description;

            this.editing = true;
        },
        update: function () {
            this.task.description = this.draft;

            this.editing = false;
        },
        discard: function () {
            this.editing = false;
        },
        remove: function () {
            this.$emit('remove', this.index);
        },
    }
});

var vm = new Vue({
    el: '#app',
    methods: {
        createTask: function () {
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        },
        deleteCompleted: function () {
            this.tasks = this.tasks.filter(function (task) {
                return task.pending;
            });
        }
    },
    /*
    created: function () {
        this.tasks.forEach(function (task) {
            this.$set(task, 'editing', false);
        }.bind(this));
    },
    */
    data: {
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
});