import Figure from '@/figures/Figure.js';
import pawnBlack from '~/assets/icons/pawn-black.png';
import pawnWhite from '~/assets/icons/pawn-white.png';

class Pawn extends Figure {
    constructor(team, initialCoordinates) {
        super('pawn', initialCoordinates);
        
        this.team = team;
        this.isFirstStep = true;
        this.icon = this.getIcon();
    }

    setIsFirstStep(isFirstStep) {
        this.isFirstStep = isFirstStep;
    }

    getIcon() {
        return this.team === 'white' ? pawnWhite : pawnBlack;
    }

    getAvailableMoves(table) {
        const stepDirection = this.team === 'white' ? -1 : 1;
        const maxMoveLength = this.isFirstStep ? 2 : 1;
        const moveDirections = [
            { x: 0, y: stepDirection }
        ];
        const killDirections = [
            { x: -1, y: stepDirection },
            { x: 1, y: stepDirection }
        ];
        const availableMoves = [
            ...this.getMovesByDirections(table, moveDirections, maxMoveLength, false),
            ...this.getMovesByDirections(table, killDirections, 1, true, true)
        ];

        return availableMoves;
    }
};

export default Pawn;
