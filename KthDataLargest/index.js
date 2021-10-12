/**
 * 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  // console.log('--------------', val)
  if (!this.nums.length) { // 吃瘪 this.nums = []
    this.nums.push(val);
  } else if (val >= this.nums[0]) {
    // console.log('unshift unshift unshift')
    this.nums.unshift(val);
  } else if (val <= this.nums[this.nums.length - 1]) {
    this.nums.push(val);
  } else {
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] < val) {
        this.nums.splice(i, 0, val);
        break;
      }
    }
  }

  // console.log('this.nums', this.nums)
  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(3, [1, 1]);
console.log(kthLargest.add(1));   // return 4
console.log(kthLargest.add(1));   // return 4
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(4));   // return 4
console.log(kthLargest.add(4));   // return 4
console.log(kthLargest.add(4));   // return 4

// const kthLargest = new KthLargest(1, []);
// console.log(kthLargest.add(-3));   // return 4
// console.log(kthLargest.add(-2));   // return 4
// console.log(kthLargest.add(-4));   // return 4
// console.log(kthLargest.add(-0));   // return 4
// console.log(kthLargest.add(4));   // return 4

// const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));   // return 4
// console.log(kthLargest.add(5));   // return 5
// console.log(kthLargest.add(10));  // return 5
// console.log(kthLargest.add(9));   // return 8
// console.log(kthLargest.add(4));   // return 8
