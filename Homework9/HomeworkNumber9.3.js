function Average(arr) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= Number(arr[i]);
    }
    result = sum / arr.length;
    return result
}

console.log(Average([12, 15, 20, 25, 59, 79]))