// const
// 	http = require('http'),
// 	fs = require('fs')

// // http.createServer((req, res) => {
// //   res.writeHead(200, {'content-Type': 'text/plain'})
// //   res.end('Hello world\n')
// // }).listen(1337, '127.0.0.1')

// const src = fs.readFileSync('./img/sea.jpg'); // 复制图片

// // fs.writeFileSync('./img/sea0.jpg', src);
// console.log(src)

function partion(arr, sIndex, eIndex) {
	/**
	 * index X 2
	 * 	- boundaryIndex 已规整区域(左侧)的边界(不包含)
	 * 	- walker(i) 遍历游标(从左到右)
	 * 最右为 pivot 所有数字与它比较，最后要与 boundaryIndex 对换
	 */
	const pivot = arr[eIndex];
	let tmp;
	let boundaryIndex = sIndex; // bug: = 0


	for (let i = sIndex; i < eIndex; i++) {
		// if arr[i] 比 pivot 小 then arr[i] 与 arr[boundaryIndex] 交换; boundaryIndex++
		if (arr[i] < pivot) {
			tmp = arr[i];
			arr[i] = arr[boundaryIndex];
			arr[boundaryIndex] = tmp;
			boundaryIndex++;
		}
		
	}

	// pivot 归位
	arr[eIndex] = arr[boundaryIndex];
	arr[boundaryIndex] = pivot;
	return boundaryIndex;
}

function quickSort(arr, sIndex, eIndex) {
	if (sIndex >= eIndex) return;
	const pivotIndex = partion(arr, sIndex, eIndex);
	quickSort(arr, sIndex, pivotIndex - 1)
	quickSort(arr, pivotIndex + 1, eIndex)
}

const size = 10;
const arr1 = [...new Array(size)].map(_ => Math.floor(Math.random()*size));
// const arr1 = [ 3, 5, 5, 0 ];
// const arr1 = [
// 	5, 7, 0, 1, 9,
//   ];
console.log('arr1', arr1)

quickSort(arr1, 0, arr1.length - 1)
console.log('res', arr1)
