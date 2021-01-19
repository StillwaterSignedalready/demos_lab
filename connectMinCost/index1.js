var minCostConnectPoints = function (points) {
  const dist = (x, y) => {
    return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
  }

  const n = points.length;
  const dsu = new DisjointSetUnion(n);
  const edges = []; // attention! 从小到大排序

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([dist(i, j), i, j]); //
    }
  }
  edges.sort((a, b) => a[0] - b[0]);

  let ret = 0, num = 1;
  /**
   * 遍历完全图(作为底图)所有的边，且确保短的边先被遍历到
   * 如果该边的两点还不是一个集合，则
   */
  for (const [length, x, y] of edges) {
    if (dsu.unionSet(x, y)) { // 一直到所有点都在一个集合内为止
      console.log(points[x], '    ', points[y])
      console.log(length)
      ret += length;
      num += 1;
      if (num === n) {
        break;
      }
    }
  }
  return ret;
};

class DisjointSetUnion {
  constructor(n) {
    this.n = n;
    this.rank = new Array(n).fill(1);
    this.f = new Array(n).fill(0).map((element, index) => index);
  }

  find(x) {
    if (this.f[x] === x) {
      return x;
    }
    this.f[x] = this.find(this.f[x]);
    return this.f[x];
  }

  unionSet(x, y) {
    let fx = this.find(x), fy = this.find(y);
    if (fx === fy) {
      return false;
    }

    if (this.rank[fx] < this.rank[fy]) {
      [fx, fy] = [fy, fx];
    }
    this.rank[fx] += this.rank[fy];
    this.f[fy] = fx;
    return true;
  }
}

const points = [[2, -3], [-17, -8], [13, 8], [-17, -15]];
// const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const res = minCostConnectPoints(points);
console.log('res', res)
