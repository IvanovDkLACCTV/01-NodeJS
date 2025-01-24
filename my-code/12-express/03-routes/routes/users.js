//imports
const express = require("express")
const {
  postUsersHandler,
  getSingleUserHandler,
  getUsersHandler,
} = require("../controllers/users")
//consts
const router = express.Router()

//routes
router.post("/", postUsersHandler)
router.get("/:userId", getSingleUserHandler)
router.get("/", getUsersHandler)

module.exports = router
