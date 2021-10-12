/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  /**
   * 将 fast 的速度设计为 slow 的两倍， 使得 2s - s = nr
   * 这感觉有点像尺规作图
   */
  do {
    fast = fast.next && fast.next.next;
    slow = slow.next;
    if (!fast) return null;
  } while (fast !== slow)

  /**
   * 设 r 为一圈的长度, a 为起点到入环点的步数, 只要步数是 a + nr 一定会到入环点
   * 此时 slow 走过距离 s = nr, 再走 a 步会到入环点
   */
  fast = head;
  let stepCount = 0;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
    stepCount ++
  }

  return fast;
};