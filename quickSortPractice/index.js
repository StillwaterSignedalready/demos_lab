
/**
 * 将 arr 随机选出 pivot, 重排 左边比 pivot 小 右边比 pivot 大
 * @param {number[]} arr 
 * @param {number} startIndex 
 * @param {number} endIndex 
 * @returns {number}
 */
function partition(arr, startIndex, endIndex) {
  const pivotIndex = (startIndex + endIndex) >> 1;
  const pivot = arr[pivotIndex];
  console.log('pivot', pivot)
  let tmp;
  /**
   * pivot 先与 末尾对调
   * 再双指针: storeIndex walkIndex(i)
   */
  arr[pivotIndex] = arr[endIndex];
  // console.log('--arrarrarr', arr)
  let storeIndex = startIndex;
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivot) {
      // 交换 storeIndex 和 i
      tmp = arr[storeIndex]; // 吃瘪 storeIndex 写成 startIndex
      arr[storeIndex] = arr[i];
      arr[i] = tmp;
      storeIndex++;
    }
  }
  // console.log('==arrarrarr', arr)
  // 最后 storeIndex 写入 endIndex
  arr[endIndex] = arr[storeIndex];
  arr[storeIndex] = pivot;
  return storeIndex;
}


/**
 * 
 * @param {number[]} arr 
 * @param {number} startIndex 
 * @param {number} endIndex 
 */
function quickSort(arr, startIndex, endIndex) {
  if (endIndex <= startIndex) return;
  if (endIndex - startIndex < 3) { // 这个冒泡分支完全可以删掉！
    // console.log('0000', [startIndex, endIndex])
    let tmp;
    for (let i = 1; i <= endIndex - startIndex; i++) { // 冒泡吃瘪
      // console.log('i', i)
      for (let j = startIndex; j <= endIndex - i; j++) {
        // console.log('j', j)
        if (arr[j] > arr[j + 1]) {
          tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          // console.log('arr++', arr)
        }
      }
    }
    return;
  }
  // console.log('------------------------')
  // console.log([startIndex, endIndex])
  const pivotIndex = partition(arr, startIndex, endIndex);
  // console.log('pivotIndex', pivotIndex)
  // console.log('arr', arr)
  // console.log([startIndex, pivotIndex - 1], [pivotIndex + 1, endIndex])
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);

}

// const arr = [6, 2, 5, 8, 1, 7]
const arr = Array(10).fill(0).map(() => Math.floor(Math.random() * 100))
// const arr = [
//   55, 47, 92, 28, 68,
//   87, 55, 31, 54, 90
// ]
// const arr = [47, 54, 31]
console.log('begin - ', arr)
quickSort(arr, 0, arr.length - 1)
console.log('arr', arr)
