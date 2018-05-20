"use strict";
/// <reference path="./assert.d.ts">
function getLen(sth) {
    if (sth.length) {
        return sth.length;
    }
    else {
        return sth.toString().length;
    }
}
Math.pow(1, '2');
document.addEventListener('click', function (e) {
    console.log(e.targetCurrent);
});
