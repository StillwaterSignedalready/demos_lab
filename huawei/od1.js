// /**
//  * 相同字符连续出现的最大次数
//  * 边界条件: 长度为0、1
//  */

// // const inputStr = readline();
// const inputStr = 'world';

// if (!inputStr) return 0;
// if (inputStr.length === 1) return 1;

// /**
//  * let max = 1;
//  * let count = 1;
//  * 从 inputStr[1] 开始遍历
//  *  if 与前一个相同 then { count++; max = Math.max(max, count) }
//  *  else count = 1
//  * 
//  * 最后 max = Math.max(max, count)
//  */

// let max = 1;
// let count = 1;

// let index = 1;

// while (inputStr[index]) {
//     if (inputStr[index] === inputStr[index - 1]) {
//         count++;
//         max = Math.max(max, count); // 也可以优化为遇到不同项在更新 max
//     } else {
//         count = 1
//     }
//     index++;
// }
// max = Math.max(max, count);

// console.log(max)

/**
 * 100 个人围成圈
 * 1 < M < 100
 * 按题意循环筛除项目 
 * 双向环形链表
 */
 const M = 25;

 // if (M <= 1 || M >= 100) {
 //     console.log('ERROR!')
 // } else {
 //     const numList = Array(101).fill(0).map((_, index) => index)
 //     const arr = Array(100).fill(0).map((_, index) => ({
 //         index: index + 1
 //     }));
 
 //     for (let i = 0; i < arr.length; i++) {
 //         const element = arr[i];
 //         element.left = arr[i - 1];
 //         element.right = arr[i + 1];
 //     }
 
 //     arr[0].left = arr[99]
 //     arr[99].right = arr[0]
 
 //     const dummyHead = { right: arr[0] };
 
 //     // 每次都生成新数组，稍微浪费点内存，但是可读性好一点
 //     let total = arr.length;
 //     let currNode = dummyHead;
 //     let currCount = 0;
 //     while (total >= M) {
 //         currNode = currNode.right;
 //         currCount++;
 //         if (currCount % M === 0) {
 //             // 抽出 currNode
 //             const { left, right } = currNode;
 //             left.right = right;
 //             right.left = left;
 //             total--;
 //             numList[currNode.index] = null;
 //         }
 //     }
 
 //     console.log(numList.filter(v => v).join(', '))
 // }
 
 
 // 完全连续交替方波信号 011110 0000 0101010 0101110
 
 // const inputStr = '0111100001010100101110'
 const inputStr = '00101010101100001010010'
 // const inputStr = '000'
 
 /**
  * 1. 先拆成信号
  * 2. 过滤出连续方波信号
  * 3. 得出最长的
  */
 
 const signalList = inputStr.split('00').filter(s => s).map(str => {
     if (str[0] !== '0') str = `${0}${str}`;
     if (str[str.length - 1] !== '0') str = `${str}${0}`;
     return str;
 });
 
 const uniqueSignalList = Array.from(new Set(signalList))
 
 let longestSquareSignal = '';
 const pattern = /^0(10)+$/
 for (let i = 0; i < uniqueSignalList.length; i++) {
     const str = uniqueSignalList[i];
     if (pattern.test(str) && str.length > longestSquareSignal.length) longestSquareSignal = str;
 }
 
 if (!longestSquareSignal) {
     console.log(-1)
 } else {
     console.log(longestSquareSignal)
 }
 