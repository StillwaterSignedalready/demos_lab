/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) { // 摩尔投票算法
  // 只要相异则互相消耗 剩下的那个很可能是答案 或者说答案一定会剩下来
  let major = null;
  let stackCount = 0;
  for (const num of nums) {
    if (stackCount === 0) {
      major = num;
      stackCount++;
    } else if (num !== major) {
      stackCount--;
    } else {
      stackCount++;
    }
  }

  if (stackCount >= 0) {
    let majorCount = 0;
    for (const num of nums) {
      if (num === major) majorCount++;
    }
    if (majorCount > (nums.length / 2)) return major;
  }
  return -1;
};

// const arr = [1,2,5,9,5,9,5,5,5];
const arr = [1,2,3];
const res = majorityElement(arr);

console.log('res', res)
