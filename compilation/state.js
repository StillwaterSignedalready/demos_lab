
/**
  * @typedef {'+'|'-'|'*'|'/'} operator
  * @typedef {{type:('number'|operator),chars:string[]}} token
  */

let token = [];
/** @type {{type:('number'|operator),value:string}} */
const tokens = [];

/**
 * 
 * @param {'number'|operator} type 
 * @param {string} value 
 */
function emmitToken(type, value) {
  console.log('\n emmit: ', value);
  tokens.push({ type, value });
  token = [];
}
/**
 * @description 状态机 作用于一个token的开始(上一个token收尾后,或整个表达式的开始)
 * @param {string} char 
 */
function start(char) {
  switch(char) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      token.push(char);
      return inNumber;
    case '+':
    case '-':
    case '*':
    case '/':
      emmitToken(char, char);
      return start;
    case ' ':
    case '\t':
    case '\r':
      return start;
  }
}

/**
 * @description 状态机 当前位置在数字中
 * @param {string} char 
 */
function inNumber(char) {
  switch(char) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      token.push(char);
      return inNumber;
    default:
      emmitToken('number', token.join(''));
      token = [];
      return start(char);

  }
}

const input = '1024 + 2 * 256';

let state = start;

for (const c of input.split('')) {
  state = state(c);
}

state(Symbol('EOF'))
/*
* 四则运算表达式 只接受 数字 加减乘除
 * <Expression> ::= 
 *  <AdditiveExpression><EOF>
 * <AdditiveExpression> ::= 
 *   <MultiplicativeExpression>
 *   |
 *   <AdditiveExpression><+><MultiplicativeExpression>
 *   |
 *   <AdditiveExpression><-><MultiplicativeExpression>
 * <MultiplicativeExpression> ::= 
 *  <Number>
 *  |
 *  <MultiplicativeExpression><*><Number>
 *  |
 *  <MultiplicativeExpression></><Number>
 */


function Expression(source){
  if(source[0].type === "AdditiveExpression" && source[1] && source[1].type === "EOF" ) {
    let node = {
      type:"Expression",
      children:[source.shift(), source.shift()]
    }
    source.unshift(node);
    return node;
  }
  AdditiveExpression(source);
  return Expression(source);
}

// 括号的操作 比 A & M 高一级，比表达式优先处理
/**
 * if (遇到括号) then 将该括号替换为数组，并把括号到反括号之间的token全push到该数组，再对这个数组递归此操作
 * 
 */

/**
 * shift(exp) shift(operator) 合成下一个次级节点(也是shift*2 + 1 的形式) 再把这三项合成当前节点
 * 这里不会出现连续两个 MultiplicativeExpression 节点 因为 MultiplicativeExpression函数有’贪婪‘属性
 * 它会尽可能多地把token吸收进来
 * 这两个方法都是自底向上(从左下角开始，向右上方)构建AST的
 * @param {{type:string}[]} source 
 */
function AdditiveExpression(source){
  if(Array.isArray(source[0])) { // 这时 source[1] 一定不是*/
    // let node = {
    //     type:"AdditiveExpression",
    //     children:[source[0]]
    // }
    // source[0] = node;
    // return AdditiveExpression(source);
}
  if(source[0].type === "MultiplicativeExpression") { // 这时 source[1] 一定不是*/
      let node = {
          type:"AdditiveExpression",
          children:[source[0]]
      }
      source[0] = node;
      return AdditiveExpression(source);
  } 
  if(source[0].type === "AdditiveExpression" && source[1] && source[1].type === "+") {
      let node = {
          type:"AdditiveExpression",
          operator:"+",
          children:[]
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
  }
  if(source[0].type === "AdditiveExpression" && source[1] && source[1].type === "-") {
      let node = {
          type:"AdditiveExpression",
          operator:"-",
          children:[]
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
  }
  if(source[0].type === "AdditiveExpression" && source[1] && source[1].type === "-") {
      // let node = {
      //     type:"AdditiveExpression",
      //     operator:"-",
      //     children:[]
      // }
      // node.children.push(source.shift());
      // node.children.push(source.shift());
      // MultiplicativeExpression(source);
      // node.children.push(source.shift());
      // source.unshift(node);
      // return AdditiveExpression(source);
  }
  if(source[0].type === "AdditiveExpression") // 完毕
      return source[0];

  MultiplicativeExpression(source);
  return AdditiveExpression(source);
}
function MultiplicativeExpression(source){
  if (Array.isArray(source[0])) {
    const node = Expression(source[0])
    source[0] = node;
    return MultiplicativeExpression(source);
  }
  if(source[0].type === "Number") { // 起点
      let node = {
          type:"MultiplicativeExpression",
          children:[source[0]]
      }
      source[0] = node;
      return MultiplicativeExpression(source);
  } 
  if(source[0].type === "MultiplicativeExpression" && source[1] && source[1].type === "*") {
      let node = {
          type:"MultiplicativeExpression",
          operator:"*",
          children:[]
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
  }
  if(source[0].type === "MultiplicativeExpression"&& source[1] && source[1].type === "/") {
      let node = {
          type:"MultiplicativeExpression",
          operator:"/",
          children:[]
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
  }
  if(source[0].type === "MultiplicativeExpression")
      return source[0];

  return MultiplicativeExpression(source);
};

var source = [{
  type:"Number",
  value: "3"
}, {
  type:"*",
  value: "*"
}, {
  type:"Number",
  value: "300"
}, {
  type:"+",
  value: "+"
}, {
  type:"Number",
  value: "2"
}, {
  type:"*",
  value: "*"
}, {
  type:"Number",
  value: "256"
}, {
  type:"EOF"
}];
var ast = Expression(source);

console.log(ast);


function evaluate(node) {
  if(node.type === "Expression") {
      return evaluate(node.children[0])
  }
  if(node.type === "AdditiveExpression") {
      if(node.operator === '-') {
          return evaluate(node.children[0]) - evaluate(node.children[2]);
      }
      if(node.operator === '+') {
          return evaluate(node.children[0]) + evaluate(node.children[2]);
      }
      return evaluate(node.children[0])
  }
  if(node.type === "MultiplicativeExpression") {
      if(node.operator === '*') {
          return evaluate(node.children[0]) * evaluate(node.children[2]);
      }
      if(node.operator === '/') {
          return evaluate(node.children[0]) / evaluate(node.children[2]);
      }
      return evaluate(node.children[0])
  }
  if(node.type === "Number") {
      return Number(node.value);
  }
}

console.log(evaluate(ast))