import Salad from "./Salad.js"
import {
    Carrot,
    Onion,
    Parsley,
    Dill,
    Tomato
} from "./AllVegetable.js"


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
salad.addVegetable(parsley);

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