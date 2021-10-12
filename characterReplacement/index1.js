/**
 * @param {string} s 仅由大写英文字母组成的字符串
 * @param {number} k 替换 k 次
 * @return {number}
 */
var characterReplacement = function(s, k) {
  /**
   * 失败的算法 失败的算法 失败的算法 失败的算法 失败的算法
   * 滑动窗口
   * let maxCount = 0;
   * s 根据字母不同分为若干逻辑区间 AAA BBB CC AA
   * B AAA B
   * 互斥事件：替换后最长串 - 最左端是第1区间 最左端是第2区间 最左端是第3区间 ... 最右端是最后区间
   * 失败的算法 失败的算法 失败的算法 失败的算法 失败的算法
   * @失败的算法 因为本算法假设最左字母为区间内最多的字母，这显然不正确
   * 声明两个index指针: leftIndex = 0, rightIndex = 0
   * for (区间 in 逻辑区间) {
   *   let counter = 0; 替换次数计数器
   *   // let stepCount = 0 ; rightIndex走了多少步 可可以
   *   while (counter < k) {
   *     rightIndex 向右移动每次遇到不同的字母 counter += 1
   *   }
   *   const stepCount = rightIndex - leftIndex + 1
   *   maxCount = Math.max(maxCount, stepCount)
   * }
   * 补上 最右端是最后区间 的情况
   */
  let maxCount = 0;
  let leftIndex = 0, rightIndex = 0;
  let counter;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) continue; // 逻辑区间
    console.log('-------------', s[i])
    counter = 0;
    leftIndex = i;
    rightIndex = i;
    while (counter <= k && rightIndex < s.length - 1) { // 吃瘪 counter < k && rightIndex < s.length
      rightIndex++;
      if (s[rightIndex] !== s[leftIndex]) counter++;
      if (counter > k) {
        rightIndex--;
        break;
      }
      console.log('>>>---', s[rightIndex])
    }
    console.log('counter', counter)
    console.log('rightIndex', rightIndex)
    console.log('leftIndex', leftIndex)
    const span = rightIndex - leftIndex + 1;
    console.log('span', span)
    maxCount = Math.max(maxCount, span);
  }
  // 补上 最右端是最后区间 的情况
  counter = 0;
  leftIndex = s.length - 1;
  rightIndex = s.length - 1;
  while (counter <= k && leftIndex > 0) {
    leftIndex--;
    if (s[rightIndex] !== s[leftIndex]) counter++;
    if (counter > k) {
      leftIndex++;
      break;
    }
  }
  const span = rightIndex - leftIndex + 1;
  maxCount = Math.max(maxCount, span);
  return maxCount;
};

/**
 * 先找到最长连续串？NO!
 * k 要发挥最大功能, 要点在穴位上，撬动大块
 * s = AAABAAA CCCCCC AAAA , k = 1
 * s = AA B AA B AA B AA CCCC , k = 3
 *         CCCCCCCC AAA CCCCC    , k = 3
 */
// const s = "ABAB", k = 2;
// const s = "AAAA", k = 0;
// const s = "AABABBA", k = 1;
const s = "BAAAB", k = 2;
const res = characterReplacement(s, k)
console.log('res', res)
