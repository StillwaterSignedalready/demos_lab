
const count0 = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') count += 1;
  }
  return count
};

const count1 = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') count += 1;
  }
  return count
};

/**
 * 找出并返回 strs 的最大子集(元素最多)的大小，该子集中 最多 有 m 个 0 和 n 个 1
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {

  const answerMap = {};
  const lengthMap = {};
  for (const str of strs) {
    lengthMap[str] = [count0(str), count1(str)];
  }
  // console.log('lengthMap', lengthMap)
  // 用 rightBoundary 易于缓存
  function getBigestArrSize(rightBoundary, m, n) {
    if ((m <= 0 && n <= 0) || rightBoundary < 0) return 0;
    if (answerMap[`${rightBoundary}-${m}-${n}`]) return answerMap[`${rightBoundary}-${m}-${n}`];
    const lastItem = strs[rightBoundary];
    // const lastItem0Count = count0(lastItem);
    // const lastItem1Count = count1(lastItem);
    const [lastItem0Count, lastItem1Count] = lengthMap[lastItem];
    if (lastItem0Count > m || lastItem1Count > n) return getBigestArrSize(rightBoundary - 1, m, n);
    if (rightBoundary === 0) return 1;
    const answer = Math.max(
      1 + getBigestArrSize(rightBoundary - 1, m - lastItem0Count, n - lastItem1Count),
      getBigestArrSize(rightBoundary - 1, m, n)
    )
    answerMap[`${rightBoundary}-${m}-${n}`] = answer;
    console.log('answerMap', answerMap)
    return answer;
  }
  return getBigestArrSize(strs.length - 1, m, n);
};

// const strs = ["10", "0001", "111001", "1", "0"];
// const m = 5;
// const n = 3;
// const strs = ["10", "0001", "111001", "1"];
// const m = 3;
// const n = 3;
// const strs = ["10", "0001", "111001", "1"];
// const m = 30;
// const n = 30;
const strs = ["10","0","1"];
const m = 1;
const n = 1;
// const strs = ["10","0001","111001","1","0"];
// const m = 4;
// const n = 3;

const res = findMaxForm(strs, m, n)
console.log('res', res)


/**
 * 状态转移1
 * getBigestArr(strs, m, n) = getBiggerArr( // 一个采用当前 item, 一个不采用
 *   [item, ...getBigestArr(strs.slice(0, length - 1), m - 当前item中0的数量, n - 当前item中1的数量)], // m 或 n 根据当前 item 减去对应的数字
 *   getBigestArr(strs.slice(0, length - 1), m, n),
 * );
 * 状态转移2
 * getBigestArrSize(strs, m, n) = Math.max(
 *   1 + getBigestArrSize(strs.slice(0, length - 1), m - 当前item中0的数量, n - 当前item中1的数量),
 *   getBigestArrSize(strs.slice(0, length - 1), m, n)
 * )
 * 边界条件
 * ["10", "0001", "111001", "1", "0"]; m; n;
 * ["10", "0001", "111001", "1"]; m -1 ; n;
 * ["10", "0001", "111001", "1"]; m; n - 1;
 * 
 */

