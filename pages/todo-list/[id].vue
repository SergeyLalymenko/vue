<script setup>
import { BASE_API_URL } from '~/api/api';

const { params } = useRoute();

const todo = useState(`todo/${params.id}`, () => ({}));

const { data: fetchedTodo } = await useFetch(`${BASE_API_URL}todos/${params.id}`);
todo.value = fetchedTodo.value;

async function updateTodo() {
    $fetch(`${BASE_API_URL}todos/${params.id}`, {
        method: 'PUT',
        body: todo.value
    });
}
</script>

<template>
    <div class="todo-edit">
        <div class="todo-edit__wrapper wrapper">
            <UIInput v-model="todo.title" />
            <UIButton class="todo-edit__save" @click="updateTodo">
                Save
            </UIButton>
        </div>
    </div>
</template>

<style lang="scss">
.todo-edit {
    margin-top: 60px;

    &__wrapper {
        flex-direction: column;
        align-items: flex-start;
    }

    &__save {
        margin-top: 20px;
    }
}
</style>
