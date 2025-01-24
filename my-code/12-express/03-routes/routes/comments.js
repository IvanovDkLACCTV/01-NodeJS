//imports
const express = require("express")
//consts
const log = console.log
const router = express.Router()

//controllers
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

//routes
router.route("/comments").get(getCommentsHandler).post(postCommentsHandler)
router.get("/comments/:commentId", getSingleCommentHandler)
router.get("/comments/:commendId", deleteCommentHandler)

module.exports = router
