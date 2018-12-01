
function mergeSort(arr) { // arr: number[]
  console.log(arr)
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

console.log(mergeSort([4,5,1,8,4,1,0]))