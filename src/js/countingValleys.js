"use strict";

function countingValleys(n, s) {
    var up = 0;

    for (var i = 0; i < n; i++) {
        if (s[i] == s[i +1]) {
            up += 1;
        }
    }
    return up;

}