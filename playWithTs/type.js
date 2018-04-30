// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
var myNum = 'seven';
myNum.show(); // 类型系统会检测该类型有无此方法
myNum = 1;
// 而any类型可以随意赋值
var urNum = 'one';
urNum.show();
urNum = 1;
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var sth;
sth = 'two';
sth = 1;
