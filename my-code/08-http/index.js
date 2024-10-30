const http = require('http')

log = console.log

const  PORT = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Luke, I am your server</h1>')
})

server.listen(PORT, () => {
    log(`Server is listening on port ${PORT}...`)
})