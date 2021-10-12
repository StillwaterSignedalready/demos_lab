/**
 * 如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  /**
   * 注意！！！！！！！ 这是错误的解法(二分法)
   * 错误原因：
   *   - 未考虑到数组中会有负数，导致最初的大方向错误，选择了二分法
   *   - 未打草稿，一开始应列出大部分的方案，以及分析各种可能出现的情况，再往下写
   */
  // 极端条件
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return -1;
  let pivotIndex = Math.floor((nums.length - 1) / 2);
  let [leftSum, rightSum] = [
    nums.slice(0, pivotIndex).reduce((sum, num) => sum + num, 0),
    nums.slice(pivotIndex + 1).reduce((sum, num) => sum + num, 0)
  ];
  if (leftSum === rightSum) return pivotIndex;
  const originOrient = leftSum > rightSum;
  while (leftSum > rightSum === originOrient && pivotIndex >= 0 && pivotIndex <= nums.length) {
    if (originOrient) {
      leftSum -= nums[pivotIndex - 1];
      rightSum += nums[pivotIndex];
      pivotIndex--;
    } else {
      leftSum += nums[pivotIndex];
      rightSum -= nums[pivotIndex + 1];
      pivotIndex++;
    }
    if (leftSum === rightSum) return pivotIndex;
  }
  return -1;
};

const nums = [-1,-1,-1,-1,-1,1];
const res = pivotIndex(nums);
console.log('res', res);