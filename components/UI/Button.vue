<script setup>
const props = defineProps(['config']);

const defaultConfig = {
    visualType: 'primary',
    type: 'text',
    size: 'sm'
};

const config = {
    ...defaultConfig,
    ...props.config
};
</script>

<template>
    <button class="button" :class="[config.size, config.visualType]" :type="config.type">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    background: none;
    border: none;
    transition: .2s;
    cursor: pointer;

    &.sm {
        padding: 10px 20px;
        font-size: 16px;
    }
    
    &.md {
        padding: 15px 25px;
        font-size: 20px;
    }

    &.xl {
        padding: 20px 30px;
        font-size: 24px;
    }
    
    &.primary {
        background: $colorActive;
        color: $colorText;
        border-radius: 5px;
        transition: .2s;
        cursor: pointer;

        &:hover {
            background: $colorActiveHighlight;
        }
    }

    &.secondary {
        border: 1px solid $colorBorder;
        color: $colorText;
        border-radius: 5px;

        &:hover {
            border-color: $colorActive;
        }
    }
}
</style>
