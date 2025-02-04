const express = require("express")
const commentsRouter = require("./comments")
const usersRouter = require("./users")
const rootRouter = require("./root")

const router = express.Router()

//routes setup
router.use("/comments", commentsRouter)
router.use("/users", usersRouter)
router.use("/", rootRouter)

module.exports = router
