import Vegetable from "./Vegetable.js"
import {LeafyVegetable, RootVegetable} from "./TypeVegetable.js"


class Carrot extends RootVegetable {
    constructor(calories, storageDuration, color) {
        super("Морковь", calories, storageDuration, color);
    }
}

class Onion extends RootVegetable {
    constructor(calories, storageDuration, color) {
        super("Лук", calories, storageDuration, color);
    }
}

class Parsley extends LeafyVegetable {
    constructor(calories, season, leafStructure) {
        super("Петрушка", calories, season, leafStructure);
    }
}

class Dill extends LeafyVegetable {
    constructor(calories, season, leafStructure) {
        super("Укроп", calories, season, leafStructure);
    }
}
  
class Tomato extends Vegetable {
    constructor(calories, type) {
        super("Помидор", calories);
        this.type = type
    }
}

export {
    Carrot,
    Onion,
    Parsley,
    Dill,
    Tomato
}