var admin = require("firebase-admin");

var serviceAccount = require("C:\Users\Dongerlord\Documents\SwampHacks\BlankProcess\AccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://swamphacks-c8941.firebaseio.com"
});


var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var usersRef = ref.child("users");
usersRef.set({
  alan: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});