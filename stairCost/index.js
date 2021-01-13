/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // getMinCost(i) = cost[i] + Math.min(getMinCost(i - 1), getMinCost(i - 2))
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  const answerList = [cost[0], cost[1]];
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    answerList[i] = cost[i] + Math.min(answerList[i - 1], answerList[i - 2]);
  }
  return answerList[answerList.length - 1];
};

// const cost = [10, 15, 20];
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
const res = minCostClimbingStairs(cost);
console.log('res', res)
