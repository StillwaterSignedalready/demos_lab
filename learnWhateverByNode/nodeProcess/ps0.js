// =====================================================
// 欢迎参加有赞前端 Coding 面试
// =====================================================
// 界面介绍：
//   上方设置按钮可以切换语言、字体大小、主题
//   右侧控制台可以显示代码执行结果，可用于编码过程中的 DEBUG
// =====================================================
// Coding 须知：
//   本次 Coding 时间限制为 45 分钟
//   题目难度大致自上向下递增，请量力答题
// =====================================================


/**
 * ## 问题1
 * 实现 getValue 函数，安全的获取目标对象指定 path 的值
 * @params {object | array} value 指定对象
 * @params {string} path
 */

 const object = { 'a': [{ 'b': { 'c': 3 } }] }; // path: 'a[0].b.c'
 const array = [{ "a": { b: [1] } }]; // path: '[0].a.b[0]'
 
 function getValue(obj, path) {
     // TODO
     /**
      * procedure = []
      * 状态机
      * function inArr(char) {
      *      switch() {
      *          return inArr | inIndex
      *      }
      * }
      * function inIndex(char) {
      *      switch() {
      *          return inArr | inIndex
      *      }
      * }
      * function start(char)
      * 
      * 最后遍历 procedure 获取 value
      */
     /**
      * . []
      * "安全" &&
      * 把 path 翻译为 [{ type: 'arrayIndex' | 'attr', content: 'xx' }]
      * - 针对 '.' path.split('.')
      * - 针对 数组
      */
     let procedure = path.split('.');
     procedure.reduce((arr, str) => {
         if (/.*\[[0-9]+\]/.test(str)) {
             // 是否有 .
             if (/.*\[[0-9]+\]/.test(str))
             const [] = str.split('')
             // todo: 解析出 index
             arr.push({
                 type: 'arrayIndex',
                 content: parseInt()
             })
         } else {
             arr.push({
                 type: 'attr',
                 content: str
             })
         }
         return arr;
     }, [])
 
 }
 
 console.log(1, getValue(object, 'a[0].b.c')); // 3
 console.log(2, getValue(array, '[0].a.b[0]')); // 1
 console.log(3, getValue({ a: 1 }, 'a')); // 1
 
 /**
  * ## 问题2
  * 将一个json数据的所有key从下划线改为驼峰
  * @param {object | array} value 待处理对象或数组
  * @returns {object | array} 处理后的对象或数组
  */
 
 const testData = {
     a_bbb: 123,
     a_g: [1, 2, 3, 4],
     a_d: {
         s: 2,
         s_d: 3
     },
     a_f: [1, 2, 3, {
         a_g: 5
     }],
     a_d_s: 1
 }
 
 function mapKeysToCamelCase(data) {
     // TODO
     const walk = (node) => {
         if (Array.isArray(node)) {
             for (const child of node) {
                 walk(child)  
             }
         } else if (typeof node === 'object') {
             for (const key of Object.keys(node)) {
                 const words = key.split('_');
                 const newKey = words
                     .map(str => `${str[0].toUpperCase()}${str.slice(1, str.length)}`)
                     .join('')
                 walk(node[key])
             }
         }
     }
     walk(data)
 }
 
 console.log(mapKeysToCamelCase(testData));
 
 /**
  * ## 问题3
  * 将48位的时间位图格式化成字符串
  * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
  * 
  * 规则描述：
  * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
  * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
  * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
  * 
  * 示例输入：`"110010000000000000000000000000000000000000000000"`
  * 示例输出：`["00:00~01:00", "02:00~02:30"]`
  */
 function timeBitmapToRanges(bitmap) {
     // TODO
     /**
      * 得到区间 spanList = [[0, 1], [7, 10], ...]
      *      let currSpan = []
      *      while () {
      *          
      *      }
      * for (arr of spanList) {
      *      
      * }
      */
 }
 
 console.log(timeBitmapToRanges('111010000000000000000000000000000000000000000011'));