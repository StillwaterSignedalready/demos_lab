// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
let myNum: string = 'seven';
myNum.show(); // 类型系统会检测该类型有无此方法
myNum = 1;

// 而any类型可以随意赋值
let urNum: any = 'one';
urNum.show();
urNum = 1;

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let sth;
sth = 'two';
sth = 1;

// 类型推论，根据声明变量时赋值的类型推断类型
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let hisNum = 'one'; // 相当于let hisNum: string = 'one';
hisNum = 1;

let thatNum: string | number | boolean;
thatNum = 'one';
thatNum = 1;
thatNum = true;

// 不确定一个联合类型的变量到底是哪个类型的时候,只能访问此联合类型的所有类型里共有的属性或方法
function getLen(sth: string | number): string{
  return sth.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let aNum: string | number;
aNum = 'seven';
aNum.length;
aNum = 1;
aNum.length;