/**
 * 1 <= dominoes[i][j] <= 9
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const content2count = {};
  for (const [head, foot] of dominoes) {
    if (content2count[`${head}-${foot}`]) {
      content2count[`${head}-${foot}`] += 1;
    } else if (content2count[`${foot}-${head}`]) {
      content2count[`${foot}-${head}`] += 1;
    } else {
      content2count[`${head}-${foot}`] = 1;
    }
  }
  console.log('content2count', content2count)
  return Object.keys(content2count).reduce((sum, key) => {
    const count = content2count[key];
    for (let i = 1; i < count; i++) {
      sum += i;
    }
    return sum;
  }, 0)
};

// const dominoes = [[1,2],[2,1],[3,4],[5,6]];
const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]];
const res = numEquivDominoPairs(dominoes);
console.log('res', res)
