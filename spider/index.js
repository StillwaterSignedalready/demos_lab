const http = require('http');
const fs = require('fs');
const superagent = require('superagent');

var baseUrl = 'http://www.zhihu.com/node/ExploreAnswerListV2'
const req = superagent.get(baseUrl)

  req.set({
    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com'
  }).end((err, res) => {
    console.log(res)
    // fs.writeFileSync('./spider/zhihu.html', res.text);
  })

try{
  console.log(req)
} catch (e){
  console.log(e)
}
  // .query({
  //   params: JSON.stringify(params)
  // })
  // .end(function(err, obj) {
  //   if(err) return null
  //   res.end(JSON.stringify(obj)) 
  //   //res是一个可写流里面传递的参数类型为string或buffer
  //   //故使用JSON.stringify()
  // })