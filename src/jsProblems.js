"use strict";

//0 data types: use Number() to change string versions of numbers to numbers
//(otherwise will concatenate)
const addIntegers = firstInteger + Number(secondInteger);
console.log(addIntegers);
console.log(firstDecimal + Number(secondDecimal));
console.log(firstString + secondString);

//2 loops
//this one is correct
function vowelsAndConsonants(aString) {
    for (var i = 0; i < aString.length; i++) {
        if (aString[i] == "a" || aString[i] == "e" || aString[i] == "i" || aString[i] == "o" || aString[i] == "u")
            console.log(aString[i]);
    }
    for (var i = 0; i < aString.length; i++){
        if (aString[i] != "a" && aString[i] != "e" && aString[i] != "i" && aString[i] != "o" && aString[i] != "u"){
            console.log(aString[i]);}
    }

}
// function vowelsAndConsonants(s) {
//     for (var i = 0; i < s.length; i++) {
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
//             console.log(s[i]);
//     }
//
//             for (var i = 0; i < s.length; i++){
//                 if (i != "a" || i != "e" || i != "i" || i != "o" || i != "u")
//                     console.log(s[i]);
//     }
// }
//
// function vowelsAndConsonants(s) {
//     var newArray = new Array;
//     for (var i = 0; i < s.length; i++){
//         if (i = "a") {
//             newArray.push(i);
//         } else if (i = "e") {
//             newArray.push(i);
//         } else if (i = i) {
//             newArray.push(i);
//         }else if (i = o) {
//             newArray.push(i);
//         } else if (i = u) {
//             newArray.push(i);
//         } else {
//             newArray.push(i);
//         }
//
//     }
//     return newArray;
//     console.log(newArray);
//     console.log(newArray[i]);
//     console.log(s[i]);
// }
//
// function vowelsAndConsonants(s) {
//     var newString = "";
//     for (var i = 0; i < s.length; i++){
//
//         if (i = "a") {
//             newString += i;
//         } else if (i = "e") {
//             newString += i;
//         } else if (i = i) {
//             newString += i;
//         }else if (i = o) {
//             newString += i;
//         } else if (i = u) {
//             newString += i;
//         } else {
//             newString += i;
//         }
//         return newString;
//     } console.log(newString);
// }
