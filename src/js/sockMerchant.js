"use strict";

//var sortedArray = ar.sort();

function sockMerchant(n, ar) {
    var sum = 0;
    var sortedArray = ar.sort();

    while (sortedArray.length > 1) {
        if (sortedArray[0] === sortedArray[1]){
            sum += 1;
            sortedArray.shift();
            sortedArray.shift();
        } else {
            sum += 0;
            sortedArray.shift();
        }
    }
    return sum;
}


//removes first element of array (
// .shift()

//correct!!
// while (sortedArray.length > 1) {
//     if (sortedArray[0] === sortedArray[1]){
//         sum += 1;
//         sortedArray.shift();
//         sortedArray.shift();
//     } else {
//         sum += 0;
//         sortedArray.shift();
//     }
// }