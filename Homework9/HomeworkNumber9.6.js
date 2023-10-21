function SortArray(arr) {
    arr.sort(function (a, b) {
        return a - b;
      })
    return arr
}

console.log(SortArray([3, 4, 1, 2, 7, 30, 50]))