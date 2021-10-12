/**
 * 吃瘪 题意读错
 * 一大一小 或 一小一大
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  // 极端情况
  if (arr.length < 2) return arr.length;
  /**
   * 滑动窗口
   * 一旦遇到 (小 大 or 大 小) 则开始推进 rightIndex
   * 一旦节奏不对则 {right left 合并推进; 更新 max} 
   */
  let leftIndex = 0, rightIndex = 1;
  let maxLen = 1;
  let preEndUp = false;
  let currEndUp;
  // 吃瘪 let oddBigger; // 子串的奇数项大 计数从1开始
  // 根据 末端的 up/down 即可
  while(rightIndex < arr.length) {
    currEndUp = arr[rightIndex] > arr[rightIndex - 1];
    if (arr[rightIndex] === arr[rightIndex - 1]) {
      leftIndex = rightIndex;
    } else if (currEndUp === preEndUp) {
      leftIndex = rightIndex - 1;
    }
    preEndUp = currEndUp;
    rightIndex++;
    maxLen = Math.max(maxLen, rightIndex - leftIndex);
  }
  // do {
  //   if (arr[leftIndex] === arr[rightIndex]) continue;
  //   if (rightIndex - leftIndex === 1) oddBigger = arr[leftIndex] > arr[rightIndex];
  //   if (oddBigger) {

  //   } else {

  //   }
  // } while(rightIndex < arr.length)
  return maxLen;
};

// const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];
//           0  1  2  3  4  5  6  7  8  9
// const arr = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0];
const arr = [9, 9];
// const arr = [4, 8, 12, 16];
const res = maxTurbulenceSize(arr);
console.log('res', res)
