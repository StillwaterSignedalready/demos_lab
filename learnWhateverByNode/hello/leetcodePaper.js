// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
/** @class */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @typedef {{val:number, next:ListNode}} ListNode
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  /** @type {1|0} */
  let carry = 0;
  const startNode = {};
  let currNewNode = startNode;
  let currLeftNode = l1;
  let currRightNode = l2;
  // do while!?
  // 判断 新开辟 next
  while (currLeftNode && currRightNode) {
    const newVal = currLeftNode.val + currRightNode.val + carry;
    // handle currNewNode.val
    if (newVal > 9) {
      currNewNode.val = newVal % 10;
      carry = 1;
    } else {
      currNewNode.val = newVal;
      carry = 0;
    }
    // change currNewNode variable to next
    currLeftNode = currLeftNode.next;
    currRightNode = currRightNode.next;
    if (currLeftNode && currRightNode) {
      currNewNode.next = {};
      currNewNode = currNewNode.next;
    }
  }
  // one of List is end now, copy the rest List and plus last carry
  if (currLeftNode || currRightNode) {
    currNewNode.next = currLeftNode || currRightNode;
    currNewNode = currNewNode.next;
    while(carry && currNewNode) {
      const newVal = currNewNode.val + carry;
      if (newVal > 9) {
        // carry remain 1
        currNewNode.val = newVal % 10;
        if (currNewNode.next) {
          currNewNode = currNewNode.next;
        } else {
          currNewNode.next = { val: carry };
          break;
        }
      } else {
        currNewNode.val = newVal;
        carry = 0; // and loop ends
      }
    }
  } else if (carry) {
    currNewNode.next = { val: carry };
  }

  return startNode
};


function createLL(arr) {
  const l1 = {};
  let currL1 = l1;
  arr.forEach((val, i) => {
    currL1.val = val;
    if (i < arr.length - 1) {
      currL1.next = {};
      currL1 = currL1.next;
    }
  });
  return l1;
}

/** @param {{val:number,next:{}}} */
function lltoString(ll) {
  let str = [];
  while(ll) {
    str.push(ll.val);
    ll = ll.next;
  }
  return '数字：' + str.reverse().join('')
}

// const a1 = [2,4,9];
// const a2 = [5,6,4];

// const a1 = [1];
// const a2 = [9,9];

const a1 = [5];
const a2 = [5];

// const a1 = [9,8];
// const a2 = [1];

const l1 = createLL(a1);
const l2 = createLL(a2);
console.log(lltoString(l1), lltoString(l2))

const lr = addTwoNumbers(l1, l2);
console.log(lltoString(lr))