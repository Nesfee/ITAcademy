function ArrayClear(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

console.log(ArrayClear([1, 2, 3, 7, 34, -5, 7, 3, 33]))