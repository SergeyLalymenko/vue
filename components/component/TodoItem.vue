<script setup>
defineProps(['todo']);
defineEmits(['toggleTodo', 'editTodo', 'deleteTodo']);
</script>

<template>
    <li
        class="todo"
        :class="{ completed: todo.isCompleted }"
        @click="$emit('toggleTodo', todo.id)"
        >
        <p class="todo__text">
            {{ todo.title }}
        </p>
        <UIEdit @click.stop="$emit('editTodo', todo.id)" size="sm" class="todo__edit" />
        <UIClose @click.stop="$emit('deleteTodo', todo.id)" size="sm" />
    </li>
</template>

<style lang="scss" scoped>
.todo {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 1px solid $colorBorder;
    transition: .2s;
    cursor: pointer;

    &.completed {
        border-color: $colorActive;
    }

    &__text {
        margin-right: 40px;
    }

    &__edit {
        margin-left: auto;
        margin-right: 10px;
    }
}
</style>
