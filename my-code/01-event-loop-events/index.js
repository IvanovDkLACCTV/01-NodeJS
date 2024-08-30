const fs = require('fs');
const dns = require('dns');

const timestamp = () => performance.now().toFixed(2) + ' ms';

console.log('Start');

//Close events
fs.writeFile('./my-code/01-event-loop-events/test.txt', 'Hello Node.js', () => console.log('File written'));

//Promises
Promise.resolve().then(() => console.log('Promise 1', timestamp()));

//Next tick
process.nextTick(() => console.log('Next tick 1', timestamp()));

//setImmediate (Check )
setImmediate(() => console.log('Immediate 1', timestamp()));

//I/O events
dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 4 localhost', address, timestamp()); 
    Promise.resolve().then(() => console.log('Promise 2', timestamp()));
    process.nextTick(() => console.log('Next tick 3', timestamp()));
});

//Timeouts
setTimeout(() => console.log('Timeout 1', timestamp()), 1);
setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timestamp())); 
    console.log('Timeout 2', timestamp());
}, 1);

console.log('End');