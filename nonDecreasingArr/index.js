/**
 * 非递减数列 -> 广义递增数列
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  /**
   * 维护变量 reduceItemCount 一旦大于一则返回 false
   */
  let reduceItemCount = 0;
  // let inIncreasing;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      reduceItemCount += 1;
      if (reduceItemCount > 1) return false;
      // if (i - 2 >= 0 && nums[i - 2] < nums[i]) {
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1]
      } else {
        nums[i - 1] = nums[i]
      }
    }
    // 第一次下降 把该项等于
  }
  return true;
};

const points = [4,2,3];
// const points = [3,4,2,3];
// const points = [1,2,3];
// const points = [1, 4, 2, 3];
const res = checkPossibility(points);
console.log('res', res)