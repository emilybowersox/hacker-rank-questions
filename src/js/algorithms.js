"use strict";

//this function doesn't work for test cases where there 99,999 "1000"s and 1 "999"
// function birthdayCakeCandles(candles) {
//     var sum = 1;
//     var myString = candles.sort().reverse();
//     var newArray = Array.prototype.map.call(myString, eachLetter => eachLetter);
//     for (var i = 0; i < candles.length; i++) {
//         if (newArray[i] === newArray[i+1]) {
//             sum += 1;
//         } else {
//             break;
//         }
//     }
//     return sum;
// }

function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    var count = 0;
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++;
        }
    }
    return count;
}