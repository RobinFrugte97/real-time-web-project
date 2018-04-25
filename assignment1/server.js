var express = require('express')
var request = require('request')
var ejs = require('ejs')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var syllable = require('syllable')
var SpotifyWebApi = require('spotify-web-api-node')
var rooms = ['eighties','ninethies','zeros','hiphop']
var previousRoom = 'General';
var playlist = [];
var users = [];

var scopes = [
   "user-read-private",
   "user-read-email",
   "playlist-read-private",
   "playlist-read-collaborative",
   "playlist-modify-public",
   "playlist-modify-private",
   "streaming",
   "user-read-currently-playing",
   "user-read-recently-played",
   "user-modify-playback-state",
   "user-read-playback-state",
   "user-top-read"
  ]

  var spotifyApi = new SpotifyWebApi({
    clientId : 'b7942d34c5244f0c8526e2e1d4d041dc',
    clientSecret : '10b2110d0f2f469d93eab12249c520a2',
    redirectUri : 'http://localhost:3000'
  });

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes);


console.log(authorizeURL);

spotifyApi.setAccessToken('BQCCfeTYRMLsl3xb5UhDy7eci3xehvmVU1qmlJGWN-5yiEZ7-tzqrktw2k1J_SlGJ-Jaw6WBQA70HEFs4EojI0hQ2gF_e7EQR65QPA1VviIFjIh3mPPyDuqkEWY0uwelGOisCkputsmWlZwCUgDhs1PHhZ4');

spotifyApi.getPlaylist('rf_nl', '6Fm35TZjZZ2XW62BG6YgAJ')
  .then(function(data) {
    var playlistData = data.body
    playlist.push(data.body.tracks.items);
  },function(err) {
    console.log('Something went wrong!', err);
  });
http.listen(3000)

express.static('global')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', function (req, res) {
  var randomTrackSpot = Math.floor(Math.random() * Math.floor(playlist[0].length))
  var randomTrackArtist = {
    trackName: playlist[0][randomTrackSpot].track.name,
    artist: playlist[0][randomTrackSpot].track.artists[0].name
  }
  console.log(randomTrackArtist);
  // var code = 'AQA10lBID3mfjeXaSDAjZLFGPF9-6aMza2_EZaJm2gcYWJfyIwEv8o7oseQnR1tafOwuQDXAKNYBPOySRTnBNmlWYmGpsddah2onVaNRE908fPzW3XELrpxYqTxOFx5iwLEd6knEMxMPNuBFE9maq3YJX1IWReLylrla_lRpASJhVIIYua3Bl33erIZzPsGIugzrPdtsz6dtcfRefnuZGQoO9EXnG8irvVvY98vuh4VciLpTrpR0LYh8-1ntKrwv1kSFmIYX670tcFT8Zg1z8v1Gt3-KgOZc5Ph6pDXwH0IKXBhX5IT-fusAbc71XETIy1oKYZCP43U4oE3mb2l6UCdMlLRs2yDb8_gnKzs';
  //
  // spotifyApi.authorizationCodeGrant(code)
  //   .then(function(data) {
  //     console.log('The token expires in ' + data.body['expires_in']);
  //     console.log('The access token is ' + data.body['access_token']);
  //     console.log('The refresh token is ' + data.body['refresh_token']);
  //
  //     // Set the access token on the API object to use it in later calls
  //     spotifyApi.setAccessToken(data.body['access_token']);
  //     spotifyApi.setRefreshToken(data.body['refresh_token']);
  //   }, function(err) {
  //     console.log('Something went wrong!', err);
  //   });
    res.render('index.ejs', {rooms: rooms, playlist: playlist[0].items, authorizeURL})

})
app.get('/callback', function(req, res) {
  res.render('callback.ejs')

})


io.on('connection', function(socket){
  users.push({userId: socket.id, room: '', userName: ''})
  var previousRoom = users.findIndex((obj => obj.userId == socket.id))
  console.log('previous room is ' + previousRoom);
  if(users[previousRoom].room === '') {
    users[previousRoom].room = 'General'
    socket.join('General')
  } else {
    socket.join(users[previousRoom].room)
  }
  socket.on('chat message', function(msg, name){
    var checkUser = users.findIndex((obj => obj.userId == socket.id))
    if (users[checkUser].userName === '') {
      console.log('username is empty' + name);
      users[checkUser].userName = name
    }
    io.to(users[checkUser].room).emit('chat message', msg, name)
  });
  socket.on('join room', function(room){
    socket.join(room)
    var roomId = room
    var objIndex = users.findIndex((obj => obj.userId == socket.id))
    users[objIndex].room = roomId
    var renderNaam = users[objIndex].userName
    console.log(renderNaam);
    console.log(users);
    io.to(users[objIndex].userId).emit('change room header', room)
    io.to(roomId).emit('join room', room, renderNaam)
  });
  socket.on('check current song', function() {
    spotifyApi.getMyCurrentPlaybackState({
    })
    .then(function(data) {
      // Output items
      console.log("Now Playing: ",data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  })
});
