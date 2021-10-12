/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  /**
   * 确定起点
   *   左侧开始 遇到一
   * 
   */
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && !flowerbed[i] && !flowerbed[i + 1]) {
      // console.log('1111')
      flowerbed[i] = 1;
      count += 1;
    } else if (i === flowerbed.length - 1 && !flowerbed[i - 1] && !flowerbed[i]) {
      // console.log('2222')
      flowerbed[i] = 1;
      count += 1;
    } else if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      // console.log('3333')
      flowerbed[i] = 1;
      count += 1;
    }
    // console.log('count', count)
    if (count >= n) return true;
  }
  return false;
};

const flowerbed = [0,1,0]
const n = 1
const result = canPlaceFlowers(flowerbed, n)
console.log('flowerbed', flowerbed)
console.log('result', result)