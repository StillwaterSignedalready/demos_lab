/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringVer1 = function(s) {
  let tmpStr = []; // 考虑使用 hashMap
  let longestLen = 0;
  let char;
  /** @description 数组中发现重复的 char 的 index */
  let index;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    /*
     tmpStr.length 的范围是 1 ~ n, 且每次 for 它可能的最大值随着每次循环结束+1
     可得出时间复杂度为 O(n^2) ~ O(n)
     */
    index = tmpStr.findIndex(chara => chara === char);
    if (index > -1){ // 重复 比较
      if (longestLen < tmpStr.length){
        longestLen = tmpStr.length;
      }
      tmpStr = tmpStr.slice(index + 1); // 此处如果用“滑动窗口”代替更优, 即[startIndex, endIndex]
      tmpStr.push(char);
    } else if (i === s.length - 1) { // 末尾 比较
      tmpStr.push(char)
      if (longestLen < tmpStr.length){
        longestLen = tmpStr.length;
      }
    } else { // 未重复 正常推入
      tmpStr.push(char)
    }
  }
  if (!longestLen) {
    longestLen = tmpStr.length;
  }
  return longestLen;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringVer2 = function(s) {
  let longestLen = 0;
  const charToIndex = {};
  /** @type {number|undefined} */
  let currDuplIndexNext;
  // slid chunk s.slice(i, j + 1)
  // i -> startIndex, j -> endIndex(include)
  for (let i = 0, j = 0; j < s.length; j++) {
    currDuplIndexNext = charToIndex[s[j]];
    // currDuplIndexNext 未必在 slide chunk 内 也可能在 i 之前
    // 只有在 slide chunk 内 才算作重复
    if (currDuplIndexNext >= i) { // 发现重复
      i = currDuplIndexNext;
    }
    /* 未重复 */
    longestLen = Math.max(longestLen, j + 1 - i);
    charToIndex[s[j]] = j + 1// 因为 sild chunk 内不会有重复的 char, 故每次循环都直接覆盖

  }
  return longestLen;
}

// const str = "pwwkew";
// const str = "aab";
const str = "dvdf";
console.log(lengthOfLongestSubstringVer2(str))