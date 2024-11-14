const comments = require("./data.json")

let getHTML = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.write("<html><body><div>")
  res.write("<h1>Luke, I am your backend server</h1>")
  res.write("</div></body></html>")
}

let getText = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello, I am your backend server")
}

let getComments = (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(comments))
}

let handleNotFound = (req, res) => {
  res.statusCode = 418
  res.setHeader("Content-Type", "text/html")
  res.end("<h1>Luke, I am a teapot</h1>")
}
module.exports = {
  getHTML,
  getText,
  getComments,
  handleNotFound,
}
