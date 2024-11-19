const http = require("http")
const path = require("path")
const fs = require("fs")
const {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
} = require("./handlers")

log = console.log

const PORT = 5001

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return getHome(req, res)
  }
  if (req.method === "GET" && req.url === "/html") {
    return getHTML(req, res)
  }
  if (req.method === "GET" && req.url === "/text") {
    return getText(req, res)
  }

  if (req.method === "GET" && req.url === "/comments") {
    return getComments(req, res)
  }

  if (req.method === "POST" && req.url === "/comments") {
    return postComment(req, res)
  }

  if (req.url.match(/\.(css)$/)) {
    const cssPath = path.join(__dirname, "files", req.url)
    const fileStream = fs.createReadStream(cssPath)
    res.writeHead(200, { "Content-Type": "text/css" })
    fileStream.pipe(res)
    return
  }

  return handleNotFound(req, res)
})

server.listen(PORT, () => {
  log(`Server is listening on port ${PORT}...`)
})
