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
                :deleteTodo="deleteTodo"
            />
        </div>
        <Modal
            title="Add todo"
            :isOpen="isOpenModal"
            :onToggle="onToggleModal"
        >
            <pre>
                {{ $v }}
            </pre>
            <form @submit.prevent="onSubmit">
                <label for="#description">Description:</label>
                <input
                    type="text"
                    id="description"
                    v-model="description"
                    @blur="$v.description.$touch()"
                />
                <template v-if="$v.description.$error">
                    <p v-if="!$v.description.required">
                        Required
                    </p>
                    <p v-else-if="!$v.description.minLength">
                        Min length
                    </p>
                    <p v-if="!$v.description.maxLength">
                        Max length
                    </p>
                </template>
                <button :disabled="$v.$invalid" type="submit">
                    Add
                </button>
            </form>
        </Modal>
    </div>
</template>

<script>
import { eventEmitter } from '../main'
import Todo from './Todo.vue'
import Modal from './Modal.vue'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Todos',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    description: 'Do something 1',
                    isCompleted: false
                },
                {
                    id: 2,
                    description: 'Do something 2',
                    isCompleted: true
                },
                {
                    id: 3,
                    description: 'Do something 3',
                    isCompleted: false
                }
            ],
            isOpenModal: false,
            description: ''
        }
    },
    methods: {
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
        onToggleModal() {
            this.isOpenModal = !this.isOpenModal;
        },
        onSubmit() {
            const newTodo = {
                id: Date.now(),
                description: this.description,
                isCompleted: false
            }

            this.todos.push(newTodo);
            this.onToggleModal();
        }
    },
    validations: {
        description: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20)
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
