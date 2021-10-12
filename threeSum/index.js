/**
 * 请你找出所有和为 0 且不重复的三元组
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  /**
   * 为了确保不重复，要让三元组从左到右递增，nums 先排序
   * 逻辑上 把 nums 按数字是否相同分为若干递增的逻辑区间(使得num1 不会重复)
   * for (num1 of 逻辑区间List) {
   *   从num1(num1逻辑区间的第一个而不是最后一个，因为num1和num2可以相等)右侧到末尾用双指针限定一个动态区间(只能缩小)
   *   while (num2 num3 index 未相撞) {
   *     if (num1 + num2 + num3 === 0)
   *       then push
   *     else if (> 0)
   *       右边界内缩
   *     else (< 0)
   *       左边界内缩
   *   }
   * }  
   */
  const result = [];
  nums = nums.sort((a, b) => a - b);
  let num1;
  let num2;
  let num3;
  let leftIndex;
  let rightIndex;
  let fitSum;
  let sumOfN2N3;
  for (let i = 0; i < nums.length; i++) {
    // console.log('nums[i]', nums[i])
    if (num1 === nums[i]) continue;
    num1 = nums[i];
    leftIndex = i + 1;
    rightIndex = nums.length - 1;
    fitSum = 0 - num1;
    while (leftIndex < rightIndex) { // 吃瘪 leftIndex !== rightIndex
      // console.log('----------')
      sumOfN2N3 = nums[leftIndex] + nums[rightIndex];
      if (sumOfN2N3 === fitSum) {
        // console.log('sumOfN2N3 === fitSum')
        result.push([num1, nums[leftIndex], nums[rightIndex]]);
        // console.log([num1, nums[leftIndex], nums[rightIndex]])
        // 为确保num2不会重复，leftIndex 跳到下一个逻辑区间，这也导致 rightIndex 跳到下一个逻辑区间
        num2 = nums[leftIndex];
        while (nums[leftIndex] === num2) {
          // console.log('>>>1')
          leftIndex ++;
        }
        num3 = nums[rightIndex];
        while (nums[rightIndex] === num3) {
          // console.log('>>>2')
          rightIndex --;
        }
      } else if (sumOfN2N3 > fitSum) {
        // 右边界内缩 rightIndex 跳到下一个逻辑区间
        num3 = nums[rightIndex];
        while (nums[rightIndex] === num3) {
          // console.log('>>>3')
          rightIndex --;
        }
      } else { // sumOfN2N3 < fitSum
        // 左边界内缩 leftIndex 跳到下一个逻辑区间
        num2 = nums[leftIndex];
        while (nums[leftIndex] === num2) {
          // console.log('>>>4')
          leftIndex ++;
        }
      }
    }
  }
  return result;
};

//  -2  0 0 0 0 0  1 1
// [ -4, -1, -1, 0, 1, 2 ]
// [1, 1, 1, 1, 2, 2, 2]
// for (num1 in [1, 2]) 
//   1 -> [1, 2]
//   2 -> 2
// const nums = [];
const nums = [-1,0,1,2,-1,-4];
const res = threeSum(nums)
console.log('res', res)