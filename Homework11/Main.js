import Salad from "./Salad.js"

class Vegetable {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
    }
}

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

const salad = new Salad();

const tomato = new Tomato(20, "Полоцкие");
const carrot = new Carrot(10, "10 дней", "Оранжевый");
const dill = new Dill(3, "Лето", "Тонкие");
const onion = new Onion(8, "3 дня", "Белый");
const parsley = new Parsley(4, "Осень", "Круглые");

salad.addVegetable(tomato);
salad.addVegetable(carrot);
salad.addVegetable(dill);
salad.addVegetable(onion);

salad.removeVegetable(onion)

const totalCalories = salad.calculateCalories();
console.log("Калорийность салата:", totalCalories);
  
salad.sortVegetablesBy("calories");
console.log("Отсортированные овощи:", salad.vegetables);

const filteredVegetables = salad.filterVegetablesByRange(10, 25);
console.log("Овощи в заданном диапазоне:", filteredVegetables);

let vegetable = salad.nextVegetable();
while (vegetable) {
  console.log(vegetable);
  vegetable = salad.nextVegetable();
}