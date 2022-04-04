import Building from './building.js';

class Tower extends Building {
    getFloorHeight() {
        return this.height / this.floors;
    }

    toString() {
        return [
            super.toString(),
            `Elevator: ${this.hasElevator ? "+" : "-"}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`
        ].join('\n');
    }
};
