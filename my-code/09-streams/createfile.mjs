//node createfile.mjs file.txt 1000
//node createfile.mjs <filename> <linesQty>
import fs from "fs"
import path from "path"

const log = console.log

if (!process.argv[2] || !process.argv[3]) {
  log("Filename and lines qty must be supplied as arguments")
  process.exit(0) //code 0 means correctly
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])

if (isNaN(linesQty)) {
  log("Lines qty must be a number")
  process.exit(0)
}

const writeStream = fs.createWriteStream(path.join("./files", fileName))

log("Start", performance.now())

for (let i = 0; i < linesQty; i++) {
  writeStream.write(`This is a line number ${i + 1}\n`)
}

writeStream.end(() => {
  log(`File "${fileName}" has been created with ${linesQty} lines`)
})

log("End", performance.now())
setTimeout(() => log("Timeout", performance.now()), 0)
