import express from "express"
import morgan from "morgan"

const PORT = 5006
const log = console.log

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
  const personData = {
    name: "Dima",
    age: 31,
    isInstructor: "Student",
  }
  log(req.body)
  return res.json(personData)
})

app.listen(PORT, () => log(`Server is listenning a port ${PORT}`))
