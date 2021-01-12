/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n <= 0) return [];
  const result = [];
  const finalLen = 2 * n;
  // 从左到右 最左一定是 左括号 
  // 每次 leftCount += 1; stackCount += 1
  // 每次 rightCount += 1; stackCount -= 1
  // stackCount 归零时 只能追加 （
  function addParan(currStr, leftCount, rightCount, stackCount) {
    if (currStr.length >= finalLen) return result.push(currStr);
    if (stackCount === 0) {
      addParan(`${currStr}(`, leftCount - 1, rightCount, stackCount + 1); // 从左到右 最左一定是 左括号 
    } else {
      if (rightCount >= 1) addParan(`${currStr})`, leftCount, rightCount + 1, stackCount - 1);
      if (leftCount >= 1) addParan(`${currStr}(`, leftCount - 1, rightCount, stackCount + 1);
    }
  }

  addParan('', n, n, 0);
  return result;
};

const result = generateParenthesis(2);
console.log('result', result)