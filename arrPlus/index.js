/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  // 0 <= A[i] <= 9
  // 如果 A.length > 1，那么 A[0] != 0
  /**
   * - 极端情况处理 A: , K:
   * - K -> array
   *   let kLeft = K
   *   while (kLeft > 0) {
   *     const digit = kLeft % 10
   *     kArr.push(digit)
   *     kLeft -= digit
   *     kLeft /= 10
   *   }
   * - 底 = 长的那个数组
   * - 小学加法
   */
  let kLeft = K;
  const kArr = [];
  while (kLeft > 0) {
    const digit = kLeft % 10;
    kArr.unshift(digit);
    kLeft -= digit;
    kLeft /= 10;
  }
  console.log('kArr', kArr)
  const [base, bonus] = kArr.length > A.length ? [kArr, A] : [A, kArr];
  console.log('base', base)
  console.log('bonus', bonus)
  let extra = false;
  const baseLength = base.length;
  const bonusLength = bonus.length;
  /**
   * 从右到左相加
   *   if extra then 得数 += 1
   *   if 有进位 then extra = true else extra = else
   */
  for (let i = 1; i <= baseLength; i++) {
    const baseIndex = baseLength - i;
    const bonusIndex = bonusLength - i;
    let digit = base[baseIndex];
    if (typeof bonus[bonusIndex] === 'number') digit += bonus[bonusIndex];
    if (extra) digit += 1;
    base[baseIndex] = digit % 10;
    extra = digit >= 10;
  }
  /**
   * 多出的进位
   * 极端情况： 
   *   如果两个数组一样长
   * */
  if (extra) base.unshift(1);
  return base;
  // extra, +1
  // return sum + K;
};

// const A = [2, 1, 5, 1]
// const K = 806
const A = [9, 9, 9, 9]
const K = 11
const res = addToArrayForm(A, K);

console.log('res', res)