/**
 * 
 * @param params 
 * @returns {Function}
 */
function compose(...funcList) {
  const n = funcList.length;
  function walk(funcIndex, ...otherParams) {
    if (funcIndex >= n - 1) return funcList[funcIndex](...otherParams);
    return funcList[funcIndex](walk(funcIndex + 1, ...otherParams));
  }
  return function() {
    return walk(0, ...arguments);
  }
}

const add1 = n => {
  console.log('add1--')
  return n + 1;
}
const add2 = n => {
  console.log('add2--')
  return n + 2;
}
const add3 = n => {
  console.log('add3--')
  return n + 3;
}
const add6 = compose(add1, add2, add3);

const res = add6(1);
console.log('res', res)