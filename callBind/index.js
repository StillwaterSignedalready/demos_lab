function call(target, func) {
    const sym = Symbol();
    target[sym] = func;
    return target[sym]();
}

function getA() {
    return this.a
}

const foo = { a: 'ruok?' }
const bar = {}

const res = call(bar, getA)


console.log('res', res)