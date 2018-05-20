// 这里的T用来表达“value和返回array的类型要一致”
function createArray<T>(length: number, value: T): Array<T>{
  let result: T[] = [];
  for(let i = 0; i < length; i++){
    result[i] = value;
  }
  return result;
}

createArray(3, 'x');

// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]]
}


interface LengthWise{
  length: number;
}

// T extends LengthWise 使得arg.length可以被访问而不报错
function loggingIdentity<T extends LengthWise>(arg: T){
  arg.length
  return arg;
}

loggingIdentity(1);

function copyFields<T extends U, U>(target: T, src: U): T{
  for(let id in src){
    target[id] = (<T>src)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, {b: 10, d: 20 });