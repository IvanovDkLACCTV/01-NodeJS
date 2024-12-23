import fs from "fs"

const log = console.log

const fileName = "./files/file.txt"
const copiedFileName = "./files/file-copy.txt"

const readStream = fs.createReadStream(fileName)
const writeStream = fs.createWriteStream(copiedFileName)

readStream.pipe(writeStream)

readStream.on("end", () => {
  log("File read successfully")
})

writeStream.on("finish", () => {
  log("File copied successfully")
})

writeStream.on("close", () => {
  log("File wrote successfully")
})
