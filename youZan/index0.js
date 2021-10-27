
/**
 * ## 问题1
 * 实现 getValue 函数，安全的获取目标对象指定 path 的值
 * @params {object | array} value 指定对象
 * @params {string} path
 */

const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'

/**
 * 
 * @param {{}} obj 
 * @param {string} path 
 */
function getValue(obj, path) {
    if (path[0] !== '[') path = `.${path}`;
    let currNode = obj;
    for (let i = 0; i < path.length; i++) {
        const char = path[i];
        if (char === '[') {
            /**
             * 取得 index;
             * 更新 currNode
             * i = ]之后的第一个;
             */
            try {
                const [indexStr] = path.slice(i + 1).split(']')
                currNode = currNode[Number(indexStr)];
                i += (indexStr.length + 1); // 用 while 循环 可读性更好
            } catch (error) {
                return undefined;
            }
        } else if (char === '.') {
            // i = .|[ 的index;
            try {
                const [attr] = path.slice(i + 1).split(/\.|\[/)
                currNode = currNode[attr];
                i += attr.length;
            } catch (error) {
                return undefined;
            }
        }
    }
    return currNode;
}

console.log(1, getValue(object, 'a[0].b.c')); // 3
console.log(2, getValue(array, '[0].a.b[0]')); // 1
console.log(3, getValue({ a: 1 }, 'a')); // 1