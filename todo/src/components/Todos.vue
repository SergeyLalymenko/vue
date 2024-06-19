<template>
    <div class="todos">
        <button type="button" @click="onToggleModal">
            ADD TODO
        </button>
        <div class="todos__list">
            <Todo
                v-for="(todo, index) in todos"
                :key="index"
                :todo="todo"
            />
        </div>
        <Modal title="Add todo" :isOpen="isOpenModal" :onToggle="onToggleModal">
            <form>
                <label for="#title">Title:</label>
                <input
                    type="text"
                    id="title"
                    v-model="title"
                    @blur="$v.title.$touch()"
                />
                <p v-if="$v.title.$error">
                    Error text
                </p>
                <pre>
                    {{ $v }}
                </pre>
            </form>
        </Modal>
    </div>
</template>

<script>
import { eventEmitter } from '../main'
import Todo from './Todo.vue'
import Modal from './Modal.vue'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Todos',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Do something 1',
                    isCompleted: false
                },
                {
                    id: 2,
                    text: 'Do something 2',
                    isCompleted: true
                },
                {
                    id: 3,
                    text: 'Do something 3',
                    isCompleted: false
                }
            ],
            isOpenModal: false,
            title: ''
        }
    },
    methods: {
        onToggleModal() {
            this.isOpenModal = !this.isOpenModal;
        }
    },
    validations: {
        title: {
            required
        }
    },
    components: {
        Todo,
        Modal
    },
    created() {
        eventEmitter.$on('toggleTodo', (id) => {
            const selectedTodo = this.todos.find((todo) => todo.id === id);
            selectedTodo.isCompleted = !selectedTodo.isCompleted;
        });
    }
}
</script>

<style scoped>
    .todos__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border: 1px solid black;
    }
</style>
