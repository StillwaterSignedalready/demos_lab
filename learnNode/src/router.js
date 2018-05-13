// 为路由分配callback
function route(handle, pathname, response){
  console.log(`About to route a req for ${pathname} `)
  if(typeof handle[pathname] === 'function'){
    return handle[pathname](response); // find callback and call it
  }else{
    console.log(`No request handler found for ${pathname}`)
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 not found');
    response.end();
  }
}

exports.route = route;