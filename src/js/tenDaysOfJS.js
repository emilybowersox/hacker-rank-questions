"use strict";

//try, catch, finally
function reverseString(s) {
    try {
    s = s.split("").reverse().join("");
    } catch (error) {
        console.error(error);
    } finally {
        console.log(s);
    }

}