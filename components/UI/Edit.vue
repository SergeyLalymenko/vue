<script setup>
import EditIcon from '~/assets/icons/EditIcon.vue';

const props = defineProps(['size']);
const size = props.size || 'md';
</script>

<template>
    <div class="edit" :class="[size]">
        <EditIcon class="edit__icon" />
    </div>
</template>

<style lang="scss" scoped>
.edit {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid $colorBorder;
    padding: 5px;
    transition: .2s;
    cursor: pointer;

    &.sm {
        padding: 3px;
        width: 20px;
        min-width: 20px;
        height: 20px;
    }

    &.md {
        width: 30px;
        min-width: 30px;
        height: 30px;
    }

    &.xl {
        width: 40px;
        min-width: 40px;
        height: 40px;
    }

    &:hover {
        border-color: $colorActive;

        .edit__icon {
            color: $colorActive;
        }
    }

    &__icon {
        color: $colorBorder;
        width: 100%;
        height: auto;
    }
}
</style>
