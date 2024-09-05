const timeStamp = Date.now();
setTimeout(() => console.log('Timeout'), 0);

const cache = new Map();

const fibonacci = n => {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n));
        }
        setImmediate(() =>
            fibonacci(n - 1).then((fib1) => fibonacci(n - 2).then((fib2) => {
                cache.set(n, fib1 + fib2);
                resolve(fib1 + fib2);
            }))
        );
    })
}
//             })
//             fibonacci(n - 1).then((fib1) =>
//                 fibonacci(n - 2).then((fib2) => {
//                     cache.set(n, fib1 + fib2);
//                     resolve(fib1 + fib2);
//                 })
//             )
//         );
//     })
    
// } 

fibonacci(100).then(res => console.log(BigInt(res).toString(), Date.now() - timeStamp, 'ms'));