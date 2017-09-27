var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
// Serve up public/ftp folder
var serve = serveStatic('home/useradmin/projects/fuelStatusClient2/build', {'index': ['index.html', 'index.htm']})
 
// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
  console.log(server)
  console.log(serve)
  console.log('hi')
})
 
// Listen
server.listen(3080)