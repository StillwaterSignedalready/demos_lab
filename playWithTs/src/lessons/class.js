"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
a.name;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = 'h'; // 如果name是protected便可以访问
        return _this;
    }
    return Cat;
}(Animal));
var Anima = /** @class */ (function () {
    function Anima(name) {
        this.name = name;
    }
    return Anima;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    return Dog;
}(Anima));
var Person = /** @class */ (function () {
    function Person(age) {
        this.name = 'ee';
        this.age = age;
    }
    return Person;
}());
var ani = new Animal('e');
