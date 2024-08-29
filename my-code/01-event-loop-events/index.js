const fs = require('fs');

const timestamp = () => performance.now().toFixed(2) + ' ms';

console.log('Start');

setTimeout(() => console.log('Timeout 1 sec', timestamp()), 1000);
setTimeout(() => console.log('Timeout 0 sec'), 0);

setImmediate(() => console.log('Immediate 1', timestamp()));

fs.writeFile('./my-code/01-event-loop-events/test.txt', 'Hello Node.js', () => console.log('File written'));

Promise.resolve().then(() => console.log('Promise 1', timestamp()));

process.nextTick(() => console.log('Next tick', timestamp()));

console.log('End');