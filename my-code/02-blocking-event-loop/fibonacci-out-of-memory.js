const timeStamp = Date.now();
setTimeout(() => console.log('Timeout'), 0);

const fibonacci = n => {
    return new Promise((resolve, reject) => {
        return (n === 0 || n === 1) ? resolve(n) : 
        setImmediate(() => Promise.all([fibonacci(n - 1), fibonacci(n - 2)])
        .then(([fib1, fib2]) => resolve(fib1 + fib2)));
    })
    
} 

// Heap out of memory
fibonacci(40).then(res => console.log(res, Date.now() - timeStamp, 'ms'));