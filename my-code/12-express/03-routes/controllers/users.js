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

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getSingleUserHandler,
}
