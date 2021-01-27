/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const stoneLength = stones.length;
  // * 建立 邻接矩阵
  const relations = {}; // stoneIndex -> stoneIndex[]
  for (const [i, [xi, yi]] of stones.entries()) {
    for (const [j, [xj, yj]] of stones.entries()) {
      if (i !== j && (xi === xj || yi === yj)) {
        Array.isArray(relations[i]) ?
          relations[i].push(j) :
          relations[i] = [j];
      }
    }
  }
  // console.log('relations', relations)
  // * for (每个联通分量) 删除至只剩一个点
  let removeCount = 0;
  const stoneIndex2remove = new Set(); // Set<stoneIndex>
  function depthFirst(stoneIndex) {
    // console.log('relations[stoneIndex]', relations[stoneIndex])
    if (!Array.isArray(relations[stoneIndex])) return;
    for (const neighborIndex of relations[stoneIndex]) {
      // console.log('stoneIndex2remove', stoneIndex2remove)
      if (!stoneIndex2remove.has(neighborIndex)) {
        stoneIndex2remove.add(neighborIndex);
        // console.log('neighborIndex', neighborIndex)
        removeCount += 1;
        depthFirst(neighborIndex);
      }
    }
  }
  // * 计算结果：删除多少个点
  for (let i = 0; i < stoneLength; i++) {
    stoneIndex2remove.add(i); // 对于每个联通分量 先加一个点作为保留的点
    depthFirst(i) // 删除联通分量中其余的点
  }
  return removeCount;
};

// const stones = [[0,0],[0,1],[1,0]];
const stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]];

const res = removeStones(stones)
console.log('res', res)
