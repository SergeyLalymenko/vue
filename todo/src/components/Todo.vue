<template>
    <div
        class="todo"
        :class="[todo.isCompleted ? 'completed' : 'uncompleted']"
        @click="toggleTodo(todo.id)"
    >
        {{ todo.description }}
        <p @click.stop="deleteTodo(todo.id)">
            DELETE
        </p>
    </div>
</template>

<script>
    import { eventEmitter } from '../main';

    export default {
        name: 'todo',
        props: {
            todo: Object,
            deleteTodo: Function
        },
        methods: {
            toggleTodo: function(id) {
                eventEmitter.$emit('toggleTodo', id);
            }
        }
    }
</script>

<style scoped>
    .todo {
        padding: 5px;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 500;
        color: black;
        background: black;
        cursor: pointer;
    }

    .todo.completed {
        background: green;
    }

    .todo.uncompleted {
        background: yellow;
    }
</style>
