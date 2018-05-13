 // "物以类聚"
const
  exec = require('child_process').exec;
  url = require('url'),
  http = require('http')

function start(res){
  console.log(`ReqHandler 'start' was called.`)
  
  exec('node -h', (error, stdout, stderr) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(stdout);
    res.end();
    console.log('res sended===========================================')
  })

}

function upload(res){
  console.log(`ReqHandler 'upload' was called.`)
  res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Hello upload');
    res.end();
}


exports.start = start;
exports.upload = upload;