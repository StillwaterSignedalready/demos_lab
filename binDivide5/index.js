/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  const result = [];
  let curr = 0;
  for (let i = 0; i < A.length; i++) {

      curr = ((curr << 1) + A[i]) % 5;
      result.push(curr === 0);

  }
  return result;
};


// const arr = [0,1,1,1,1,1];
const arr = [0,0,1,0,1];
// 0, 1, 3

const result = prefixesDivBy5(arr);
console.log('result', result)