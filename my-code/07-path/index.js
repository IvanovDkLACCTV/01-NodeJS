const path = require('path')

const log = console.log

const filePath = 'C:/dev/01-NodeJS/my-code/06-events/index.js'
const textFilePath = './dev/01-NodeJS/my-code/06-events/second.txt'
const relativePath = './06-events/fs-events.js'
const derectoryPath = './my-code/06-events'

log(path.basename(derectoryPath))
log(path.isAbsolute(relativePath))
log(path.dirname(textFilePath ))
log(path.resolve(filePath))

log(path.extname(textFilePath))
log(path.parse(filePath))

const parsedPath = path.parse(filePath)
log(path.resolve(filePath))
log(path.join(parsedPath.dir, `parsed-${parsedPath.name}.js`))
