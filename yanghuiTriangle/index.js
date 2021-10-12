/**
 * @param {number} rowIndex 从 0 开始
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  const rowOne = [1, 1];
  if (rowIndex === 1) return rowOne;
  let result = rowOne;
  for (let i = 2; i <= rowIndex; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      result[j] = result[j] + result[j + 1];
    }
    /**
     * 最后一项换成1
     * 头部推入1
     */
    result[result.length - 1] = 1;
    result.unshift(1);
  }
  return result;
};

const rowIndex = 3;
const res = getRow(rowIndex);
console.log('res', res)
