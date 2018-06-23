const fs = require('fs')

const file = fs.readFileSync('./target/citys.sql', 'utf-8')
const nodes = file.match(/{[^}]+}/g)


console.log(nodes);
