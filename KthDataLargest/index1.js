class MinHeap {
  constructor(k, nums) {
    this.heap = []; // 顶部最小
    this.k = k;
  }
  add(num) {
    if (this.heap.length < this.k) { // 冒泡 保证最小的在堆顶
      this.heap.push(num);
      this.up(this.heap.length - 1);
    } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.down(0);
    }
    console.log(' @ this.heap', this.heap)
  }
  up(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1; // i 的父节点, i - 1 is even -> i 是左节点 else 是右节点
      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        break;
      }
    }
  }
  down(i) { // 0 大的向下冒泡 二叉树扁平化 局部有序
    while (2 * i + 1 < this.heap.length) {
      let child = 2 * i + 1;
      // 节点下层的两个节点 与小的那个交换(左或者右)
      if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
        console.log(' << this.heap', `${this.heap[child]}, ${this.heap[child + 1]}`)
        child++;
      }
      if (this.heap[i] > this.heap[child]) {
        [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]];
        i = child;
      } else {
        break;
      }
    }
  }
}

var KthLargest = function (k, nums) {
  this.heap = new MinHeap(k, nums);
  for (let i = 0; i < nums.length; i++) {
    this.heap.add(nums[i]);
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.add(val);
  return this.heap.heap[0];
};


const kthLargest = new KthLargest(3, [1, 1]);
console.log(kthLargest.add(1));
console.log(kthLargest.add(1));
console.log('=====================')
console.log(kthLargest.add(3));
console.log(kthLargest.add(3));
console.log(kthLargest.add(3));
console.log(kthLargest.add(4));
console.log(kthLargest.add(4));
console.log(kthLargest.add(4));

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
