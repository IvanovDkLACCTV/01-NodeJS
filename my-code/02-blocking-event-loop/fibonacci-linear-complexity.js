const timeStamp = Date.now();
setTimeout(() => console.log('Timeout'), 0);

const fibonacci = n => {
    if (n === 0 || n === 1) {
        return n; 
    }

    let fib1 = 0;
    let fib2 = 1;
    let sum;
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}

console.log(fibonacci(1000), Date.now() - timeStamp, 'ms');