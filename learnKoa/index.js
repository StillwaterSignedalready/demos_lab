const Koa = require('koa')
const App = new Koa()

/**
 * context: 对话上下文-包含了request和response
 * 每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是next函数。只要调用next函数，就可以把执行权转交给下一个中间件
 */
const first = (ctx, next) => {
    if(ctx.request.path === '/'){
        console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
        ctx.response.body = '<h1>你很牛逼呀</h1>'
    }
    if(ctx.request.path === '/maopian'){
        ctx.response.body = '<p>王老五</p><p>张老七</p><p>五六七</p>'
    }
}

App.use(first)
App.listen(8080)
console.log('running!')