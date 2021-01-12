/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result;
  if (dividend === 0 ) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) {
    if (-dividend > 2147483647) return 2147483647; // 迎合 leetcode 的用例
    return -dividend;
  }
  const isSameDirection = (dividend > 0) === (divisor > 0);
  const auxDividend = Math.abs(dividend);
  const auxDivisor = Math.abs(divisor);
  result = div(auxDividend, auxDivisor);
  return isSameDirection ? result :  0 - result;
};

function div(a, b) { // b进制
  if (a < b) return 0;
  let count = 1;
  let poweredB = b;

  while (poweredB + poweredB < a) {
    count = count << 1;
    poweredB = poweredB + poweredB;
  }
  return count + div(a - poweredB, b);
}

// const dividend = -2147483648;
// const divisor = -1;
const dividend = 2147483647;
const divisor = 1.5;
const res = divide(dividend, divisor)

console.log('res', res)
