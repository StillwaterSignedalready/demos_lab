/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  /**
   * 如果不能种 i += 2
   */
  const fLength = flowerbed.length;
  for (let i = 0; i < fLength; i += 2) {
    if (!flowerbed[i]) {
      if (!flowerbed[i + 1] || i === fLength - 1) {
        n--;
        // console.log('i', i)
        flowerbed[i] = 1;
      } else {
        i++;
      }
      flowerbed[i] = 1;
    }
    // console.log('n', n)
    if (n <= 0) return true;
  }
  return false;
};

const flowerbed = [0, 1, 0, 0, 0]
const n = 3
const result = canPlaceFlowers(flowerbed, n)
console.log('flowerbed', flowerbed)
console.log('result', result)