// “单一功能”原则
const
  fs = require('fs'),
  url = require('url'),
  http = require('http')


// boot the server
function start(route, handle){

  const onRequest = (req, res) => {

    const pathname = url.parse(req.url).pathname;
    console.log(`req for ${pathname} received`)
    // console.log(`handle is ${handle.upload}`)
    // console.log(`url module: ${url}`)
    // console.log(`route: ${route}`)

    let content = route(handle, pathname); // 调用路由映射的方法

    // 组装response
    res.writeHead(200, {"Content-Type": "text/plain"}); //先写header
    res.write(content); //再写内容
    res.end(); // 完成响应

    console.log('res sended! ==============================================')

  }

  // createServer:: (req, res -> void) -> Server
  http.createServer(onRequest).listen(8888)

  console.log('listening...');

}

exports.start = start;