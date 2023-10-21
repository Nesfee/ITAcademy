function InsertingDataArray(Array, newData, index) {
    Array.splice(index, 0, ...newData);
    return Array
}

console.log(InsertingDataArray([1, 2, 3, 4, 5], ['a', 'b', 'c'], 3))

