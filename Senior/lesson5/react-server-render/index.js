const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(response)
})
server.listen(4200)
console.log('Server is listening on 4200')