//imports
const express = require("express")
//consts
const log = console.log
const router = express.Router()

//controllers
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

//routes
router.post("/users", postUsersHandler)
router.get("/users/:userId", getSingleUserHandler)
router.get("/users", getUsersHandler)

module.exports = router
