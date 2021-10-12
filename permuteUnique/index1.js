/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = []
  nums = nums.sort();
  if (nums.length < 1) return [];
  function walk(permuList, items) {
    if (items.length === 1) return result.push([...permuList, items[0]]);
    for (let i = 0; i < items.length; i++) {
      if (items[i] === items[i - 1]) continue;
      walk([...permuList, items[i]], items.filter((foo, index) => i !== index));
    }
  }
  walk([], nums);
  return result;
};
