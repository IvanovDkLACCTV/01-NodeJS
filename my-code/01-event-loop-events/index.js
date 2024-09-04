const fs = require('fs');
const dns = require('dns');

const info = text => console.log(text, performance.now().toFixed(2) + ' ms');

console.log('Start');

//Close events
fs.writeFile('./my-code/01-event-loop-events/test.txt', 'Hello Node.js', () => info('File written'));

//Promises
Promise.resolve().then(() => info('Promise 1'));

//Next tick
process.nextTick(() => info('Next tick 1'));

//setImmediate (Check )
setImmediate(() => info('Immediate 1'));

//Intervals
let intervalCount = 1;
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount++}`);
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

//I/O events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 4 localhost', address); 
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 3'));
});

//Timeouts
setTimeout(() =>info('Timeout 1'), 1);
setTimeout(() => {
    process.nextTick(() => info('Next tick 2')); 
    info('Timeout 2');
}, 100);

console.log('End');