var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
var num = 'seven';
num = 1;
console.log('done');
