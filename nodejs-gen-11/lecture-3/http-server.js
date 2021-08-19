const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200).end('Dali ste dobri')
})

server.listen(3000)

