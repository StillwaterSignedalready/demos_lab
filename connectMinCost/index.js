/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const pointsSize = points.length;
  const calcDist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
  /**
   * 最小生成树, 以完全图作为底图
   * - 初始化并查集
   * - 构建 edges: List<[distance, point1, point2][]>
   * - edges从小到大排序
   * - 遍历 edges, 只在 edge 的两端点尚未在同一连通分量内时放行，edge的dist计入结果
   */
  const edges = [];
  for (let i = 0; i < pointsSize; i++) {
    for (let j = 0; j < pointsSize; j++) {
      if (i !== j) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        edges.push([
          calcDist(points[i], points[j]),
          i,
          j,
        ])
      }
    }
  }
  edges.sort((p1, p2) => p1[0] - p2[0]);
  // console.log('edges', edges)
  const unionDisJointSet = new UnionDisJointSet(pointsSize);
  let result = 0;
  for (const edge of edges) {
    const [dist, point1Index, point2Index] = edge;
    if (unionDisJointSet.findSet(point1Index) !== unionDisJointSet.findSet(point2Index)) {
      unionDisJointSet.merge(point1Index, point2Index);
      result += dist;
    }
  }
  return result;
};


class UnionDisJointSet {
  constructor(verticeCount) {
    this.parent = Array(verticeCount).fill(null).map((foo, index) => index); // index or -1
  }

  merge(index1, index2) { // 如果 merged 返回false
    // 路径压缩
    this.parent[this.findSet(index1)] = this.findSet(index2);
  }
  /**
   * @returns {number} index
   */
  findSet(index) {
    if (index !== this.parent[index]) {
      this.parent[index] = this.findSet(this.parent[index]); // 路径压缩
    };
    return this.parent[index];
  }
}

const points = [[2, -3], [-17, -8], [13, 8], [-17, -15]];
// const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const res = minCostConnectPoints(points);
console.log('res', res)
