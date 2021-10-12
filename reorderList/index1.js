function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return head;
  /**
   * 1. 先算出链表的长度 n
   * 2. 再递归
   */
  let n = 0; // 1?
  let currNode = head;
  while (currNode) {
    n++;
    currNode = currNode.next;
  }
  reorder(head, n);
};

/**
 * 栈底 >>> 栈顶
 * 参数head 1 -> 2 -> 3
 * return 4 -> 5
 * 1| head.next
 *  |2| head.next
 *  | | 3| return head.next
 *  |4| return.next
 * 5| return.next
 * @param {*} head 
 * @param {number} probe 二倍速指针
 */
function reorder(head, probe) {
  // 边界条件
  if (probe === 1) {
    const rightNode = head.next;
    head.next = null;
    return rightNode;
  }
  if (probe === 2) {
    const rightNode = head.next.next;
    head.next.next = null;
    return rightNode;
  }
  /**
   * 中点为栈顶(边界条件-)
   * 栈顶一下的每层：将左右区间的节点配对
   *  */
  const rightNode = reorder(head.next, probe - 2)
  const afterHead = head.next;
  const afterRightNode = rightNode.next;
  // leftNode is head
  head.next = rightNode;
  rightNode.next = afterHead;
  return afterRightNode;
}

const nums = [1, 2, 3, 4, 5]
// const nums = [1, 2, 3, 4]
// const nums = [1, 2]
const nodeList = nums.map(num => new ListNode(num));
for (let i = 0; i < nums.length - 1; i++) {
  nodeList[i].next = nodeList[i + 1];
}

reorderList(nodeList[0])
console.log('nodeList', nodeList)