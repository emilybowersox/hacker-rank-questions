"use strict";

//try, catch, finally
function reverseString(s) {
    try {
        var split = s.split("");
        var reverse = split.reverse();
        var join = reverse.join("");
//   return s.split("").reverse().join("");
    } catch (error) {
        console.error(error);
    } finally {
        //made it a recursive loop oops
        console.log(reverseString(s));
    }

}