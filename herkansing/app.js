var express = require('express')
var request = require('request')
var ejs = require('ejs')
var fetch = require('node-fetch')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var data = []
var imageDing = ''


http.listen(3000)

express.static('global')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', function (req, res) {
    res.render('index.ejs')
})

io.on('connection', function(socket){
  io.to(socket.id).emit('setImage', imageDing)
  socket.on('loadNotes', function(){
    io.to(socket.id).emit('onConnect', data)
  })
  socket.on('createNote', function(xCoords, yCoords){
    console.log(xCoords, yCoords);
    io.emit('note', xCoords, yCoords)
  })
  socket.on('saveNote', function(noteData) {
    data.push(noteData)
    console.log(data);
  })
  socket.on('imageSave', function(source){
    imageDing = source;
    io.emit('renderImage', source)
  })
  socket.on('retrieveImages', function(searchQuery){
    var noSpace = searchQuery.replace(/\s/g, '+');
    var query = noSpace.toLowerCase();
    fetch('https://pixabay.com/api/?key=9088033-035d680319ca91d1c56601c80&q=' + query + '&image_type=photo&per_page=10')
      .then(function(response) {
        var pixabayData = response.json()
        return pixabayData
      })
      .then(function(myJson) {
        var dete = myJson.hits
        console.log(dete);
        io.to(socket.id).emit('returnImages', dete)
      });
  })
});
