/**
 * 请你返回可以获得的最大点数
 * 1 <= k <= cardPoints.length
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  // 极端条件：
  /**
   * 从完全左端滑向完全右端 (0, k - 1) -> (n - k , n - 1) 向左
   */
  const n = cardPoints.length;
  let sum = cardPoints.slice(0, k).reduce((sum, num) => sum + num, 0);
  let max = sum;
  let leftIndex = 0, rightIndex = k - 1;

  do {
    /**
     * 区间左移
     * 更新 sum
     * 更新max
     */
    sum -= cardPoints[rightIndex];
    rightIndex = rightIndex ? rightIndex - 1 : n - 1;
    leftIndex = leftIndex ? leftIndex - 1 : n - 1; // 吃瘪 leftIndex--
    sum += cardPoints[leftIndex];
    max = Math.max(max, sum);
  } while (leftIndex > n - k) // 吃瘪 leftIndex >= n - k

  return max;
};

const cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3;
const res = maxScore(cardPoints, k);
console.log('res', res)
