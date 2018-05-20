"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 1); // 参数不可多不可少
var mySum = function (a, b) {
    return a + b;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomCat = buildName('dd', 'ee');
