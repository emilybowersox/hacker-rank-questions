"use strict";

//try, catch, finally
function reverseString(s) {
    try {
        var split = s.split(" ");
        var reverse = split.reverse();

    } catch (error) {
        console.error(error);
    } finally {
        console.log(split);
    }

}