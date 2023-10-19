function RandomDivide(x, y) {
    let n = 0
    let z = x
    let num = []
    for (let i = 0; i < 100000; i++) { // перебор вариантов
        n = Math.floor(Math.random() * (Math.ceil(z + 1) - 0) + 0) // псевдорандомнео число
        z = z - n
        if (z >= 0 && num.length < y - 1) { // условие добавление в массив
            num.push(n)
        }
        else if (num.length == y - 1) { // условие для последнего элемента
            num.push(n)
            if (arraySum(num) == x) { // если элемент подошел завершаем цикл
                break
            }
            else { // если елемент не подошел возвращаем обратно
                num.pop()
                z = z + n
                continue
            }
        }
    } 
    return num
}

function RandomDivideFractional(x, y) { // то же самое только с методом toFixed
    let n = 0
    let z = x
    let num = []
    for (let i = 0; i < 100000; i++) {
        n = Number((Math.random() * (Math.ceil(z + 1) - 0) + 0).toFixed(2))
        z = Number((z - n).toFixed(2))
        if (z >= 0 && num.length < y - 1) {
            num.push(n)
        }
        else if (num.length == y - 1) {
            num.push(n)
            if (arraySum(num) == x) {
                break
            }
            else {
                num.pop()
                z = Number((z + n).toFixed(2))
                continue
            }
        }
    } 
    return num
}

function arraySum(num) { // функция для подсчета значений в массиве
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
        }
    return sum
}

console.log(RandomDivide(15, 3))
console.log(RandomDivideFractional(15, 3))
