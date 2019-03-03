const fs = require('fs');

// 当前目录

// fs.appendFile('./learnWhateverByNode/IO/helloIo.txt', '\n bbb', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved');
//   }

// });

fs.open('./learnWhateverByNode/IO/helloIo.txt', 'w', (err, fd) => {

  console.log(fd)
})

fs.open('./learnWhateverByNode/IO/g2.txt', 'w', (err, fd) => {

  console.log(fd)
})