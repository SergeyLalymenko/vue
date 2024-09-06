<script setup>
defineProps(['todo']);
defineEmits(['toggleTodo', 'editTodo', 'deleteTodo']);
</script>

<template>
    <li
        class="todo flex items-center w-full p-2 border-solid border border-border transition-colors duration-200 cursor-pointer"
        :class="{ completed: todo.isCompleted }"
        @click="$emit('toggleTodo', todo.id)"
        >
        <p class="mr-10">
            {{ todo.title }}
        </p>
        <UIEdit
            @click.stop="$emit('editTodo', todo.id)"
            size="sm"
            class="ml-auto mr-2"
        />
        <UIClose
            @click.stop="$emit('deleteTodo', todo.id)"
            size="sm"
        />
    </li>
</template>

<style lang="scss" scoped>
.todo {

    &.completed {
        border-color: $colorActive;
    }
}
</style>
