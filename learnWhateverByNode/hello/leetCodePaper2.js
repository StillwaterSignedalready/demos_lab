/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  /** stack */
  // const stack = [];
  let layerCount = 0;
  // let leftParenIndex;
  let char;
  let result = '';
  // const ParenIndexToRm = [];
  for (let i = 0; i < S.length; i++) {
    char = S[i];
    switch (char) {
      case '(':
        if (layerCount !== 0) result = result + char;
        layerCount += 1;
        break;
      case ')':
        layerCount -= 1;
        if (layerCount !== 0) result = result + char;
        break;
      default:
        break;
    }
  }
  
  return result;
};

const str = "(()())(())";
console.log(removeOuterParentheses(str))