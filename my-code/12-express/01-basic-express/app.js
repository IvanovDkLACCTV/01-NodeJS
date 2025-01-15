const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Responce from the server")
})

server.listen(5005, () => console.log("Server was started on port 5005"))
