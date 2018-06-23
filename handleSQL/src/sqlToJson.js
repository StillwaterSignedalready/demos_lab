const fs = require('fs')

const file = fs.readFileSync('./target/citys.sql', 'utf-8')
const nodes = file.match(/{[^}]+}/g)
    .map(str => str.replace(/{|}/g, ''))
    .map(str => str.split(','))
    .map(arr => ({
        code: arr[0],
        name: arr[1],
        parentCode: arr[2],
        grandParent: arr[3]
    }))

    
console.log(nodes);
