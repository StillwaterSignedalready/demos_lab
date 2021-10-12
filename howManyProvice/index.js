/**
 * 图 遍历
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  // cityCount = 城市的数量
  const cityCount = isConnected.length;
  // provinceCount = 省的数量
  let provinceCount = 0;
  // touchedCity = { [number]: boolean } 缓存已被 touch 的 城市
  const touchedCity = {};
  // console.log('isConnected', isConnected)
  function walkProvinceFromCity(cityIndex) {
    // console.log('cityIndex', cityIndex)
    // console.log('isConnected[cityIndex]', isConnected[cityIndex])
    touchedCity[cityIndex] = true
    const nerborIsConnected = isConnected[cityIndex];
    for (let neiborIndex = 0; neiborIndex < nerborIsConnected.length; neiborIndex++) { // i
      if (nerborIsConnected[neiborIndex] && !touchedCity[neiborIndex]) {
        // console.log(cityIndex, '   ', neiborIndex)
        walkProvinceFromCity(neiborIndex)
      }
    }
  }
  /**
   * for 每个城市 , if (current城市 未被 touch) then {
   *    provinceCount + 1
   *    缓存所有与 current城市 直接、间接相连的城市
   * }
   */
  for (let cityIndex = 0; cityIndex < isConnected.length; cityIndex++) {
    if (!touchedCity[cityIndex]) {
      provinceCount += 1;
      walkProvinceFromCity(cityIndex);
    }
  }
  // -> 得出省的数量
  return provinceCount;
};



const isConnected = [
  // [ 1, 0, 0, 0 ],
  // [ 0, 1, 0, 0 ],
  // [ 0, 0, 1, 0 ],
  // [ 0, 0, 0, 1 ]

  [ 1, 1, 0 ],
  [ 1, 1, 0 ],
  [ 0, 0, 1 ]
];

const result = findCircleNum(isConnected)
console.log('result', result)