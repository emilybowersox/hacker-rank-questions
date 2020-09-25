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


//" ... " is the spread operator. "It expands an iterable to its individual elements"
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



//only printing the first line of code- need to print a loop within a loop
function staircase(n) {
    var space = " ";
    var pound = "#";
    for (var i = 1; i <= n; i++) {
        while (i <=n) {
            return space.repeat(n-i) + pound.repeat(i);
        }
    }
}


//note