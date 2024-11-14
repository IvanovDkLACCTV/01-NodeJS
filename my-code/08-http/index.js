const http = require("http")
const { getHTML, getText, getComments, handleNotFound } = require("./handlers")

log = console.log

const PORT = 5000

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Welcome to our home page</h1>")
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
  return handleNotFound(req, res)
})

server.listen(PORT, () => {
  log(`Server is listening on port ${PORT}...`)
})
