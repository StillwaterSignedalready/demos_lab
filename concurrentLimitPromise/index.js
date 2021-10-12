/**
 * @param {Function[]} taskListParam 返回Promise的函数组成的数组
 * @param {number} limit 
 * @return Promise<any>
 */
function conCurrent(taskListParam, limit) {

  const taskList = [...taskListParam];

  const shiftTask = () => {
    if (taskList.length) {
      const task = taskList.shift();
      task().then(shiftTask)
    }
  }

  for (let i = 0; i < Math.min(limit, taskList.length); i++) {
    shiftTask();
  }
}

conCurrent([
  () => new Promise(resolve => { console.log('5000 5000 5000'); setTimeout(resolve, 5000) }),
  () => new Promise(resolve => { console.log('4000 4000 4000'); setTimeout(resolve, 4000) }),
  () => new Promise(resolve => { console.log('3000 3000 3000'); setTimeout(resolve, 3000) }),
  () => new Promise(resolve => { console.log('2000 2000 2000'); setTimeout(resolve, 2000) }),
  () => new Promise(resolve => { console.log('1000 1000 1000'); setTimeout(resolve, 1000) }),
], 3)
