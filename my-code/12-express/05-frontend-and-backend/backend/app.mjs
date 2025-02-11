import express from "express"
import morgan from "morgan"
import cors from "cors"

const PORT = 5006
const log = console.log

const app = express()

//Middleware
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
//

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
