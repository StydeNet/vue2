<template>
    <li @click="select" class="list-group-item task-list-item"
        :class="{active: isActive, completed: !task.pending}">
        <a @click.stop="toggleStatus">
            <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
        </a>

        <span class="description">{{ task.title }}</span>
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
            draft: ''
        };
    },
    props: ['task'],
    computed: {
        isActive() {
            return this.task.id == this.$route.params.id;
        }
    },
    methods: {
        select() {
            this.$router.push(
                this.isActive ? '/tasks' : '/tasks/'+this.task.id
            );
        },
        toggleStatus() {
            this.task.pending = !this.task.pending;
        }
    }
}
</script>

<style lang="scss">
    .list-group-item.task-list-item {
        display: flex;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        .description {
            flex: 1;
            padding: 0 5px;
        }

        &.completed {
            &, a {
                color: #999;
            }

            .description {
                text-decoration: line-through;    
            }
        }

        &.active a {
            color: white;
        }
    }
</style>








