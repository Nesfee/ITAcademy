function RandomDivide(number, parts) {
    let remainingNumber = number;
    const result = [];

    for (let i = 0; i < parts - 1; i++) { // генерация случайных чисел и результат
    const randomNumber = Math.floor(Math.random() * (remainingNumber - (parts - i - 0))) + 0;
    result.push(randomNumber);
    remainingNumber -= randomNumber;
    }

    result.push(remainingNumber);

    return result;
}

function RandomDivideFractional(number, parts) {
    let remainingNumber = number;
    const result = [];

    for (let i = 0; i < parts - 1; i++) { 
    const randomNumber = Number((Math.random() * (remainingNumber - (parts - i - 0))).toFixed(2));
    result.push(randomNumber);
    remainingNumber -= randomNumber;
    }

    result.push(Number(remainingNumber.toFixed(2)));

    return result;
}
  
console.log(RandomDivide(15, 10))
console.log(RandomDivideFractional(15, 10))
