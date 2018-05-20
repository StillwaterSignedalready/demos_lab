// “单一功能”原则
const
  fs = require('fs'),
  url = require('url'),
  http = require('http')


// boot the server
function start(route, handle){

  const onRequest = (req, res) => {
    let postData = '';
    const pathname = url.parse(req.url).pathname;
    console.log(`req for ${pathname} received`)

    req.setEncoding('utf8');

    req.addListener('data', postDataChunk => {
      postData += postDataChunk;
      console.log(`-------Receive data chunk.`)
    });

    req.addListener('end', postDataChunk => {
      postData += postDataChunk;
      route(handle, pathname, res, postData); // 调用路由映射的方法
    });


  }

  // createServer:: (req, res -> void) -> Server
  http.createServer(onRequest).listen(8888)

  console.log('listening...');

}

exports.start = start;