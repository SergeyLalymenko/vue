<script setup>
import { inject } from 'vue';

const {
    chessState
} = inject('chessState');
</script>

<template>
    <div
        class="table w-full pointer-events-none"
        :class="{ active: chessState.isActiveGame }"
    >
        <div
            v-if="Object.keys(chessState).length"
            class="flex flex-wrap w-full max-w-3xl border-solid border border-border mx-auto"
        >
            <template v-for="rowData in chessState.table">
                <ComponentChessCell v-for="cellData in rowData" :cellData :key="`${cellData.coordinates.y}${cellData.coordinates.x}`" />
            </template>
        </div>
        <div v-else>
            Загрузка...
        </div>
    </div>
</template>

<style lang="scss" scoped>
.table {

    &.active {
        pointer-events: all;
    }
}
</style>
