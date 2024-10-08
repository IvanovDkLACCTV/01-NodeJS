const fs = require('fs/promises');//with Fucking Promises

fs.writeFile('./first.txt', 'The first line')
    .then(() => console.log('The file has been written!'))
    .then(() => fs.appendFile('./first.txt', '\nThe second line'))
    .then(() => console.log('The file has been appended!'))
    .then(() => fs.rename('./first.txt', './second.txt'))
    .then(() => console.log('The file has been renamed!'))
    .catch((err) => console.log(err))
