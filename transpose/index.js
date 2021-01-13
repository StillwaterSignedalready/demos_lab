/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const colCountOfA = A[0].length;
  const result = [];
  for (let i = 0; i < colCountOfA; i++) {
    result.push(A.map(row => row[i]));
  }
  return result;
};

const matrix = [
  [1,2,3],
  [4,5,6]
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9],
]

const res = transpose(matrix);
console.log('res', res)