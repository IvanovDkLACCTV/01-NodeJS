import express from "express"
import morgan from "morgan"

const PORT = 5006
const log = console.log

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
  log(req.body)
  res.send("This is Express.JS server")
})

app.listen(PORT, () => log(`Server is listenning a port ${PORT}`))
