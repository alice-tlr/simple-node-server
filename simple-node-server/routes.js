//Here we are exporting the objects, getHome...get(the http method on Home)
var path = require('path')

module.exports = {
  getHome: getHome //here is the property getHome, with the value of the getHome function below
}

function getHome (req, res) {
  var file = path.join(__dirname, 'home.html')
  res.sendFile(file)
}
//this sends back a file from
//__dirname is a global but we will glue the current directory name with the file that we want to return, so we create the path module at the top of the page, which is already part of node.
