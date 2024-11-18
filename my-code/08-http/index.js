const http = require("http")
const {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
} = require("./handlers")

log = console.log

const PORT = 5000

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

  return handleNotFound(req, res)
})

server.listen(PORT, () => {
  log(`Server is listening on port ${PORT}...`)
})
