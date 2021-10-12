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
   * 先取得中点(双指针两倍速) index1 index2
   * index1 为中点，折叠两端(能否递归？)
   *  */  
  let node1 = head;
  let node2 = head.next; // 吃瘪 node2 = head
  const leftAsc = [];
  const rightDesc = [];
  function walkLeft() {
    leftAsc.push(node1);
    if (!node2.next) return;
    node1 = node1.next;
    node2 = node2.next.next || node2.next;
    walkLeft();
  }
  walkLeft();
  // 此时的 node1 是中点(n 为奇数) 或者 左半边的边界(n 为偶数)
  function walkRight() {
    if (!node1.next) return;
    node1 = node1.next;
    rightDesc.unshift(node1);
    walkRight();
  }
  walkRight();

  for (let i = 0; i < leftAsc.length; i++) {
    leftAsc[i].next = rightDesc[i] || null;
    if (rightDesc[i]) rightDesc[i].next = leftAsc[i + 1] || null;
  }
};

// const nums = [1, 2, 3, 4, 5]
// const nums = [1, 2, 3, 4]
const nums = [1, 2]
const nodeList = nums.map(num => new ListNode(num));
for (let i = 0; i < nums.length - 1; i++) {
  nodeList[i].next = nodeList[i + 1];
}

reorderList(nodeList[0])
console.log('nodeList', nodeList)