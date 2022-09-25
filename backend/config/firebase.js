const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyCL0vICuMmCECiS3VKQdFkEhHrqA9Nndns",
  authDomain: "shose-shope.firebaseapp.com",
  databaseURL: "https://shose-shope-default-rtdb.firebaseio.com",
  projectId: "shose-shope",
  storageBucket: "shose-shope.appspot.com",
  messagingSenderId: "447336252407",
  appId: "1:447336252407:web:c93ff9f556a69b521664f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = Users;