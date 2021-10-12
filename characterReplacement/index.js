/**
 * @param {string} s 仅由大写英文字母组成的字符串
 * @param {number} k 替换 k 次
 * @return {number}
 */
var characterReplacement = function(s, k) {
  /**
   * 独立/互斥事件: 以s[0]为最右 以s[1]为最右 以s[2]为最右 ... 以s[n - 1]为最右
   * >> 从左开始遍历以当前项为最右端的区间
   * 由于求的是最大区间 整个过程中区间只增大不减小 这样区间走到最右端的时候必定是最大的
   * 以上思想对 sum、average 等聚合 result 有意义(只对区间diff的部分在原来的基础上做计算)
   * 右扩过程中一旦最多字母之外的字母数大于k则 左边界内缩(不可外扩的原因：当前最多字母的数量必定大于k,假如外扩后最多字母变了，则之前的最多字母会加入”其他“，其他字母必定超过k;如果最多字母不变,其他字母只会增加)
   */
  const charIndex2Freq = Array(26).fill(0); // 区间内各字母出现次数，随着区间变化而变化
  const n = s.length;
  let leftIndex = 0;
  let rightIndex = 0;
  let historyMaxCharCount = 0;
  while (rightIndex < n) { // 0 < rightIndex < n
    charIndex2Freq[s[rightIndex].charCodeAt() - 'A'.charCodeAt()]++;
    historyMaxCharCount = Math.max(historyMaxCharCount, charIndex2Freq[s[rightIndex].charCodeAt() - 'A'.charCodeAt()]); // historyMaxCharCount 未必是当前区间的 但是够用了 因为 在意的不是当前的情况 而是最大的情况
    if (rightIndex - leftIndex + 1 - historyMaxCharCount > k) { // 区间长度减去最多字母数 > k
      charIndex2Freq[s[leftIndex].charCodeAt() - 'A'.charCodeAt()]--;
      leftIndex++;
    }
    rightIndex++; // 最后 rightIndex 会达到 n 越界
  }
  return n - leftIndex; // rightIndex - leftIndex
};

/**
 * 先找到最长连续串？NO!
 * k 要发挥最大功能, 要点在穴位上，撬动大块
 * s = AAABAAA CCCCCC AAAA , k = 1
 * s = AA B AA B AA B AA CCCC , k = 3
 *         CCCCCCCC AAA CCCCC    , k = 3
 */
// const s = "ABAB", k = 2;
const s = "AAAA", k = 0;
// const s = "AABABBA", k = 1;
// const s = "BAAAB", k = 2;
const res = characterReplacement(s, k)
console.log('res', res)
