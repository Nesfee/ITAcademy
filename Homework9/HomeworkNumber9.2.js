function DivisionByTwo(n) {
    let num = 0;
    while (n >= 50) {
        n = n / 2;
        num++
    }
    console.log("Получившееся число: " + n);
    console.log("Количество итераций: " + num);
    return num
}

(DivisionByTwo(1234))