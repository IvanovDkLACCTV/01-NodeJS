 let isRunning = true;

 setTimeout(() => isRunning = false, 10);
 process.nextTick(() => console.log('Next tick'));

 while (isRunning) {
     console.log('While loop is running...');
 }