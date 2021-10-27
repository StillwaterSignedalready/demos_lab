const cp = require('child_process');

const env = process.env;

// process.env.WORK = 'fowiejfewo';

// cp.spawn('node ./ps0.js')
const process0 = cp.spawn('node', ['./ps0.js'])

process0.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});