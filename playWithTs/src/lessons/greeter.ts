class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let num: any = 'seven';
num = 1;

console.log('done');