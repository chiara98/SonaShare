var config = {
 apiKey: "AIzaSyCSxkV9qzTzkEhCEuvvCdxOYE0bNV4XH_c",
 authDomain: "nwhackss.firebaseapp.com",
 databaseURL: "https://nwhackss.firebaseio.com",
 projectId: "nwhackss",
 storageBucket: "nwhackss.appspot.com",
 messagingSenderId: "251077901920"
};
firebase.initializeApp(config);
var db = firebase.database();

token_ = 'BQCmWKemxzrpZlyu8TBxln84UvFjKnJ3CSJkK4vZiULard6elvNzJTRJQWiq6aEozCwhM4GvgLXdixTgdduedme1aLJcpNI-fFJTJIaZObu60b36JDVluF4bjsXrGxIcdYgX3TL8BHjsoieqh1s';

setInterval(sing, 10000);

var rap = '37i9dQZF1DX0XUsuxWHRQd';
var rock = '20LKsiDZd4ALrlihncFcFa';
var kanye = '0ZGlgjdnEiVHh2T3CLE4p7';
var country = '37i9dQZF1DWYV2Gh2QglGo';
var indie = '37i9dQZF1DX5y8xoSWyhcz';

playlistUriDict = {
  rap: '37i9dQZF1DX0XUsuxWHRQd',
  rock: '20LKsiDZd4ALrlihncFcFa',
  kanye: '0ZGlgjdnEiVHh2T3CLE4p7',
  country: '37i9dQZF1DWYV2Gh2QglGo',
  indie: '37i9dQZF1DX5y8xoSWyhcz'
}

var playlistUri = rap;

var i = 1;
function sing() {
  var genreSelected = roll(topThree);
  playlistUri = playlistUriDict[genreSelected];
  addToStream(i, genreSelected);
  play(playlistUri);
}

function addToStream(i, genreSelected) {
  var stream = document.getElementById('stream');
  var text = 'Song #' +i + ' has the genre of ' + genreSelected + '\n\n';
  stream.innerHTML += '<h3>' + text + '</h3>';
}

function play(playlistUri) {

  var url = 'https://api.spotify.com/v1/me/player/play';
  var pos = Math.floor(Math.random() * 51);
  var data = {
    "context_uri": "spotify:playlist:" + playlistUri,
    "offset": {
      "position": pos
    },
    "position_ms": 0
  }
  var request = new XMLHttpRequest();

  request.open("PUT", url, true);

  request.setRequestHeader('Accept', 'application/json');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Bearer ' + token_);
  request.send(JSON.stringify(data));
  request.onreadystatechange = function() {
    if (request.readyState == request.DONE) {
      console.log('Success');
    }
  }
}

var genreCounters = {
  'rap': 0,
  'rock': 0,
  'kanye': 0,
  'country': 0,
  'indie': 0
}

var topThree = ['rap', 'rock', 'indie'];
var users = db.ref('users');
users.on('child_added', function(user) {
  var genreData = user.val()['genres']
  for (key in genreData) {
    genreCounters[key] += genreData[key];
  }

  topThree = extractTopThree(genreCounters);
});

function extractTopThree(genreCounters) {

  function getTopThree(musicalCounters) {
    var topThree = musicalCounters.sort(function(a, b) {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
    });
    return topThree.slice(0, 3);
  }

  var genresList = []
  for (var key in genreCounters) {
    genresList.push({
      genre: key,
      count: genreCounters[key]
    });
  }
  return getTopThree(genresList);
}

function roll(topThree) {
  var genres = topThree.map(function(obj) {
    return obj.genre
  });
  return genres[Math.floor(Math.random() * genres.length)]
}
