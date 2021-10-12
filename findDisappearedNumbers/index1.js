var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  /**
   * 将 nums 加上了 num2exist 的功能
   * 需要条件: 原数据的数字有固定范围(1-n)
   */
  for (const num of nums) {
    const x = (num - 1) % n;
    console.log('x', x)
    nums[x] += n;
  }
  console.log('nums', nums)
  const ret = [];
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
};


const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const res = findDisappearedNumbers(arr)
console.log('res', res)
