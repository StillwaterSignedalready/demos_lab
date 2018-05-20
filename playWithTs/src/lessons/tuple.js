"use strict";
var x = ['hh', 1, 'd'];
x[1] = 2;
x[0].slice(1);
x[1].toFixed(2);
x.push(true); // 越界元素类型为 string | number
x[5].slice(1);
