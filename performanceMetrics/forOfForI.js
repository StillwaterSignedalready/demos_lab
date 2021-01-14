const list = Array(9999999).fill(0);

console.time('for of')

for (const i of list) {

}

console.timeEnd('for of')

console.time('for')

for (let i = 0; i < list.length; i++) {

}

console.timeEnd('for')