function sum(a: number, b: number): number{
  return a + b;
}

sum(1,1) // 参数不可多不可少

let mySum: (x:number, y: number) => number = function(a: number, b: number): number{
  return a + b;
}

interface SearchFunc{ //用接口定义函数的形式
  (a: string, b: string): boolean,
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

function buildName(firstName: string, lastName?: string){ // 问号为可选参数
  if(lastName){
    return firstName + ' ' + lastName;
  }else{
    return firstName;
  }
}

let tomCat = buildName('dd', 'ee');



