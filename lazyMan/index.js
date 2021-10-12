class LazyMan {
  constructor(name) {
    console.log(`Hi I am ${name}`);
    this.queue = [];
  }

  eat(name) {
    this.queue.push(() => console.log(`I am eating ${name}`));
    this.trigger();
    return this;
  }

  sleep(time) {
    this.queue.push(() => new Promise(resolve => setTimeout(resolve, time)))
    this.trigger();
    return this;
  }

  sleepFirst(time) {
    this.queue.unshift(() => new Promise(resolve => setTimeout(resolve, time)))
    this.trigger();
    return this;
  }

  trigger() {
    if (this.timer) return;
    this.timer = setTimeout(() => {
      // 遍历执行 queue
      let lastPromise = Promise.resolve();
      for (const task of this.queue) {
        lastPromise = lastPromise.then(() => {
          const result = task();
          return result;
        })
      }
      this.timer = null;
    });
  }

}

// new LazyMan('Tony').sleep(3000).eat('lunch');
// new LazyMan('Tony').eat('lunch').sleep(3000).eat('dinner');
new LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5000).sleep(5000).eat('junk food');