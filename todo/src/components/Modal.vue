<template>
    <div class="modal" :class="{ open: isOpen }" @click="onToggle">
        <div class="modal__overlay"></div>
        <div class="modal__content" @click.stop>
            <div class="modal__head">
                {{ title || defaultTitle }}
            </div>
            <div class="modal__body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        data() {
            return {
                defaultTitle: 'Default title'
            }
        },
        props: {
            title: String,
            isOpen: Boolean,
            onToggle: Function
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        pointer-events: none;
        visibility: hidden;
    }


    .modal.open {
        pointer-events: all;
        visibility: visible;
    }

    .modal.open .modal__content {
        transform: translate(-50%, -50%) scale(1);
    }

    .modal__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, .3);
    }

    .modal__content {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 600px;
        max-width: calc(100% - 30px);
        border: 1px solid black;
        border-radius: 5px;
        background: white;
    }

    .modal__head {
        padding: 20px;
        border-bottom: 1px solid black;
    }

    .modal__body {
        padding: 20px;
    }
</style>
