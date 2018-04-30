
const fs = require('fs');
const path = require("path");

const filePath = './learnNode/src/test.txt';
const data = '';

new Promise((resolve, reject) => {
  fs.readFile(__dirname + '/test.txt', 'utf-8',(err, data) => {
    if(err) throw err;
    data = data + ` ${Math.random() * 10}`;
    console.log('will write in: ' + data);
    resolve(data);
  })
})
.then(data => {
  fs.writeFile(filePath, data,(err, data) => {
    if(err) {
      throw err
    }else{
      console.log('ok')
    }
  })
  
})

console.log(__filename, __dirname);
