//imports
const express = require("express")
const router = require("./routes/index")

//consts
const log = console.log
const PORT = 5005

const app = express()

app.use(router)

//start server
app.listen(PORT, () => log(`Server was started on port ${PORT}`))
