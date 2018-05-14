 // "物以类聚"
const
  exec = require('child_process').exec;
  url = require('url'),
  http = require('http'),
  querystring = require('querystring'),
  fs = require('fs')
  

function start(res, postData){
  console.log(`ReqHandler 'start' was called.`)
  
  let body = `<html>
    <head>
      <meta http-equiv="Content-type" content="text/html" charset="UTF-8">
    </head>
    <body>
      <form action="/upload" enctype="multipart/formdata" method="post">
        <textarea name="text" cols="60" rows="20"></textarea>
        <input type="file" name="upload">
        <input type="submit" value="Upload file">
      </form>
    </body>
  </html>`;
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(body);
  res.end();
}

function upload(res, postData){
  console.log(`ReqHandler 'upload' was called.`)
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write(`You've sent: ${querystring.parse(postData).text}`);
  res.end();
}

function show(res, postData){
  console.log(`ReqHandler 'show' was called.`)
  fs.readFile('./learnNode/src/img/sea.jpg', 'binary', (err, file) => {
    if(err){
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(`${err} \n`);
      res.end();    
    }else{
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(file, 'binary');
      res.end();
    }
  })
}


exports.start = start;
exports.upload = upload;
exports.show = show;