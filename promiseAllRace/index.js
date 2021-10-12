function pall(promiseList) {
  const results = [];
  let currPromise = Promise.resolve();

  for (let i = 0; i < promiseList.length; i++) {
    const promise = promiseList[i];
    currPromise = currPromise
      .then((result) => promise)
      .then((result) => { results[i] = result; });
  }
  currPromise = currPromise.then(() => results)
  return currPromise;
}

pall([Promise.resolve(1), Promise.resolve(2)]).then(r => console.log('r', r))


let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 1900)
})

function pRace(promiseList) {
  return new Promise((resolve, reject) => {
    for (const promise of promiseList) {
      promise.then((result) => resolve(result))
        .catch(err => reject(err))
    }
  });
}

pRace([p1, p2]).then((result) => {
  console.log('1111111111')
  console.log(result)
}).catch((error) => {
  console.log('222222222')
  console.log(error)  // 打开的是 'failed'
})