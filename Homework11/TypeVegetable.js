import Vegetable from "./Vegetable.js"


class LeafyVegetable extends Vegetable {
    constructor(name, calories, season, leafStructure) {
        super(name, calories);
        this.season = season;
        this.leafStructure = leafStructure;
    }
}

class RootVegetable extends Vegetable {
    constructor(name, calories, storageDuration, color) {
        super(name, calories);
        this.storageDuration = storageDuration;
        this.color = color;
    }
}

export {LeafyVegetable, RootVegetable};