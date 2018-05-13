const
  server = require('./server')
  router = require('./router')
  requestHandler = require('./requestHandler')

const handle = {}; // 路由与reqHandler的映射关系
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

// console.log('router:', router)
server.start(router.route, handle);