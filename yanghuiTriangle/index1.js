/**
 * @param {number} rowIndex 从 0 开始
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = [];
  let curr = 1;
  for (let i = 0; i <= rowIndex; i++) {
    result.push(curr);
    curr = cur * (rowIndex - i) / (i + 1);
  }
};

const rowIndex = 3;
const res = getRow(rowIndex);
console.log('res', res)
