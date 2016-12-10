var test = require('tape')//this is tape, we require tape and it respondes with a function
var cheerio = require('cheerio')//another test,
var request = require ('supertest')//this var is typically called request because thats what it does, and we pull that in with require supertest

var server = require ('../server')
//now we need to pull in the code we are testing, which is our server file.

//below is a simple test
test('/ returns an h1', function(t) {//description, when we go to home we return a h1, it requires a call back, which is an annonomus function
  //ACT (normally we use arrange, act, and assert, but this is small)
  request(server)//we request supertest on server, and pass the server the requests, so it knows what server we're making these requests on
  .get('/')//make a get request on /
  .expect(200)//http status
  .end(function(err, res) {// when we call end we have to pass it a function with callback, with a node signiture which is err, and res
    //ASSERT
    var $ = cheerio.load(res.text)//thats gives us a $ we can use to make other assertions
    //we can use
    t.ok($('h1').text().includes('shall'), "found h1")//once response comes back, we want to assert res.text includes some key words, and we give it a description
    t.end()//we have to tell tape when to end
  })
})

//this is testing everything inside our route, which is more than a unit test, more a intergration test. It's making sure express is doing what it should.
