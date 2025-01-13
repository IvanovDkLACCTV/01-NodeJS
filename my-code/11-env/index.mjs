import * as dotenv from "dotenv"
dotenv.config()

// import { config } from "dotenv"
// config()

const log = console.log
const env = process.env

log(dotenv)
//log(config)
log(env.DB_USERNAME)
log(env.DB_PASSWORD)
log(env.DB_URL)
