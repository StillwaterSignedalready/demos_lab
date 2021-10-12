/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  /**
   * 并查集
   */
  /**
   * 初始化 result 为 1 点的数量
   * 遍历所有 1 点 如果左上方有 1 则 result--
   */
  // let result = grid.length * grid[0].length;
  
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid.length; j++) {
  //     if (grid[i][j] === '1') result++;
      
  //   }
  // }

  return result;
};

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
const res = numIslands(grid);
console.log('res', res)
