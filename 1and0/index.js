/**
 * 找出并返回 strs 的最大子集(元素最多)的大小，该子集中 最多 有 m 个 0 和 n 个 1
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) { // 相比递归的方式 ----- 空间复杂度小了一级
  const strsLength = strs.length;
  const lengthMap = {};
  for (const str of strs) {
    let count0 = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') count0 += 1;
    }
    lengthMap[str] = [count0, str.length - count0];
  }

  // index [0, m] [0, n]
  // const answerTable = Array(m + 1).fill( // bug点
  //   Array(n + 1).fill(0)
  // );
  const answerTable = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0)); // 注意这个默认值 0
  // 过一项 二维数组被整个覆盖一层
  // 自底向上 每层无法预料哪些是必要的答案 所以先把可能需要的答案都计算出来
  // ！重点：从1开始 而不是从0开始 ------------
  for (let i = 0; i < strsLength; i++) {
    const [count0, count1] = lengthMap[strs[i]];
    for (let j = m; j >= count0; j--) { // j -> 剩下的0
      for (let k = n; k >= count1; k--) { // k -> 剩下的1
        // j >= count0 && k >= count1 // 在二维数组中划出一块连续的矩形区域，这块区域以外，直接采用上一层的值(因为这样的情况下，直接判定本层的str不可采纳)，
        answerTable[j][k] = Math.max( // 此时左上方的矩形区域都是上一层的答案
          1 + answerTable[j - count0][k - count1], // 采纳当前项
          answerTable[j][k] // 不采纳当前项
        )
      }
    }
    console.log('answerTable', answerTable)
  }
  
  return answerTable[m][n];
};

// const strs = ["10", "0001", "111001", "1", "0"];
// const m = 5;
// const n = 3;
const strs = ["10", "0001", "111001", "1"];
const m = 3;
const n = 3;
// const strs = ["10", "0001", "111001", "1"];
// const m = 30;
// const n = 30;
// const strs = ["10","0","1"];
// const m = 1;
// const n = 1;
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

