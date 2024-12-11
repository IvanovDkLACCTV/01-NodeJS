import http from "http"
import fs from "fs"

const log = console.log
const PORT = 5000
//with Streams: read file by chunkes
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = "./files/index.html"
    const readStream = fs.createReadStream(filePath)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    readStream.pipe(res)
  }
  //without Streams: read whole file at once
  if (res.url === "/no-stream" && req.method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end("Error reading file on server")
      } else {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end(data)
      }
    })
  }
})

server.listen(PORT, () => {
  log(`Server is listening at port ${PORT}`)
})
