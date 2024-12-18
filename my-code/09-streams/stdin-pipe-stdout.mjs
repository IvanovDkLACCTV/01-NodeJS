import { Transform } from "stream"
import fs from "fs"

const log = console.log
const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    // const upperCased = chunk
    const upperCased = chunk.toString().toUpperCase()
    //log(upperCased)
    cb(null, upperCased)
  },
})

const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split("")
    const theLastChar = arrayOfChars.pop()
    const reversedString = arrayOfChars.reverse().concat(theLastChar).join("")
    //log(reversedString)
    cb(null, reversedString)
  },
})

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)
// const filePath = "./files/stdin-dump.txt" //pipe to file

// const writeStream = fs.createWriteStream(filePath)

// process.stdin.pipe(writeStream)

// //pipe to stdout
// process.stdin.pipe(process.stdout)
// process.stdin.pipe(process.stderr)

//node stdin-pipe-stdout.mjs
