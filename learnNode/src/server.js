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

    route(handle, pathname, res); // 调用路由映射的方法
  }

  // createServer:: (req, res -> void) -> Server
  http.createServer(onRequest).listen(8888)

  console.log('listening...');

}

exports.start = start;