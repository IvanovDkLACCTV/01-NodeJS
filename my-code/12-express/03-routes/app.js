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

//comments Handlers
const getCommentsHandler = (req, res) => {
  res.send("Get comments route")
}
const postCommentsHandler = (req, res) => {
  res.send("Post comments route")
}
const getSingleCommentHandler = (req, res) => {
  const { commentId } = req.params
  res.send(`Get comment with id ${commentId} route`)
}
const deleteCommentHandler = (req, res) => {
  const { commentId } = req.params
  res.send(`Delete comment with id ${commentId} route`)
}

//users Handlers
const getUsersHandler = (req, res) => {
  res.send("Get users route")
}
const postUsersHandler = (req, res) => {
  res.send("Post users route")
}
const getSingleUserHandler = (req, res) => {
  const { userId } = req.params
  res.send(`Get user with id ${userId} route`)
}

//routes setup
app.get("/", getRootandler)
app.route("/comments").get(getCommentsHandler).post(postCommentsHandler)
app.get("/comments/:commentId", getSingleCommentHandler)
app.get("/comments/:commendId", deleteCommentHandler)
app.get("/users", getUsersHandler)
app.post("/users", postUsersHandler)
app.get("/users/:userId", getSingleUserHandler)

//start server
app.listen(PORT, () => log(`Server was started on port ${PORT}`))
