/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  /**
   * [-33, -9, -4, -2, -1, 1, 2] -33 * -9 * 2 头两项乘以最后一项
   * [-33, -9, -4, -2, -1, 1, 2, 45, 100, 101] 45 * 100 * 101 最后三项(有正有负时,最大的正数 * 最大的同号积)
   * [-33, -9, -4, -2, -1] -4 * -2 * -1 最后三项(全是负数时，取绝对值最小的三项)
   */
  const arrLength = nums.length;
  if (arrLength <= 3) return nums.reduce((prod, num) => prod * num, 1);
  const sortedNums = nums.sort((a, b) => a - b);
  return Math.max(
    sortedNums[0] * sortedNums[1] * sortedNums[arrLength - 1],
    sortedNums[arrLength - 3] * sortedNums[arrLength - 2] * sortedNums[arrLength - 1],
  )
};

const arr = [1,2,3, 4, 0]
// const arr = [1,2,3]
const result = maximumProduct(arr)
console.log('result', result)