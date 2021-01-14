class TreeNode {
  constructor(mSum, iSum, lSum, rSum) {
    this.iSum = iSum;
    this.lSum = lSum;
    this.rSum = rSum;
    this.mSum = mSum;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  /**
   * @param {number} start 
   * @param {number} end 
   * @returns {TreeNode}
   */
  function getNode(start, end) {
    if (start === end) {
      return new TreeNode(nums[start], nums[start], nums[start], nums[start]);
    }
    // 分治
    const middleIndex = (start + end) >> 1;
    const leftNode = getNode(start, middleIndex);
    const rightNode = getNode(middleIndex + 1, end);
    // 归并
    const iSum = leftNode.iSum + rightNode.iSum;
    const lSum = Math.max(leftNode.lSum, leftNode.iSum + rightNode.lSum);
    const rSum = Math.max(rightNode.rSum, rightNode.iSum + leftNode.rSum);
    const mSum = Math.max(leftNode.mSum, rightNode.mSum, leftNode.rSum + rightNode.lSum)
    return new TreeNode(mSum, iSum, lSum, rSum);
  }

  const rootNode = getNode(0, nums.length - 1);
  return rootNode.mSum;
};

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums = [-1, 0, -2]
/**
 * pre = 0, maxAns = -2
 * -2 pre = -2, maxAns = -2
 * 1  pre = 1,  maxAns = 1
 * -3 pre = 1,  maxAns = 1
 */

const result = maxSubArray(nums);
console.log('result', result)

var maxSubArray1 = function(nums) { // 偏脑筋急转弯
  let pre = 0;
  let maxAns = nums[0]; // pre 历史 的最大值
  for (const num of nums) {
    // 如果 pre 一直是正的就不断累加， 如果 pre 变为负数就重新开始
    // 要么同流合污 pre + x，要么另起炉灶 x
    // 从右到左的状态转移 再从左开始递推
    // nums 内的连续区间 的右断点可以是 nums 中的任何一项, 以"右端点是哪项"切入，可以覆盖所有可能的连续区间
    // f(i): "以 i 为右端点的连续区间" 的和的最大值
    // f(i) = max(f(i - 1) + nums[i], nums[i])
    pre = Math.max(pre + num, num); // 状态转移在此，根据 pre 的 正负分叉
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
};