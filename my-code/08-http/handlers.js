const { log } = require("console")
const fs = require("fs")
const qs = require("querystring")
const data = require("./data.json") // Загружаем объект с comments
//const data = require("./data.js")
const comments = data.comments

const getHome = (req, res) => {
  fs.readFile("./08-http/files/comment-form.html", (err, data) => {
    if (err) {
      res.statusCode = 500
      res.setHeader("Content-Type", "text/plain")
      res.end("Server error")
    } else {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      res.end(data)
    }
  })
}

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
  res.setHeader("Content-Type", "text/plain")

  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    let commentForm = ""
    req.on("data", (chunk) => (commentForm += chunk.toString()))
    req.on("end", () => {
      try {
        const comment = qs.parse(commentForm)
        comment.id = parseInt(comment.id)
        comments.push(comment)
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Your awesome Comment was created</h1>")
        res.write('<a href="/comments">See all comments</a>')
        res.write("<a href='/'>Go back</a>")
        res.end()
      } catch (err) {
        res.statusCode = 400
        res.end("Invalid form data")
      }
    })
  } else if (req.headers["content-type"] === "application/json") {
    let commentJSON = ""
    req.on("data", (chunk) => (commentJSON += chunk))
    req.on("end", () => {
      try {
        //comments.push(JSON.parse(comment))
        const parsedComment = JSON.parse(commentJSON)
        comments.push(parsedComment)
        fs.writeFileSync(
          "./08-http/files/data.json",
          JSON.stringify(comments, null, 2)
        )
        res.statusCode = 201
        res.end("Comment created")
      } catch (err) {
        res.statusCode = 400
        res.end("Invalid JSON")
      }
    })
  } else {
    res.statusCode = 400
    res.end("Data must be in JSON format")
  }
}

module.exports = {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
}
