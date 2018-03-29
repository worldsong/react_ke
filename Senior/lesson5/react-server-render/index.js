const http = require('http')
const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('hello react.js')
    response.end()
})
server.listen(4200)
console.log('Server is listening on 4200')