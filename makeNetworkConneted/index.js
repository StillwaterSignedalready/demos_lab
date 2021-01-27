/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  /**
   * 检测图中的环 - 比较 edges.length 和 (连通分量点数 - 1)
   * 一个连通分量可以抽象为一个点 内部多出的边作为备用边
   * 所以需要计算的量： 1. setCount 连通分量的数量 2. redundantEdgeCount 多余边的总数
   * if (redundantEdgeCount > setCount - 1) return setCount - 1;
   * 连通分量的数量 --- 在构建并查集的过程中计算, 初始化为点的数量 调用一次(有效的, 原本两点都在一个连通分量的不算) merge 减一
   * 多余边的总数 --- connections.length - 累加每个连通分量(连通分量的边总数 - (连通分量的节点数 - 1))
   */
  // * 构建并查集连通分量
  const udjs = new UnionDisJointSet(n);
  for (const [index1, index2] of connections) {
    udjs.merge(index1, index2);
  }
  // * 需要计算的量： 1. setCount 连通分量的数量 2. redundantEdgeCount 多余边的总数
  console.log('udjs.setCount', udjs.setCount)
  /**
   * connections.length - 累加每个连通分量(连通分量的边总数 - (连通分量的节点数 - 1))
   * const redundantEdgeCount = connections.length - Array.from(setIndexList).reduce((sum, setIndex) => {
   *    连通分量的边总数 = 
   *    const localRedundant = 连通分量的边总数 - (udjs.rank[setIndex] - 1)
   *    return sum + localRedundant
   * }, 0)
   */
  const setIndexList = new Set();
  for (let i = 0; i < n; i ++) {
    setIndexList.add(udjs.findSet(i))
  }
  console.log('setIndexList', setIndexList)
  const setIndex2edgeCount = {};
  for (const [index1, index2] of connections) {
     const setIndex = udjs.findSet(index1)
     setIndex2edgeCount[setIndex] = (setIndex2edgeCount[setIndex] || 0) + 1;
  }
  console.log('setIndex2edgeCount', setIndex2edgeCount)
  console.log('connections.length', connections.length)
  // 多余边的总数 = 总边数 - 所有连通分量的必要边数之和
  const redundantEdgeCount = connections.length - Array.from(setIndexList).reduce((sum, setIndex) => {
    // 连通分量的必要边数
     const localNescesaryEdgeCount = setIndex2edgeCount[setIndex] ? udjs.rank[setIndex] - 1 : 0;
     console.log('-----------------------------')
     console.log('-- setIndex', setIndex)
     console.log('udjs.rank', udjs.rank)
     console.log('-- localNescesaryEdgeCount', localNescesaryEdgeCount)
     return sum + localNescesaryEdgeCount;
  }, 0)
  console.log('redundantEdgeCount', redundantEdgeCount) // wrong?
  console.log('setIndexList.size', setIndexList.size)
  if (redundantEdgeCount >= setIndexList.size - 1) {
    return setIndexList.size - 1;
  } else {
    return -1;
  }
};

class UnionDisJointSet {
  constructor(verticeCount) {
    this.parent = Array(verticeCount).fill(null).map((foo, index) => index); // index or -1
    this.rank =  Array(verticeCount).fill(1) // 连通分量的节点数量
    this.setCount = verticeCount;
  }

  showParent(size = 1) { // 格式化展示 this.parent, 只用于 debug
    const showedList = this.parent.slice(1);
    const matrix = [];
    for (let i = 0; i < showedList.length; i++) {
      i % size === 0 ? matrix.push([showedList[i]]) : matrix[matrix.length - 1].push(showedList[i])
    }
    let result = '\n';
    for (const arr of matrix) {
      result += `\n${arr.join(', ')}`
    }
    return result;
  }

  countDisSet(index) {
    const setRootIndex = this.findSet(index);
    return this.rank[setRootIndex];
  }

  merge(downstream, upstream) {
    const rootIndex = this.findSet(upstream);
    const subSetIndex = this.findSet(downstream);
    if (rootIndex === subSetIndex) return;
    this.rank[rootIndex] += this.rank[subSetIndex];
    // 路径压缩
    this.parent[subSetIndex] = rootIndex;
    this.setCount -= 1;
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

// const n = 6;
// const connections = [[0,1], [0,2], [0,3], [1,2]];
const n = 4 ;
const connections = [[0,1],[0,2],[1,2]];
const result = makeConnected(n, connections);
console.log('result', result)

