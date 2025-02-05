import express from "express"
import morgan from "morgan"

const PORT = 5006
const log = console.log

const app = express()

app.use(morgan("tiny"))

app.use(express.json())
// =
// app.use((req, res, next) => {
//   let data = ""
//   req.on("data", (chunk) => (data += chunk))
//   req.on("end", () => {
//     const parsedJSON = JSON.parse(data)
//     req.body = parsedJSON
//     next()
//   })
// })

app.use((req, res) => {
  log(req.body)
  res.send("This is Express.JS server")
})

app.listen(PORT, () => log(`Server is listenning a port ${PORT}`))
