"use strict";

//var sortedArray = ar.sort();
// modulus with ===


function sockMerchant(n, ar) {
    var sum = 0;
    var sortedArray = ar.sort();

    // for (var i = 0; i < n; i++){
    //     if (sortedArray[i] == sortedArray[i+=1]) {
    //         sum += 1;
    //     }
    // }
    if (sortedArray[0] === sortedArray[7]){
        sum += 1;
    }
    // console.log(sortedArray[1]);
    return sum;
}

