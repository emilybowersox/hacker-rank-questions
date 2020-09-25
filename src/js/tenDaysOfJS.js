"use strict";

//try, catch, finally
function reverseString(s) {
    try {
    s = s.split("").reverse().join("");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }
}


//try
function isPositive(a) {
    try {
        if (a >= 1)
            return "YES";
    } catch (e) {
        if (a = 0) {
            console.log("Zero Error");
        } else if (a < 0) {
            console.log("Negative Error")
        }
    }
}

