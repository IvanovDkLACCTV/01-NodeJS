const fs = require('fs');

let isRunning = true;

setTimeout(() => isRunning = false, 19);
process.nextTick(() => console.log('Next tick'));

const setImmediatePromise = () => new Promise((resolve, reject) => {
    //setImmediate(() => resolve());
    resolve()
})

const whileLoop = async (params) => {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));