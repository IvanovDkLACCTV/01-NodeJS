import stream from "stream"
import fs from "fs"

const log = console.log
const filePath = "./files/stdin-dump.txt" //pipe to file

const writeStream = fs.createWriteStream(filePath)

process.stdin.pipe(writeStream)

//pipe to stdout
process.stdin.pipe(process.stdout)
