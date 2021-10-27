/**
 * 状态: pending fullfilled failure
 * 立刻执行 executor: (reslove)
 * thenable
 * joinable: 一个 promise 如果 fullfilled 了， 它的 parents 要跟着 fullfilled 并触发 task; then(return new Promise())
 * catch
 * all
 */

const PROMISE_STATUS = {
    PENDING: 'PENDING',
    FULLFILLED: 'FULLFILLED',
    FAILURE: 'FAILURE',
}

class GreatPromise {
    static all() {

    }

    static resolve(value) {
        const result = new GreatPromise();
        result.__status = PROMISE_STATUS.FULLFILLED;
        result.__value = value;
        return result;
    }

    resolve = (value) => {
        this.__value = value;
        this.onFullfilled();
    }

    constructor(executor) {
        this.__value = null;
        this.__status = PROMISE_STATUS.PENDING;
        this.__taskQueue = []; // queue of callback
        this.__parents = []; // 一般来说只有一个 吗?

        const reject = (error) => {};

        typeof executor === 'function' && executor(this.resolve, reject);
    }

    get coreValue() {
        if (this.__value instanceof GreatPromise) {
            return this.__value.coreValue;
        }
        return this.__value;
    }

    onFullfilled() { // joinable
        this.__status = PROMISE_STATUS.FULLFILLED;
        for (const cb of this.__taskQueue) {
            cb(this.coreValue)
        }
        for (const parent of this.__parents) {
            parent.onFullfilled();
        }
    }

    /**
     * 如果已经 fullfilled 立刻执行 executor
     * return 一个新的 Promise
     */
    then(executor) {
        let result = new GreatPromise();

        if (this.__status === PROMISE_STATUS.PENDING) {
            this.__taskQueue.push(executor);
        } else if (this.__status === PROMISE_STATUS.FULLFILLED) {
            const value = executor(this.__value);
        }
        /**
         * return Promise.resolve(this.__value)
         * add parent!
         */
        // result.__parents.push(this);
        if (this.__value instanceof GreatPromise) {
            this.__value.__parents.push(result);
        }
        return result;
    }

    catch() {
        return this;
    }
    
}

const foo = new GreatPromise((resolve) => {
    setTimeout(() => {
        resolve(333)
    }, 2000);
}).then((v) => {
    console.log('1111 v', v)
})

console.log('foo', foo)