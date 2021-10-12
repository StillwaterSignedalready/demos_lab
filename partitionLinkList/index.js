/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x boundary
 * @return {ListNode}
 */
var partition = function(head, x) {
  /**
   * - 找到第一个大于等于 x 的节点 boundary
   * - 从 boundary 开始遍历，把每个小于 boundary 的移到最前面
   */
  let walker = head;
  let boundaryLeft = null;
  while (walker && !(walker.val >= x)) {
    boundaryLeft = walker; // boundaryLeft 始终是 boundary 左侧第一个节点
    walker = walker.next;
  }

  let boundary = walker;
  let leftWalker = walker;
  while (walker && walker.next) {
    walker = walker.next;
    if (walker.val < x) {
      leftWalker.next = walker.next; // 右侧 拔除 walker

      // walker 嵌入左侧， boundaryLeft -> walker -> boundary
      walker.next = boundary;
      if (boundaryLeft) {
        boundaryLeft.next = walker;
      } else {
        head = walker;
      }
      boundaryLeft = walker;
      walker = leftWalker;
    } else {
      leftWalker = leftWalker.next;
      walker = leftWalker;
    }
  }
  // edit ok
  return head;
};

// const vals = [1, 4, 3, 2, 2, 5];
// const x = 3;
const vals = [2, 1];
const x = 2;

const heads = vals.map(int => new ListNode(int));
for (let i = 0; i < heads.length - 1; i++) {
  heads[i].next = heads[i + 1];
}
console.log('heads', heads)

let res = partition(heads[0], x);
let head = heads[0];
console.log('[')
while (res) {
  console.log(res.val , ',')
  res = res.next;
}
console.log(']')