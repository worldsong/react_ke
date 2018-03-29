const http = require('http')
const fs = require('fs')
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const React = require('react')
const App = require('./src/App.js')
function genHTML (body) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="author" content="worldsong" />
    <meta name="website" content="http://songfens.club/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React 服务器端渲染</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="dist/main.js"></script>
  </body>
  </html>
  `
}
const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        let body = ReactDOMServer.renderToString(React.createElement(App))
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(genHTML(body))
        response.end()
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