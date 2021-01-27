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
   * 定义 answers[K][m] K个鸡蛋扔m次能达到的最多楼层数
   * in other words：K个蛋扔m次的探测能力能够覆盖的范围多大
   * 以虚拟的一层m为原点 碎了往下 没碎往上
   * answers[K][m] = 碎了后向下覆盖的范围 + 1 + 没碎向上覆盖的范围
   * - 状态转移 answers[K][m] = answers[K - 1][m - 1] + 1 + answers[K][m - 1]
   * - 边界条件
   *   if (m = 0) then return 0
   *   if (K = 0) then return 0
   */
  const answers = Array(K + 1).fill([]).map(() => Array(N + 1).fill(0)); // answers[eggsCount][layerCount]
  // 扔1次行不行？ 扔2次行不行？ 扔3次行不行？...
  let m = 0;
  while (answers[K][m] < N) {
    m += 1;
    for (let k = 1; k <= K; k++) {
      answers[k][m] = answers[k - 1][m - 1] + 1 + answers[k][m - 1];
    }
  }
  // console.log('answers', answers)
  return m;
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