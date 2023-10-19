function cubes() {
    let sum1 = 0
    let sum2 = 0
    let x = 0
    let result = ""
    for (let i = 1; i < 7; i++) {  // перебор игроков
        x = Math.floor(Math.random() * (7 - 1) + 1) // псевдорандомное число от 1 до 6
        if (i % 2 == 0) { // разделение на сумму первого и второго игрока
            sum2 += x
        }
        else {
            sum1 += x
        }
    }
    if (sum1 > sum2) { // условия победы
        result = "First player wins"
    }
    else if (sum2 > sum1) {
        result = "Second player wins"
    }
    else {
        result = "Draw!"
    } 
    return result
}

console.log(cubes())
