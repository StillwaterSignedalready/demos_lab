// 这里的T用来表达“value和返回array的类型要一致”
function createArray<T>(length: number, value: T): Array<T>{
  let result: T[] = [];
  for(let i = 0; i < length; i++){
    result[i] = value;
  }
  return result;
}

createArray(3, 'x');