/**
 * 480 滑动窗口中位数
 * k 始终小于输入的非空数组的元素个数
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  /**
   * 极端条件 nums.length = 0 | 1
   * 维护一个排序的数组
   */
  let leftIndex = 0, rightIndex = k - 1;
  const slidWindow = nums.slice(0, k).sort((a, b) => a - b);
  const result = [];
  while (rightIndex < nums.length) {
    /**
     * 先去掉最左项 再加上最右项
     * 然后得出中位数
     */
    // console.log('-----------------------')
    // console.log(nums.slice(leftIndex, rightIndex + 1), slidWindow)

    result.push(medianInSortedList(slidWindow));

    const index2remove = slidWindow.findIndex(num => num === nums[leftIndex]);
    slidWindow.splice(index2remove, 1);
    const index2addBefore = slidWindow.findIndex(num => num >= nums[rightIndex + 1]);
    // console.log('num2remove', nums[leftIndex])
    // console.log('num2add', nums[rightIndex + 1])
    // console.log('index2addBefore', index2addBefore)
    if (index2addBefore === -1) {
      slidWindow.push(nums[rightIndex + 1]);
    } else {
      slidWindow.splice(index2addBefore, 0, nums[rightIndex + 1]);
    }
    leftIndex++;
    rightIndex++;
  }
  return result;
};

function medianInSortedList(list) { // 考虑优化为链表、二叉树(平衡)
  const k = list.length;
  return k % 2 === 0 ? (list[k / 2 - 1] + list[k / 2]) / 2 : list[(k - 1) / 2];
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
// -3, 5, 3 -> -3
// [ 1, -1, -1, -3, 5, 6 ]
const res = medianSlidingWindow(nums, k);
console.log('res', res)
