const { log } = require("console")
const fs = require("fs")
const data = require("./data.json") // Загружаем объект с comments
const comments = data.comments

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

let postComment = (req, res) => {
  let comment = ""
  req.on("data", (chunk) => (comment += chunk))
  req.on("end", () => {
    //comments.push(JSON.parse(comment))
    const parsedComment = JSON.parse(comment)
    comments.push(parsedComment)
    fs.writeFileSync(
      "./08-http/files/data.json",
      JSON.stringify(comments, null, 2)
    )
    res.statusCode = 201
    res.end("Comment created")
  })
}

module.exports = {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
}
