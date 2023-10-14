function ArraySortMax(arr) {
    return arr.sort((a, b) => a - b)
}

function ArraySortMin(arr) {
    return arr.sort((a, b) => b - a)
}

console.log(ArraySortMax([1, 2, 3, 7, 34, -5]))
console.log(ArraySortMin([1, 2, 3, 7, 34, -5]))