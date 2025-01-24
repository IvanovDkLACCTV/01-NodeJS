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
const deleteSingleCommentHandler = (req, res) => {
  const { commentId } = req.params
  res.send(`Delete comment with id ${commentId} route`)
}

module.exports = {
  getCommentsHandler,
  postCommentsHandler,
  getSingleCommentHandler,
  deleteSingleCommentHandler,
}
