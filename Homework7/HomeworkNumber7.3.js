function getFibonachi(n, m) {
    let fibonacciArr = [];

    let prevNum = 0;
    let nextNum = 1;

    for (let i = 1; i <= n + m; i++) {
    if (i >= n) {
    fibonacciArr.push(prevNum);

    if (fibonacciArr.length === m) {
    break;
    }
    }

    let temp = nextNum;
    nextNum = prevNum + nextNum;
    prevNum = temp;
    }

    return fibonacciArr;
}

console.log(getFibonachi(5, 8))
