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

//This one!
function factorial(aNumber) {
    var result = aNumber;

//   if (aNumber === 0 || aNumber === 1)
//     return 1;

    while (aNumber > 1) {
        aNumber--;
        var result = result * aNumber;
    }
    return result;
}

function getGrade(score) {
    let grade;
    if (score <= 30 && score > 25) {
        grade = "A";
    } else if (score <= 25 && score > 20) {
        grade = "B";
    } else if (score <= 20 && score > 15) {
        grade = "C";
    } else if (score <= 15 && score > 10) {
        grade = "D";
    } else if (score <= 10 && score > 5) {
        grade = "E";
    } else {
        grade = "F";
    }
    return grade;
}

//switch case
function getLetter(s) {
    let letter =  s.charAt(0);
    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            return "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return "C";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return "C";
            break;
        default:
            return "D";
    }
    return letter;
}

//proof of concept, need to put if/else in a loop
function getSecondLargest(nums) {
    nums.sort();
    var lastOne = nums[nums.length - 1];

    if (lastOne == nums[nums.length - 2]) {
        return nums[nums.length - 3];
    } else {
        return nums[nums.length - 2];
    }
}

//doesn't work in all cases
function getSecondLargest(nums) {
    nums.sort();
    var lastOne = nums[nums.length - 1];

    for (var i = 2; i < nums.length; i++) {
        if (lastOne == nums[nums.length - i]) {
            return nums[nums.length - (i+1)];
        } else {
            continue;
        }
    }
}

