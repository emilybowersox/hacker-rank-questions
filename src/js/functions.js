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

//Let and Const
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    // Print the area of the circle:
    console.log(Math.PI * Math.pow(r, 2));
    // Print the perimeter of the circle:
    console.log(2 * Math.PI * r);
}

//Day 4 create a rectangle object
function Rectangle(a, b) {
    this.length = a,
        this.width = b,
        this.perimeter = 2 * (a + b),
        this.area = a * b
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


//day 4 count objects
//not iterating through the loop (added "continue" to both if/else statements)
// objects is the name of the array that contains the objects (have to go  /// one level deeper)
//here's the work to get there- had to move var sum and return sum outside of the loop!
function getCount(objects) {
    var indexLength = objects.length;
    // console.log(indexLength);
    //for objects[0] --> objects[4]
    var sum = 0;
    for (var i = 0; i < indexLength; i++) {

        // console.log(objects[1].x);
        // console.log(objects[1].y);
        // console.log(objects[0].x == objects[0].y);
        // console.log(objects[2].x == objects[2].y);

        if (objects[i].x == objects[i].y) {
            console.log(objects[i]);
            console.log("Match found");
            sum += 1;
            continue;
        } else {
            sum += 0;
            console.log(objects[i]);
            console.log("nada");
            continue;
        }
    }
    return sum;
}

//cleaned up version
function getCount(objects) {
    var sum = 0;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            sum += 1;
            continue;
        } else {
            continue;
        }
    }
    return sum;
}