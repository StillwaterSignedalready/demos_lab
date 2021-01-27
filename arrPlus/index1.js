/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1;
  while (K > 0) {
    A[i] += K;
    K = parseInt(A[i] / 10, 10);
    A[i--] %= 10;
    if (i < 0 && K > 0) { // 巧妙 当数组加完 K还有余时 在左端补0，便可以继续走 while loop
      A.unshift(0);
      i = 0;
    }
  }
  return A;
};

// const A = [2, 1, 5, 1]
// const K = 806
const A = [9, 9, 9, 9]
const K = 11
const res = addToArrayForm(A, K);
console.log('res', res)
