import fs from "fs"
import path from "path"

const log = console.log
const warn = console.warn()

const sourceDir = "./files"
const targetDir = "./copied-files"

if (!fs.existsSync(sourceDir)) {
  warn("Source directory does not exist")
  log("Exiting...")
  process.exit(0)
}

if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true }) // recursively remove directory and all its contents
  //log("Removing old copied files directory...")
}
fs.mkdirSync(targetDir)

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    log(`Error reading directory: ${err}`)
    process.exit(1) //code 1 means error occurred
  }
  log("Start", performance.now())
  fileNames.forEach((fileName, index) => {
    const sourceFilePath = path.join(sourceDir, fileName)
    const targetFilePath = path.join(targetDir, `${index + 1}. ${fileName}`)

    const readFileStream = fs.createReadStream(sourceFilePath)
    const writeFileStream = fs.createWriteStream(targetFilePath)

    readFileStream.pipe(writeFileStream)
    readFileStream.on("end", () => {
      log(`File ${fileName} copied successfully`)
    })
  })
  log("End", performance.now())
})
