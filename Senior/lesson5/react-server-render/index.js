const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(response)
    } else {
        if (/\.js/.test(request.url)) {
            // js file
            response.writeHead(200, { 'Content-Type': 'application/javascript' })
            fs.createReadStream(path.join(__dirname, `${request.url}`)).pipe(response)
        } else {
            response.writeHead(404)
            response.end()
        }
    }
})
server.listen(4200)
console.log('Server is listening on 4200')