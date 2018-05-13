// 为路由分配callback
function route(handle, pathname){
  console.log(`About to route a req for ${pathname} `)
  if(typeof handle[pathname] === 'function'){
    return handle[pathname]();
  }else{
    console.log(`No request handler found for ${pathname}`)
    return '404 not found'
  }
}

exports.route = route;