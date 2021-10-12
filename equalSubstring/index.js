/**
 * 吃瘪：审题错误
 * 长度相同的字符串
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  // 极端条件：空字符串
  /**
   * const costList: number[]
   * 区间只扩大不缩小
   * let leftIndex = 0, rightIndex = -1; 
   * let sumCost = 0;
   * # 独立事件 最右端 index 是 0, 1, ..., n - 1
   * while (rightIndex < n) {
   *   if (sumCost > maxCost) { 区间左边界左移
   *     sumCost - costList[leftIndex]
   *     leftIndex++; 
   *   }
   *   rightIndex++; 区间右边界右移
   *   sumCost += costList[rightIndex]
   * }
   * 最后 return Math.max(0, rightIndex - leftIndex)
   */
  const costList = s.split('')
    .map((charS, i) => Math.abs(charS.charCodeAt() - t[i].charCodeAt()));

  let leftIndex = 0, rightIndex = -1; 
  let sumCost = 0;
  while (rightIndex < costList.length) {
    if (sumCost > maxCost) {
      sumCost -= costList[leftIndex] // 吃瘪 sumCost - costList[leftIndex]
      leftIndex++; 
    }
    rightIndex++; // 最后一个 rightIndex++ 只是为了终结 while 循环 对于计算区间 是无意义的
    sumCost += costList[rightIndex]
  }

  return Math.max(0, rightIndex - leftIndex);
};

const s = "abcd", t = "bcdf", cost = 3;
// const s = "abcd", t = "acde", cost = 0
// const s = "krrgw", t = "zjxss", cost = 19;
const res = equalSubstring(s, t, cost)
console.log('res', res)