export default class Salad {
    constructor() {
        this.vegetables = [];
    }

    addVegetable(vegetable) {
        this.vegetables.push(vegetable);
    }

    removeVegetable(vegetable) {
        const index = this.vegetables.indexOf(vegetable);
        if (index !== -1) {
        this.vegetables.splice(index, 1);
        }
    }

    calculateCalories() {
        let totalCalories = 0;
        for (let i = 0; i < this.vegetables.length; i++) {
            totalCalories += this.vegetables[i].calories;
        }
        return totalCalories;
    }

    sortVegetablesBy(parameter) {
        this.vegetables.sort((a, b) => a[parameter] - b[parameter]);
    }

    filterVegetablesByRange(startRange, endRange) {
        return this.vegetables.filter(vegetable => vegetable.calories >= startRange && vegetable.calories <= endRange);
    }

    nextVegetable() {
        if (this.currentIndex < this.vegetables.length) {
            const next = this.vegetables[this.currentIndex];
            this.currentIndex++;
            return next;
          } else {
            return undefined;
          }
    }
}
