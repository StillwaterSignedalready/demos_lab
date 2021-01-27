/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]} 每次消除操作对应掉落的砖块数目
 */
var hitBricks = function(grid, hits) {
  // const hitCount = hits.length;
  const m = grid[0].length; // 列数
  const n = grid.length; // 行数
  const getVerticeId = (rowIndex, colIndex) => rowIndex * m + colIndex + 1
  /**
   * 由于 merge 的不可逆性(存疑)，要把敲碎的过程倒过来，视为补砖，从最后一步开始
   * 构造并查集
   * for (hit of hits.reverse()) {
   *   补砖前的 根节点联通分量的节点数量(通过外部let变量保存)
   *   merge(hit, root) merge(hit, 上下左右)
   *   前后的根节点连通分量节点数量相减
   * }
   */
  const cleanGrid = grid.map(row => row.map(val => val));
  for (const [rowIndex, colIndex] of hits) cleanGrid[rowIndex][colIndex] = 0;
  console.log('cleanGrid', cleanGrid)

  const unionDisJointSet = new UnionDisJointSet(m * n + 1); // 多一个 root
  // 从root开始遍历，构建root联通分量 0 为 root
  const touchedVerticeIndex = new Set();
  // 优化点：dfs 换成 for 循环
  const dfs = (rowIndex, colIndex, parentId) => { // verticeId: 左上角开始，从左往右从上到下数第几个
    const verticeId = getVerticeId(rowIndex, colIndex);
    // console.log('verticeId', verticeId)
    if (touchedVerticeIndex.has(verticeId)) return;
    // console.log('')
    if (cleanGrid[rowIndex][colIndex]) {
      console.log('dfs - verticeId', verticeId)
      touchedVerticeIndex.add(verticeId);
      // console.log('touchedVerticeIndex--', touchedVerticeIndex)
      unionDisJointSet.merge(verticeId, parentId);
      if (rowIndex - 1 >= 0) dfs(rowIndex - 1, colIndex, verticeId);
      if (colIndex - 1 >= 0) dfs(rowIndex, colIndex - 1, verticeId);
      if (rowIndex + 1 <= n - 1) dfs(rowIndex + 1, colIndex, verticeId);
      if (colIndex + 1 <= m - 1) dfs(rowIndex, colIndex + 1, verticeId);
    }
  };
  // console.log('touchedVerticeIndex', touchedVerticeIndex)
  for (let i = 0; i < m; i ++) {
    dfs(0, i, 0);
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dfs(i, j, getVerticeId(i, j))
    }
  }
  console.log('-- unionDisJointSet.parent', unionDisJointSet.showParent(m))
  console.log('== unionDisJointSet.rank', unionDisJointSet.rank[0])
  const result = [];

  for (const [rowIndex, colIndex] of hits.reverse()) {
    cleanGrid[rowIndex][colIndex] = grid[rowIndex][colIndex];
    if (!cleanGrid[rowIndex][colIndex]) { // 节点在底图内才放行
      result.unshift(0);
      continue
    };
    const verticeId = getVerticeId(rowIndex, colIndex);
    const preCount = unionDisJointSet.countDisSet(0);
    console.log('=====================', `[${rowIndex}, ${colIndex}]`)
    console.log('@ preCount', preCount)
    console.log('cleanGrid', cleanGrid)
    if (rowIndex === 0) unionDisJointSet.merge(verticeId, 0);
    // 优化点 抽象四个方向为 [ [0, 1], [0, -1], ...  ]
    if (rowIndex - 1 >= 0 && cleanGrid[rowIndex - 1][colIndex])
      unionDisJointSet.merge(getVerticeId(rowIndex - 1, colIndex), verticeId)
    if (colIndex - 1 >= 0 && cleanGrid[rowIndex][colIndex - 1])
      unionDisJointSet.merge(getVerticeId(rowIndex, colIndex - 1), verticeId)
    if (rowIndex + 1 <= n - 1 && cleanGrid[rowIndex + 1][colIndex])
      unionDisJointSet.merge(getVerticeId(rowIndex + 1, colIndex), verticeId)
    if (colIndex + 1 <= m - 1 && cleanGrid[rowIndex][colIndex + 1])
      unionDisJointSet.merge(getVerticeId(rowIndex, colIndex + 1), verticeId)
    console.log('-- unionDisJointSet.parent', unionDisJointSet.showParent(m))
    const afterCount = unionDisJointSet.countDisSet(0);
    console.log('@ afterCount', afterCount)
    result.unshift(afterCount !== preCount ? afterCount - preCount - 1 : 0);
  }
  return result;
};

class UnionDisJointSet {
  constructor(verticeCount) {
    this.parent = Array(verticeCount).fill(null).map((foo, index) => index); // index or -1
    this.rank =  Array(verticeCount).fill(1) // 连通分量的节点数量
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

  showRank(size = 1) { // 格式化展示 this.parent, 只用于 debug
    const showedList = this.rank.slice(1);
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

  countDisSet(index) { // 性能太差 应有缓存
    const setRootIndex = this.findSet(index);
    return this.rank[setRootIndex];
  }

  merge(downstream, upstream) { // 如果 merged 返回false
    const rootIndex = this.findSet(upstream);
    const subSetIndex = this.findSet(downstream);
    if (rootIndex === subSetIndex) return;
    // console.log('merge', downstream, ' , ' , rootIndex)
    this.rank[rootIndex] += this.rank[subSetIndex];
    // 路径压缩
    this.parent[subSetIndex] = rootIndex;
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


const grid = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
];
const hits = [
  [0, 2], // 0
  [2, 0], // 0
  [0, 1], // 1
  [1, 2], // 0
]; // - [0,0,1,0]
// const grid = [
//   [1],
//   [1],
//   [1],
//   [1],
//   [1]
// ];
// const hits = [
//   [3, 0],
//   [4, 0],
//   [1, 0],
//   [2, 0],
//   [0, 0]
// ]; // - [1,0,1,0,0]
// const grid = [
//   [1, 0, 0, 0],
//   [1, 1, 0, 0]
// ];
// const hits = [
//   [1, 1],
//   [1, 0]
// ]; // -
// const grid = [
//   [1, 0, 0, 0],
//   [1, 1, 1, 0]
// ];
// const hits = [
//   [1, 0],
// ]; // -

const result = hitBricks(grid, hits)
console.log('result', result)