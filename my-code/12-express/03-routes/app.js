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

//routes setup
app.get("/", getRootandler)

//start server
app.listen(PORT, () => log(`Server was started on port ${PORT}`))
