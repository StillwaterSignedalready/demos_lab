/**
 * 楼层 F 临界值
 * 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
 * 翻译翻译：有无数策略(策略定义：选楼层扔 -> 根据是否碎了判断，选楼层扔 -> 根据是否碎了判断，选楼层扔 ... -> 最终达到蛋极少或楼层极少的情况 )，对F变化次数来说，风险最小(最坏情况的变化次数最少)的策略
 * 要确定 F, 最终必然走向这样的两种情况：
 *   1. 鸡蛋只剩一个，从第二楼开始扔到倒数第二楼
 *   2. 楼层只剩一层，
 * @param {number} K 鸡蛋个数
 * @param {number} N 楼层数
 * @return {number}
 */
var superEggDrop = function(K, N) {
  /**
   * - 边界条件
   *   if (N = 1) then return 0
   *   if (N = 2) then return 2
   *   if (K = 1) then return N - 2
   * - 状态转移
   * getMinFloorMvTimes(K, N) = 
   *   min(
   *     ...[0, N].map(
   *       throwFloor => { // 0, 1, 2, ..., N
   *         return max( // 重点！！ 如果不是 max, 实施的过程中就可能出现次数用光了或者蛋用完了，但是
   *           // 碎了 向下
   *           1 + getMinFloorMvTimes(K - 1, throwFloor - 1)
   *           // 没碎 向上
   *           1 + getMinFloorMvTimes(K, N - throwFloor)
   *         )
   *       }
   *     )
   *   )
  //  *   从 a 楼开始
   */
  const answers = Array(K + 1).fill([]).map(() => Array(N + 1).fill(null)); // answers[eggsCount][layerCount]
  const getMinFloorMvTimes = (eggsCount, layerCount) => {
    // console.log('eggsCount', eggsCount)
    // console.log('layerCount', layerCount)
    if (eggsCount === 1) return layerCount;
    if (layerCount === 0) return 0;
    if (layerCount === 1) return 1;
    if (layerCount === 2) return 2;
    if (answers[eggsCount][layerCount]) return answers[eggsCount][layerCount];
    const answer = Math.min(
      //  可使用二分法
      ...Array(layerCount).fill(0).map((x, index) => {
        // throwFloor = index + 1
        return Math.max(
          1 + getMinFloorMvTimes(eggsCount - 1, (index + 1) - 1), // 碎了 向下
          1 + getMinFloorMvTimes(eggsCount, layerCount - (index + 1)), // 没碎 向上
        )
      })
    );
    // Array.isArray(answers[eggsCount]) ?
    answers[eggsCount][layerCount] = answer;
    return answer;
  };
  const finalAnswer = getMinFloorMvTimes(K, N);
  console.log('answers', answers)
  return finalAnswer;
};

const K = 2
const N = 100
// const K = 3
// const N = 2
// const K = 4
// const N = 5000
const res = superEggDrop(K, N);
console.log('res', res)