/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = []
  nums = nums.sort((a, b) => a - b);
  if (nums.length < 1) return [];
  const permuList = [];
  // const remainChars = nums;
  const index2ignore = Array(nums.length).fill(false);
  function walk(index) {
    // console.log('-----')
    // console.log('nums', nums)
    if (index > nums.length - 1) return result.push([...permuList]);
    for (let i = 0; i < nums.length; i++) {
      // console.log('index2ignore', index2ignore)
      // console.log('i', i)
      /**
       * 本层的筛选分两步：
       *   1. 深度 去掉使用过的 num
       *   2. 广度 剩下的 按 num 的值合并逻辑区间，每个区间的第一个未被 ignore 的项作为代表加入计算，其它跳过
       */
      // 跳过的项 纵向与横向剪枝的逻辑在此交织 应结合树图理解
      if (index2ignore[i] || (nums[i] === nums[i - 1] && !index2ignore[i - 1])) continue;
      permuList.push(nums[i]);
      index2ignore[i] = true;
      walk(index + 1);
      index2ignore[i] = false;
      permuList.pop();
    }
  }
  // console.log('nums', nums)
  walk(0);
  // console.log('nums', nums)
  return result;
};

const nums = [1,1,2]
const res = permuteUnique(nums);
console.log('res', res)