interface Person {
  name: string,
  age: number,
}

let tom: Person = {
  name: 'tom',
  age: 11,
  // gender: 'male'; // 多出属性也不允许
}

interface Per{
  readonly id: number;
  name: string; // readonly 只能在创建时赋值(给对象赋值，而不是属性)
  age?: number; // 这个可以没有,如果有,则必须为number
  [propName: string]: any; //任意属性取 string 类型的值, name 和 age 都是任意属性的子属性
}

let u: Per ={
  id: 111,
  name: 'uu',
  age: 'j',
  gender: 'male',
}

u.id = 1123 // 只读属性