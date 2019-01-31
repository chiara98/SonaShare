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


function enterPreferences() {
  var rap = document.querySelector('#rap').value;
  var rock = document.querySelector('#rock').value;
  var kanye = document.querySelector('#kanye').value;
  var country = document.querySelector('#country').value;
  var indie = document.querySelector('#indie').value;

  createUser(rap, rock, kanye, country, indie);
  console.log('added to firebase');
  // switchViews();
}

function createUser(rap, rock, kanye, country, indie) {
  var genresData = {
    rap: parseInt(rap),
    rock: parseInt(rock),
    kanye: parseInt(kanye),
    country: parseInt(country),
    indie: parseInt(indie)
  }
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var userId = db.ref('users/').push().key;
  db.ref('users/' + userId).set({
    genres : genresData
  });
}
//
// function switchViews() {
//   var onboarding = document.querySelector('.onboarding');
//   var app = document.querySelector('.app');
//   onboarding.style.visibility = 'hidden';
//   app.style.visibility = 'visible';
// }
