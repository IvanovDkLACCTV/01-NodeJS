const timeStamp = Date.now();
setTimeout(() => console.log('Timeout'), 0);

const fibonacci = n => {
    return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
} //Q = O(2^n)

console.log(fibonacci(30), Date.now() - timeStamp, 'ms');