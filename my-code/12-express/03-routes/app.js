//imports
const express = require("express")
//consts
const log = console.log
const PORT = 5005

const app = express()
//handlers
const getRootandler = (req, res) => {
  res.send("Get root route")
}

const getCommentsHandler = (req, res) => {
  res.send("Get comments route")
}

const postCommentsHandler = (req, res) => {
  res.send("Post comments route")
}

const getCommentHandler = (req, res) => {
  const { commentId } = req.params
  res.send(`Get comment with id ${commentId} route`)
}

app.get("/", getRootandler)
app.get("/comments", getCommentsHandler)
app.post("/comments", postCommentsHandler)
app.get("/comments/:commentId", getCommentHandler)

//start server
app.listen(PORT, () => log(`Server was started on port ${PORT}`))
