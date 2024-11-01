const http = require("http")

log = console.log

const PORT = 5000

const comments = [
  {
    id: 1,
    name: "John",
    comment: "This is my first comment",
  },
  {
    id: 2,
    name: "Jane",
    comment: "This is my second comment",
  },
  {
    id: 3,
    name: "Jack",
    comment: "This is my third comment",
  },
]

let getHTML = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.write("<html><body><div>")
  res.write("<h1>Luke, I am your backend server</h1>")
  res.write("</div></body></html>")
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Welcome to our home page</h1>")
  }
  if (req.method === "GET" && req.url === "/html") {
    getHTML(req, res)
  }
  if (req.url === "/text") {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    return res.end("This is PLAIN!!!!")
  }

  if (req.method === "GET" && req.url === "/comments") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    return res.end(JSON.stringify(comments))
  }

  res.statusCode = 418
  res.setHeader("Content-Type", "text/html")
  res.end("<h1>Luke, I am a teapot</h1>")
})

server.listen(PORT, () => {
  log(`Server is listening on port ${PORT}...`)
})
