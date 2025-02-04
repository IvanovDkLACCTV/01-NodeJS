import express from "express"

const PORT = 5006
const log = console.log

const app = express()

const logger = (req, res, next) => {
  log(req.method, req.path)
  next()
}

//app.use(logger)

//app.get("/", logger, () => {res.send()})

app.use(logger, (req, res) => res.send("This is Express.JS server"))

app.listen(PORT, () => log(`Server is listenning a port ${PORT}`))
