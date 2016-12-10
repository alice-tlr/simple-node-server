//the main point of the server file is to expouse routes that can be found by the browser.Remember the hhierarchy of stating all modules, first the ones we have a dependancy but we didn't write oursleves, then the ones we did write, then any module level variables we will use

var express = require('express')

var routes = require('./routes')//here we pull in the routes file.
var server = express() //Here we create our server instance,the express module exposes a function, and if we call that function we get a server file.

module.exports = server //this means we can export this server object to another file

//MIDDLEWARE
server.use(express.static('public'))//this provides everything in the public folder we want to provide from the route of the website /

//ROUTES
server.get('/', routes.getHome)
//Here we create the actual route, using 'get', this is something that can be consumped thru a https GET request. We specify the route of the web server with the '/'...the GET funtion also needs a call back which is the signiture of accepting a req and res
