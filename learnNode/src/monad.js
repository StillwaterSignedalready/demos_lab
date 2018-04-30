
var fs = require('fs');

var readfile =  function(filename){
  return new IO(function(){
    return fs.readFileSync(filename, 'utf-8');
  })
}