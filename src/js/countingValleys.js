"use strict";

function countingValleys(n, s) {
    var valleyCount = 0;
    var seaLevel = 0;

    for (var i = 0; i < n; i++) {
        if (s[i] == "U") {
            seaLevel += 1;
            if (seaLevel == 0) {
                valleyCount += 1;
            }
        } else if (s[i] == "D") {
            seaLevel -= 1;
            if (seaLevel == 0) {
                valleyCount += 1;
            }
        }
    }

    return valleyCount - 1;


    // var up = 0;
    //
    // for (var i = 0; i < n; i++) {
    //     if (s[i] == s[i +1]) {
    //         up += 1;
    //     }
    // }
    // return up;

}