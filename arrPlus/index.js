/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {

  let kLeft = K;
  const kArr = [];
  while (kLeft > 0) {
    const digit = kLeft % 10;
    kArr.unshift(digit);
    kLeft -= digit;
    kLeft /= 10;
  }
  const [base, bonus] = kArr.length > A.length ? [kArr, A] : [A, kArr];
  let extra = false;
  const baseLength = base.length;
  const bonusLength = bonus.length;

  for (let i = 1; i <= baseLength; i++) {
    const baseIndex = baseLength - i;
    const bonusIndex = bonusLength - i;
    let digit = base[baseIndex];
    if (typeof bonus[bonusIndex] === 'number') digit += bonus[bonusIndex];
    if (extra) digit += 1;
    base[baseIndex] = digit % 10;
    extra = digit >= 10;
  }
  if (extra) base.unshift(1);
  return base;
};

// const A = [2, 1, 5, 1]
// const K = 806
const A = [9, 9, 9, 9]
const K = 11
const res = addToArrayForm(A, K);

console.log('res', res)