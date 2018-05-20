"use strict";
// 这里的T用来表达“value和返回array的类型要一致”
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x');
// 多个泛型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
// T extends LengthWise 使得arg.length可以被访问而不报错
function loggingIdentity(arg) {
    arg.length;
    return arg;
}
loggingIdentity(1);
function copyFields(target, src) {
    for (var id in src) {
        target[id] = src[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
