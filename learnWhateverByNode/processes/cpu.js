const os = require('os')
var fork = require('child_process').fork;

const cpus = os.cpus();

console.log(cpus)