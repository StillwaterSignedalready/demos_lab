#!/usr/bin/env node

// /usr/bin/node是告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器；
// /usr/bin/env node这种用法是为了防止操作系统用户没有将node装在默认的/usr/bin路径里。当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
// !/usr/bin/env node会去环境设置寻找node目录,推荐这种写法

var name = process.argv[2];
const crypto = require('crypto');
var exec = require('child_process').exec;

// var child = exec('echo bilibi' + name, function(err, stdout, stderr){
//     if(err) throw err;
//     console.log(stdout);
// })

console.log(process)