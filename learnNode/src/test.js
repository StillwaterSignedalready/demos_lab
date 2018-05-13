const
	http = require('http'),
	fs = require('fs')

// http.createServer((req, res) => {
//   res.writeHead(200, {'content-Type': 'text/plain'})
//   res.end('Hello world\n')
// }).listen(1337, '127.0.0.1')

const src = fs.readFileSync('./img/sea.jpg'); // 复制图片

// fs.writeFileSync('./img/sea0.jpg', src);
console.log(src)