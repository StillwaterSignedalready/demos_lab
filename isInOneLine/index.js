/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  // 注意处理垂直线的情况
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const directive = (y1 - y0) / (x1 - x0);
  if (directive === Infinity || directive === -Infinity) {
    for (const [x] of coordinates) {
      if (x !== x0) return false;
    }
  } else {
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, yi] = coordinates[i];
      const [xii, yii] = coordinates[i - 1];
      const localDir = (yii - yi) / (xii - xi)
      // console.log('localDir', localDir)
      // console.log('directive', directive)
      if (!((directive === localDir) || (directive === (1 / localDir)))) return false;
    }
  }
  return true;
};

// const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
const coordinates = [[2,4],[2,5],[2,8]];

const res = checkStraightLine(coordinates)
console.log('res', res)