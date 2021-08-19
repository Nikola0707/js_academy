// 3 types of streams
// 1. Writable streams
// 2. Readable streams
// 3. Duplex

const fs = require('fs')
// const writableStream = fs.createWriteStream('./output.txt');
const readableStream = fs.createReadStream('./output.txt');

// writableStream.write('Ova e prv dopir so writable streams.')

readableStream.on('data', chunk => {
  console.log('Procitavme nov chunk: ', chunk.toString())
  // moze da si igra so tie podatoci
})