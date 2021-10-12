/**
 * 长度相同的字符串
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  // 吃瘪 "子字符串" 不是 "字符"
  // 极端情况：maxCost == 0
  // if (maxCost === 0) return 0;
  /**
   * 计算得出 costList: number[] 然后从小到大排序
   * 从 maxCost 中依次扣除 cost, 扣除成功一次则 result += 1
   */
  const costList = s.split('')
    .map((charS, i) => Math.abs(charS.charCodeAt() - t[i].charCodeAt()))
    .sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < costList.length; i++) {
    result += costList[i];
    if (result > maxCost) return i;
  }
  return s.length;
};

// const s = "abcd", t = "azzz", cost = 3;
const s = "krrgw", t = "zjxss", cost = 19;
const res = equalSubstring(s, t, cost)
console.log('res', res)