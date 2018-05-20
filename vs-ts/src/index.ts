import * as fs from 'fs';

// const
//   rs = fs.createReadStream('../doc/sample.txt', 'utf-8'),
//   ws = fs.createWriteStream('copied')

const rs = fs.createReadStream('./doc/sample.txt', 'utf-8');

rs.on('data', chunk => {
  console.log('DATA===============>');
  // console.log(chunk)
});

rs.on('end', _ => console.log('END--------------->'))

rs.on('error', e => console.log('ERROR--------------->' + e))
