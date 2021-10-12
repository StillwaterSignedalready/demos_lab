
/**
 * s 仅由括号 '()[]{}' 组成
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
   * 设置3个 stack 类型
   * 限制：
   *   - 出栈符号必须匹配栈顶类型
   *   - 结束时 stack.length 必须为 0
   */
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (s[i] !== stack.pop()) return false; // 这里可能会提前空栈，空栈返回 undefined, 最终一样返回 false
        break;
    }
  }
  return stack.length === 0;
};

const s = "{[]}]";
const res = isValid(s);
console.log('res', res)
