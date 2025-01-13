require("dotenv").config()

//console.log(process.env) //переменные среды

const log = console.log
const env = process.env

log(env.DB_USERNAME)
log(env.DB_PASSWORD)
log(env.DB_URL)
