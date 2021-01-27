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
  const answers = Array(K + 1).fill([]).map(() => Array(N + 1).fill(0)); // answers[eggsCount][layerCount]
  for (let i = 0; i <= N; i++) {
    answers[1][i] = i;
  }
  for (let i = 0; i <= K; i++) {
    answers[i][0] = 0;
    answers[i][1] = 1;
    answers[i][2] = 2;
  }
  // console.log('prev answers', answers)
  for (let i = 2; i <= K; i++) {
    for (let j = 3; j <= N; j++) {
      const maxCosts = [];
      for (let layer = 0; layer < j; layer++) {
        maxCosts.push(Math.max(
          1 + answers[i - 1][(layer + 1) - 1], // 碎了 向下
          1 + answers[i][j - (layer + 1)], // 没碎 向上
        ));
      }
      answers[i][j] = Math.min(...maxCosts);
      console.log(`${i}, ${j}`, maxCosts.indexOf(answers[i][j]))
      // for (let layer = 0; layer < j; layer++) {
      //   answers[i][j] = j;
      //   answers[i][j] = Math.min(
      //     answers[i][j],
      //     Math.max(
      //       1 + answers[i - 1][(layer + 1) - 1], // 碎了 向下
      //       1 + answers[i][j - (layer + 1)], // 没碎 向上
      //     ),
      //   );
      // }
    }
  }
  // console.log('answers', answers)
  const finalAnswer = answers[K][N];
  return finalAnswer;
};

// const K = 6
// const N = 10000
const K = 2
const N = 100
// const K = 3
// const N = 2
// const K = 4
// const N = 5000
const res = superEggDrop(K, N);
console.log('res', res)