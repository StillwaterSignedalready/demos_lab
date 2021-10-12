/**
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  /**
   * 尽可能压榨 result
   * 吃瘪 nums 也可以用(空间复杂度)
   */
  const notExist = Array(nums.length).fill(true).map((x, index) => index + 1);
  // console.log(notExist)
  for (let i = 0; i < nums.length; i++) {
    notExist[nums[i] - 1] = false;
  }
  return notExist.filter(notExis => notExis);
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const res = findDisappearedNumbers(arr)
console.log('res', res)
