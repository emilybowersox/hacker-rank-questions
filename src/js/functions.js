"use strict";

// function factorial (aNumber) {
//     var sum = 0;
//     for (var n = 1; n <= aNumber; n++) {
//          return (n * (n-1) += sum;
//     }
// }

// console.log(factorial(4));
// console.log("hello");
//
//
//
// function factorial(aNumber) {
//     var sum = 0;
//     var n = 1
//     do {
//         n * (n-1);
//         n++;
//     } while (n <= aNumber);
//
// }

function getGrade(score) {
    if (25 < score <= 30) {
        return "A";
    } else if (20 < score <= 25) {
        return "B";
    } else if (15 < score <= 20) {
        return "C";
    } else if (10 < score <= 15) {
        return "D";
    } else if (5 < score <= 10) {
        return "E";
    } else {
        return "F";
    }

}

console.log(getGrade(15));
