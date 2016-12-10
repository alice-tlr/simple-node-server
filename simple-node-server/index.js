var server = require('./server')
//because we are in the same folder we can pull the file in like this
var PORT = 3000
//we created a standard node app port


server.listen(PORT, function() {
  console.log('Server is listening', PORT)
})
//above we are going to server.listen no at port we created
//we will give it a call back so we can see something on the terminal

//the package.JSON file has a nice facility the NPM gives us to run scripts.

//if we create a start script it will make it easy for us to run this file, and acts as documentation for anyone who clones or downloads it later, they will see how this app should be built, started, tested etc.
