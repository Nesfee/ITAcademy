function countMatches(number1, number2) {
    let number1String = String(number1);
    let number2String = String(number2);
    let matchPosition = 0;
    let matchValue = 0;
  
    for (let i = 0; i < 4; i++) {
      if (number1String[i] === number2String[i]) {
        matchPosition++;
      } else if (number2String.includes(number1String[i])) {
        matchValue++;
      }
    }
  
    console.log(matchPosition, matchValue);
  }
  
  countMatches(3487, 3794);

  
  // function SearchMatches(number1, number2) {
//     count1 = 0
//     count2 = 0
//     let array1 = [...number1.toString()].map(Number);
//     let array2 = [...number2.toString()].map(Number);
//     array1.forEach(function(item1, index1) {
//         array2.forEach(function(item2, index2) {
//             if (item1 == item2) {
//                 count2 ++
//             }
//             if (item1 == item2 && index1 == index2) {
//                 count1++
//             }
//         });
//       });
//       return [count1, count2].join(' ')
// }

// console.log(SearchMatches(3487, 3794))
