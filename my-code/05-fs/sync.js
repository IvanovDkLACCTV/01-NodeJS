//don't recommend to use syncronious functions in Node.js
const fs = require('fs');//with Fucking Promises

try {
    fs.writeFileSync('./first.txt', 'The first line')
    console.log('The file has been written!');
    fs.appendFileSync('./first.txt', '\nThe second line')
    console.log('The file has been appended!')
    fs.renameSync('./first.txt', './second.txt')
    console.log('The file has been renamed!')
} catch (error) {
    console.log(error)
}



//this code works in the one thread, so if we have a lot of requests, we can't use it