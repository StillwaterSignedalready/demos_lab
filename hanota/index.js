/**
 * @param {number[]} A source
 * @param {number[]} B hub
 * @param {number[]} C target
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
  move(A, B, C, A.length)
};

function move(source, hub, target, scale) {
  if (scale === 1) return target.push(source.pop());
  // if (scale === 2) { // 可以变快一点点 但不是必要
  //   hub.push(source.pop());
  //   target.push(source.pop());
  //   target.push(hub.pop());
  //   return;
  // }
  move(source, target, hub, scale - 1);
  target.push(source.pop());
  move(hub, source, target, scale - 1);
}

// const A = [1, 0];
const A = [3, 2, 1, 0];
const B = [];
const C = [];
A.name = 'A'
B.name = 'B'
C.name = 'C'
hanota(A, B, C)
console.log('A', A);
console.log('B', B);
console.log('C', C);


// function move(A, B, C, scale) {
//   if (scale <= 0) return;
//   if (scale === 2) {
//     B.push(A.pop());
//     C.push(A.pop());
//     C.push(B.pop());
//     return;
//   }
//   if (A[A.length - 1] === C[C.length - 1] + 1) return C.push(A.pop());
//   move(A, C, B, A.length - 1);
//   C.push(A.pop());
//   move(B, A, C, B.length); // bug所在：B.length
// }
