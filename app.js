// Initialize Firebase
var config = {
  apiKey: "AIzaSyCpDQxosN7nMFbs4Ja7Glf35oNdF1_niWo",
  authDomain: "fir-2-2f2ba.firebaseapp.com",
  databaseURL: "https://fir-2-2f2ba.firebaseio.com",
  projectId: "fir-2-2f2ba",
  storageBucket: "fir-2-2f2ba.appspot.com",
  messagingSenderId: "660552483186"
};
firebase.initializeApp(config);
var database = firebase.database();

var genre;
//unique userid
var userId = database.ref().push().key;

function setGenre(genre){
  genre = genre;
  writeUserData(userId, genre);
}

function writeUserData(userId, genre) {
  database.ref(userId).set({
    genre: genre,
  });
  console.log(genre);
  console.log(userId);
}
