 // "物以类聚"
const
  exec = require('child_process').exec;
  url = require('url'),
  http = require('http');

function start(pathname){
  onReq = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(`req for ${pathname} received`)
    let content = route(handle, pathname, res);
  }

  http.createServer(onReq).listen(8888);
  console.log('server started')
}

function upload(pathname){
  console.log(`ReqHandler 'upload' was called.`)
  return 'Hello upload'
}


exports.start = start;
exports.upload = upload;