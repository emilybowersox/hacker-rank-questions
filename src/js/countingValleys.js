"use strict";

function countingValleys(n, s) {

    var seaLevel = 0;

    for (var i = 0; i < n; i++) {
        if (s[i] == "U") {
            seaLevel += 1;
        } else if (s[i] == "D") {
            seaLevel -= 1;
        }
    }
    return seaLevel;



    // var up = 0;
    //
    // for (var i = 0; i < n; i++) {
    //     if (s[i] == s[i +1]) {
    //         up += 1;
    //     }
    // }
    // return up;

}