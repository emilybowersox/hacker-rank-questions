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

// 45 Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
var vowels = ["a", "e", "i", "o", "u"];

function countVowels (aString){
    for (var i = 0; i <vowels.length; i++){
        if (aString.includes(vowels[i])){
            return
        }
    }
    return false;
}


// 46 Write a function definition named removeVowels that takes in string and returns the string without any vowels

function removeVowels(myString) {

    return
}