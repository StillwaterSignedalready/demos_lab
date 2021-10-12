var foo = [9,-1,0,8,-4,10,4,-2];

// foo.sort((a, b) => a - b)

function partition(arr, startIndex, endIndex) {
  const pivotIndex = arr.length - 1; 
  const pivot = arr[arr.length - 1];
  let boundaryIndex = startIndex;
  // let walker = startIndex;
  // 交换 pivot 和最后一项
  let tmp = pivot;
  arr[endIndex] = pivot;
  
  for (let i = startIndex; i < endIndex; i++) {
    // walker 向右遍历到 endIndex, 如果比 pivot 大则与 boundaryIndex 右侧交换 boundaryIndex += 1;
    if (arr[i] < pivot) {
      tmp = arr[boundaryIndex];
      arr[boundaryIndex] = arr[i];
      arr[i] = tmp;
      boundaryIndex++;
    }
  }
  // 交换 pivot 与 arr[boundaryIndex]
  arr[pivotIndex] = arr[boundaryIndex];
  arr[boundaryIndex] = pivot;
  return boundaryIndex;
  // 最后返回 boundaryIndex + 1
}

function quicksort(arr, startIndex, endIndex) {
  const pivotIndex = partition(arr, 0, arr.length - 1);
  quicksort(arr, startIndex, pivotIndex);
  quicksort(arr, pivotIndex, endIndex);
}

quicksort(foo);
console.log(foo)