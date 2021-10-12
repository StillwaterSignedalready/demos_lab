/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  // 极端条件 k > n
  let maxAverage = -Infinity; // 吃瘪l et maxAverage = 0
  const n = nums.length;
  let leftIndex = 0, rightIndex = k - 1;
  const subList = nums.slice(0, k); // 吃瘪 nums.slice(k)

  let sum = subList.reduce((sum, num) => sum + num, 0);
  do {
    /**
     * 得出当前平均数
     * 更新最大值
     * 更新区间、sum
     */
    maxAverage = Math.max(maxAverage, sum / k);
    
    sum -= nums[leftIndex];
    leftIndex++;
    rightIndex++;
    sum += nums[rightIndex];
  } while (rightIndex < n)

  return maxAverage;
};

const nums = [1,12,-5,-6,50,3], k = 4
const res = findMaxAverage(nums, k)
