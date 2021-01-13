/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) { // O(n)
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const answerList = [];
  answerList[0] = nums[0];
  answerList[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i ++) {
    answerList[i] = Math.max(nums[i] + answerList[i - 2], answerList[i - 1]);
  }
  return answerList[answerList.length - 1];
};
// var rob = function(nums) { // O(powerx n) 炸裂
//   if (nums.length === 0) return 0;
//   const answerMap = [];

//   function getMax(start, end) {
//     console.log('start', start)
//     // console.log('end', end)
//     if (start === end) return nums[start]
//     if (end - start === 1) return Math.max(nums[start], nums[end])
//     if (answerMap[end]) {
//       return answerMap[end];
//     }
//     const answer = Math.max(nums[end] + getMax(start, end - 2), getMax(start, end - 1))
//     answerMap[end] = answer;
//     // console.log('answerMap', answerMap)
//     return answer;
//   }

//   return getMax(0, nums.length - 1)
// };

// const nums = [2,0,7,9,5,3,2,1];
const nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// const nums = [2,7];
const res = rob(nums);
console.log('res', res)