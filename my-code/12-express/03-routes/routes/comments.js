//imports
const express = require("express")
const {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
} = require("../controllers/comments")
//consts
const router = express.Router()

//routes
router.route("/").get(getCommentsHandler).post(postCommentsHandler)
router.get("/:commentId", getSingleCommentHandler)
router.get("/:commendId", deleteSingleCommentHandler)

module.exports = router
