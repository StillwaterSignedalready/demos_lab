// var math = require('./math')
// var http = require('http')
// var path = require('path')
// var fs = require('fs')
// var curry = require('lodash/curry')
// var _ = require('ramda')
var _ = require('ramda')
var curry = _.curry;
var reduce = _.reduce;
var add = _.add;
var toLower = _.toLower;
var split = _.split;
var replace = _.replace;
var map = _.map;
var compose = _.compose;

var CARS = [
  {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

var trace = curry(function(tag, x){
  console.log(tag, x);
  return x;
});
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
// array -> (array的平均值 :number)
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- 无须改动

// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

var averageDollarValue = compose(_average, map(function(c) { return c.dollar_value; }));

console.log(averageDollarValue(CARS))
