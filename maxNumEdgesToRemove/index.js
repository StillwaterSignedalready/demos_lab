/**
 * @param {number} n 节点数量
 * @param {number[][]} edges edges[i] = [类型, 节点1, 节点2] 类型 1|2|3
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  /**
   * 优先删除非万能的边
   * 先分别把单人内 多余的边删除(优先删除跟万能边重合的边)
   * for (const type of [1, 2]) {
   *   删除所有与万能边重合的边 合入sum
   *   计算多余边的数量(根据点的数量和边的数量) 合入sum
   * }
   */
};