"use strict";

function sockMerchant(n, ar) {
    var sum = 0;

    for (var i = 0; i < n; i++){
        if (ar[i] == ar[i+=1]) {
            sum += 1;
        }
    }
    console.log(ar[i]);
    return sum;
}