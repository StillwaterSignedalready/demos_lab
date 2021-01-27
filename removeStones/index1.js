/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {

  // 策略：应优先移除气口少的石子
  /**
   * 决策分叉 这一步要移除哪个
   * 状态转移 f(stones) = Math.max(...[stones removed one from Any stone that can removed]) + 1
   * 边界条件：没有可以移除的石子
   */


  /**
   * 返回最多能移除的石子数量
   * function getMaxRemovedCount(stonesToDeal, stonesRemained): number {}
   * 决策分叉 - 是否移除数组末尾的石子
   * 边界条件 - 不再有能移除的石子
   * 分解方向 - endIndex 越来越小 能移除的石子越来越少
   * getMaxRemovedCount([1,2,3,4], []) = Math.max(
   *   getMaxRemovedCount([1,2,3], []) + 1,
   *   getMaxRemovedCount([1,2,3], [4])
   * ))
   * O(n power)
   * @param {number[][]} stonesToDeal
   * @param {number[][]} stonesRemained 确定要保留的石子
   * @returns {number}
   */
  // function getMaxRemovedCount(stonesToDeal, stonesRemained) {
  //   // * 边界条件 - 不再有能移除的石子


  //   return Math.max(
  //     getMaxRemovedCount( // 移除 stonesToDeal 的最后一个
  //       stonesToDeal.slice(0, stonesToDeal.length - 1),
  //       [...stonesRemained, stonesToDeal[stonesToDeal.length - 1]]
  //     ) + 1,
  //      // 不移除 stonesToDeal 的最后一个
  //   );
  // }
  // getMaxRemovedCount(stones, []);


};


const stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]];

const res = removeStones(stones)
console.log('res', res)
