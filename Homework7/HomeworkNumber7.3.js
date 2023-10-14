function getFibonachi(number) {
    return number <= 1 ? number: getFibonachi(number - 1) + getFibonachi(number - 2);
}

console.log(getFibonachi(7))