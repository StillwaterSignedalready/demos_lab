
const fs = require('fs');
const path = require("path");

const filePath = './learnNode/src/test.txt';
const data = '';

new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8',(err, data) => {
    if(err) throw err;
    data = data + ` ${Math.random() * 10}`;
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


