function bubbleSort(arr) {
  for (let i = arr.length; i >= 0 ; i--){
    for (let j = i ; j < arr.length; j++){
      if (arr[j] > arr[j+1]) {
        // console.log(arr[j], arr[j+1])
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}


function mergeSort(arr) { // arr: number[]
  // console.log(arr)
  if (arr.length > 2) {
    const halfSize = Math.floor(arr.length/2);
    const leftPart = mergeSort(arr.slice(0, halfSize));
    const rightPart = mergeSort(arr.slice(halfSize, arr.length));
    let
      leftIndex = 0,
      rightIndex = 0;
      result = [];
    while (leftIndex !== leftPart.length && rightIndex !== rightPart.length) {
      const arrPart = leftPart[leftIndex] >= rightPart[rightIndex] ?
        rightPart : leftPart;
      if (arrPart === leftPart) {
        result.push(leftPart[leftIndex]) // 小的那个 push(numbrer) index++
        leftIndex += 1;
      } else {
        result.push(rightPart[rightIndex]) // 小的那个 push(numbrer) index++
        rightIndex += 1;
      }
    }
    const restArr = leftIndex === leftPart.length ?
      rightPart.slice(rightIndex, rightPart.length) : leftPart.slice(leftIndex, leftPart.length);
    return result.concat(restArr)
  } else {
    if (arr.length === 2 && arr[0] > arr[1])
      return arr.reverse();
    return arr;
  }
}



// 斐波那契数列

// 快速排序
/** 
 * 大于pivot放左边 反之放右边
 * @param {Array} arr 
 * @param {number} sIndex 
 * @param {number} eIndex 
 * @param {number} pivotIndex between sIndex and eIndex
 */
function partition(arr, sIndex, eIndex, pivotIndex) {
  const pivot = arr[pivotIndex];
  // pivot 移动到末尾
  arr[pivotIndex] = arr[eIndex];
  arr[eIndex] = pivot;
  let tmp = null;
  let storeIndex = sIndex; // 动态，在左边的都是确认小于pivot的
  for (let i = sIndex; i < eIndex; i++) {
    if (arr[i] < pivot) {
      // 交换 i 和 storeIndex
      tmp = arr[i];
      arr[i] = arr[storeIndex];
      arr[storeIndex] = tmp;
      storeIndex += 1; // 一旦交换马上右移,确保增量
    }
  }
  // 此时 storeIndex大于pivot 交换 pivot所在index
  arr[eIndex] = arr[storeIndex];
  arr[storeIndex] = pivot;
  return storeIndex
}


const size = 1000;
const arr = [5, 6, 1, 2, 10, 3, 4, 8, 9, 7, 0];
partition(arr, 0, 10, 0)
console.log('\n ---final: ', JSON.stringify(arr))
// const arr1 = [...new Array(2000)].map(_ => Math.floor(Math.random()*size));
// const arr2 = [...new Array(2000)].map(_ => Math.floor(Math.random()*size));

// let start = new Date().getTime();
// bubbleSort(arr1);
// let end = new Date().getTime();
// console.log('bubbleSort: ', end - start)

// start = new Date().getTime();
// mergeSort(arr2);
// end = new Date().getTime();
// console.log('mergeSort: ', end - start)