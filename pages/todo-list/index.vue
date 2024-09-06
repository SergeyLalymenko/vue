<script setup>
import { ref } from 'vue';
import { BASE_API_URL } from '~/api/api';

const router = useRouter();

const todos = useState('todos', () => []);
const isOpenModal = ref(false);
const inputValue = ref('');

const { data: fetchedTodos } = useFetch(`${BASE_API_URL}todos`, {
    onResponse() {
        todos.value = fetchedTodos;
    }
});

const modalConfig = {
    title: 'Add Todo',
    size: 'xl'
};
const toggleModalButtonConfig = {
    visualType: 'secondary',
    type: 'text',
    size: 'sm'
};
const addTodoButtonConfig = {
    visualType: 'primary',
    type: 'submit',
    size: 'md'
};

async function toggleTodo(id) {
    const selectedTodo = todos.value.find((todo) => todo.id === id);
    const newTodo = {
        ...selectedTodo,
        isCompleted: !selectedTodo.isCompleted
    };

    const returnedTodo = await $fetch(`${BASE_API_URL}todos/${id}`, {
        method: 'PUT',
        body: newTodo
    });
    todos.value = todos.value.map((todo) => todo.id === returnedTodo.id ? returnedTodo : todo);
}

function editTodo(id) {
    router.push(`/todo-list/${id}`);
}

async function deleteTodo(id) {
    const returnedTodo = await $fetch(`${BASE_API_URL}todos/${id}`, {
        method: 'DELETE'
    });
    todos.value = todos.value.filter((todo) => todo.id !== returnedTodo.id);
}

function toggleModal() {
    isOpenModal.value = !isOpenModal.value;
}

async function onSubmit() {
    if(!inputValue.value.trim()) return;

    isOpenModal.value = false;

    const newTodo = {
        title: inputValue.value,
        isCompleted: false
    };
    inputValue.value = '';

    const returnedTodo = await $fetch(`${BASE_API_URL}todos`, {
        method: 'POST',
        body: newTodo
    });
    todos.value.push(returnedTodo);
}

definePageMeta({
    layout: 'default'
});

useHead({
    title: 'Todo List',
    meta: [
        {
            property: 'og:title',
            content: 'Todo List'
        },
        {
            name: 'description',
            content: 'Todo List description'
        },
        {
            property: 'og:description',
            content: 'Todo List description'
        }
    ]
});
</script>

<template>
    <div class="todo-list mt-20">
        <div class="container mx-auto px-4">
            <UIButton
                @click="toggleModal"
                :config="toggleModalButtonConfig"
            >
                Add Todo
            </UIButton>
            <div class="mt-5" v-if="todos?.length">
                <TransitionGroup class="relative" name="todos" tag="ul" appear>
                    <ComponentTodoItem
                        v-for="todo in todos"
                        :key="todo.id"
                        :todo
                        @toggleTodo="toggleTodo"
                        @editTodo="editTodo"
                        @deleteTodo="deleteTodo"
                        class="mt-1 first:mt-0"
                    />
                </TransitionGroup>
            </div>
            <div v-else class="mt-5">
                Loading...
            </div>
            <ComponentModal :config="modalConfig" :isOpen="isOpenModal" @toggleModal="toggleModal">
                <form @submit.prevent="onSubmit">
                    <UIInput v-model="inputValue" />
                    <UIButton class="mt-5 mx-auto" :config="addTodoButtonConfig">
                        Submit
                    </UIButton>
                </form>
            </ComponentModal>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.todo-list {

    .todos-move,
    .todos-enter-active,
    .todos-leave-active {
        transition: all .2s ease;
    }

    .todos-enter-from,
    .todos-leave-to {
        opacity: 0;
    }

    .todos-leave-active {
        position: absolute;
    }
}
</style>
