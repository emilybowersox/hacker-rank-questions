// 43 Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(x) {
    return x === "a" || x === "e" || x === "i" || x === "o" || x == "u" || x === "A" || x === "E" || x === "I" || x === "O" || x === "U";
}

// 44 Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
var vowels = ["a", "e", "i", "o", "u"];

function hasVowels (aString){
    for (var i = 0; i <vowels.length; i++){
        if (aString.includes(vowels[i])){
            return true;
        }
    }
    return false;
}

// 45 Write a function definition named countVowels that takes in value and returns the count of the number of vowels in a sequence.
//**** wrong
// function countVowels (aString){
//     var vowels = ["a", "e", "i", "o", "u"];
//     for (var i = 0; i <vowels.length; i++){
//         if (aString.includes(vowels[i])){
//             return
//         }
//     }
//     return false;
// }

//**********
// 46 Write a function definition named removeVowels that takes in string and returns the string without any vowels
//"Uncaught TypeError: finalString.push is not a function"
// function removeVowels(myString) {
// var stringArray = myString.split("");
// var finalString = "";
//
// for (var i = 0; i < stringArray.length; i++) {
//     if (hasVowels(stringArray[i]) === true) {
//         finalString.push(stringArray[i]);
//     } else {
//         continue;
//     }
// }
//     return finalString;
// }


// 47 Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel(myString) {

    if ((myString[0] === "a") || (myString[0] === "e") || (myString[0] === "i")|| (myString[0] === "o") || (myString[0] === "u")) {
        return true;
    } else {
        return "sorry, your string does not start with a vowel";
    }

}

// 48  Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel

function endsWithVowel(theString) {
    var lastLetterIndex = theString.length - 1;
    var lastLetter = theString[lastLetterIndex];

    return lastLetter === "a" || lastLetter === "e" || lastLetter === "i" || lastLetter === "o" || lastLetter === "u";

}
// 49  Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

function startsWithAndEndsWithVowel(theString) {
    // var firstLetter = theString[0];
    // var lastLetter = theString[theString.length - 1];

    if ((startsWithVowel(theString) === true) && (endsWithVowel(theString) === true)) {
        return true;
    } else {
        return "sorry, your string does not both  begin and end with a vowel!";
    }

}