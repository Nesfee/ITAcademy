function SearchMatches(number1, number2) {
    count1 = 0
    count2 = 0
    let array1 = [...number1.toString()].map(Number);
    let array2 = [...number2.toString()].map(Number);
    array1.forEach(function(item1, index1) {
        array2.forEach(function(item2, index2) {
            if (item1 == item2) {
                count2 ++
            }
            if (item1 == item2 && index1 == index2) {
                count1++
            }
        });
      });
      return [count1, count2].join(' ')
}

console.log(SearchMatches(3487, 3794))

// Через циклы
// function SearchMatches(number1, number2) { 
//     let array1 = [...number1.toString()].map(Number);
//     let array2 = [...number2.toString()].map(Number);
//     count1 = 0
//     count2 = 0
//     for(let i = 0; i < 4; i++) {
//         if (array1[i] == array2[i]) {
//             count1++
//         }
//         for(let n = 0; n < 4; n++) {
//             if (array1[i] == array2[n]) {
//                 count2++
//             }
//         }
//     }
//     return [count1, count2].join(' ')
// }

// console.log(SearchMatches(3487, 3794))
