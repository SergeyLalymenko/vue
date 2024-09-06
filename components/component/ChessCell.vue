<script setup>
import { inject, onMounted, onUpdated } from 'vue';

const { cellData } = defineProps(['cellData']);
const {
    chessState,
    moveSelectedFigure,
    selectCell,
    unselectCell
} = inject('chessState');

function onCellClick() {
    if (!isCurrentTeam() && !cellData.active) return;
    
    if (cellData.selected) {
        unselectCell(cellData.coordinates);
        return;
    }

    if (cellData.active) {
        moveSelectedFigure(cellData.coordinates);
        return;
    }

    if (!cellData.selected) {
        const availableMoves = cellData.figure.getAvailableMoves(chessState.value.table);
        selectCell(cellData.coordinates, availableMoves);
        return;
    }
}

function onEmptyCellClick() {
    if (cellData.active) {
        moveSelectedFigure(cellData.coordinates);
        return;
    }
}

function isCurrentTeam() {
    return chessState.value.currentTeam === cellData.figure.team;
}

function setFigureCoordinates() {
    cellData.figure?.setCoordinates(cellData.coordinates);
}

onMounted(() => {
    setFigureCoordinates();
});

onUpdated(() => {
    setFigureCoordinates();
});
</script>

<template>
    <div
        v-if="cellData.figure"
        class="cell"
        :class="{
            white: (cellData.coordinates.x + cellData.coordinates.y) % 2 === 0,
            active: cellData.active,
            selected: cellData.selected,
            currentTeam: chessState.currentTeam === cellData.figure.team
        }"
        @click="onCellClick"
    >
        <img class="w-1/2" :src="cellData.figure.icon" />
    </div>
    <div
        v-else
        class="cell empty"
        :class="{
            white: (cellData.coordinates.x + cellData.coordinates.y) % 2 === 0,
            active: cellData.active
        }"
        @click="onEmptyCellClick"
    ></div>
</template>

<style lang="scss" scoped>
.cell {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    width: calc(100% / 8);
    background: $colorChessCellBlack;
    border: 5px solid transparent;

    &.white {
        background: $colorChessCellWhite;
    }

    &.active {
        border-color: $colorActive;
        cursor: pointer;

        &:not(.currentTeam):not(.empty) {
            border-color: $colorDanger;
        }
    }

    &.selected {
        border-color: $colorActive;
    }

    &.currentTeam {
        cursor: pointer;
    }
}
</style>
