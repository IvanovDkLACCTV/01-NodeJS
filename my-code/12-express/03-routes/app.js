//imports
const express = require("express")
const commentsRouter = require("./routes/comments")
const usersRouter = require("./routes/users")
//consts
const log = console.log
const PORT = 5005

const app = express()
//handlers
const getRootandler = (req, res) => {
  res.send("Get root route")
}

//routes setup
app.get("/", getRootandler)
app.use("/comments", commentsRouter)
app.use("/users", usersRouter)

//start server
app.listen(PORT, () => log(`Server was started on port ${PORT}`))
