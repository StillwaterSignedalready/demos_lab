/**
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 返回 s "所有"可能的分割方案。
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  /** 
   * "所有" 即 abcba 可拆解为 a, bca, a | a, b, c, b, a
   * !!! 用两个 index 表示中点: left === right 或 left === right - 1
   * 回文扩散 c << a >> c
   * 回文收缩 c >> a << c
   * 1. 考虑利用回文扩散
   * 首先有 s.split('') ['a', 'b', 'c', ...]
   * let offset 从中点开始 是否有必要二叉树分治？
   * 比如中点是 s[6] 则短路尝试: s[5,6,7] s[4~8], ... 得到所有以 s[6] 为中点的回文
   * 得到所有可能的回文区间 -> 拼出所有可以撑满总区间的组合
   * 
   * 2. 考虑利用回文收缩 从最大范围开始
   * for (i in range(1 ~ n)) {
   *   右端点为第 [i] 项的子串 (这样可以穷尽所有子串)
   *   for (右端点为 [i] 左端点 [j] 小于 i 的所有子串) {
   *     if (s[i] === s[j]) {
   *        收缩 得到区间内所有可能的回文
   *     }
   *   }
   * }
  */


};

const s = 'abcba'
const res = partition