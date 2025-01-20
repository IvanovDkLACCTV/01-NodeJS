const express = require("express")

const log = console.log

const app = express()

const firstHandler = (req, res, next) => {
  log("Hello, from firstHandler!")
  next() //without next it stuckes in the firstHandler
}

const secondHandler = (req, res) => {
  log("secondHandler")
  res.send("Hello, from secondHandler!")
}

app.get("/", firstHandler, secondHandler)

app.listen(5005, () => log("Server was started on port 5005"))
