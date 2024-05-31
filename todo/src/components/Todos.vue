<template>
    <div class="todos">
        <Todo
            v-for="(todo) in todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import { eventEmitter } from '../main'
import Todo from './Todo.vue'

export default {
    name: 'Todos',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    action: 'Do something',
                    isCompleted: false
                },
                {
                    id: 2,
                    action: 'Do something else',
                    isCompleted: true
                },
                {
                    id: 3,
                    action: 'Do something else 2',
                    isCompleted: false
                }
            ]
        }
    },
    components: {
        Todo
    },
    created() {
        eventEmitter.$on('hahaEvent', (id) => {
            const selectedTodo = this.todos.find((todo) => todo.id === id);
            selectedTodo.isCompleted = !selectedTodo.isCompleted;
        });
    }
}
</script>

<style scoped>
    .todos {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border: 1px solid black;
    }
</style>
