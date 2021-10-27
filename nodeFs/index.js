const fs = require('fs');

fs.open('./qingshu.txt', (err, fd) => {
    console.log('fd', fd)
})

console.log('ret', ret)