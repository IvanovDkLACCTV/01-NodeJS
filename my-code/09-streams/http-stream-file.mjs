import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = "./files/index.html"
  }
})
