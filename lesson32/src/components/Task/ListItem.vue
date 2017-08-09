<template>
    <li class="list-group-item task-list-item"
        :class="{editing: editing, completed: !task.pending}">
        <a @click="toggleStatus">
            <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
        </a>

        <template v-if="!editing">
            <span class="description">{{ task.description }}</span>

            <div>
                <a @click="edit">
                    <app-icon img="edit"></app-icon>
                </a>
                <a @click="remove">
                    <app-icon img="trash"></app-icon>
                </a>
            </div>
        </template>

        <template v-else>
            <input type="text" v-model="draft">

            <div>
                <a @click="update">
                    <app-icon img="ok"></app-icon>
                </a>
                <a @click="discard">
                    <app-icon img="remove"></app-icon>
                </a>
            </div>                        
        </template>
    </li>
</template>

<script>
import Icon from 'components/Icon.vue'

export default {
    components: {
        'app-icon': Icon
    },
    data() {
        return {
            editing: false,
            draft: ''
        };
    },
    template: '#task-template',
    props: ['task', 'index'],
    created() {
        EventBus.$on('editing', (index) => this.discard());
    },
    methods: {
        toggleStatus() {
            this.task.pending = !this.task.pending;
        },
       edit() {
            EventBus.$emit('editing', this.index);

            this.draft = this.task.description;

            this.editing = true;
        },
        update() {
            this.task.description = this.draft;

            this.editing = false;
        },
        discard() {
            this.editing = false;
        },
        remove() {
            this.$emit('remove', this.index);
        },
    }
}
</script>

<style lang="scss">
    .task-list-item {
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        &.editing {
            box-shadow: inset 0 0 5px #999;
        }

        input, .description {
            flex: 1;
            padding: 0 5px;
        }

        input {
            border: 0;

            &:focus {
                outline: none;
            }
        }

        &.completed {
            &, a {
                color: #999;
            }

            .description {
                text-decoration: line-through;    
            }
        }
    }
</style>








