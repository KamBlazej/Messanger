import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA7UZfYC8hkvgbZwieQretB-hVchKRPVig",
    authDomain: "komunikator-dc4a1.firebaseapp.com",
    databaseURL: "https://komunikator-dc4a1.firebaseio.com",
    projectId: "komunikator-dc4a1",
    storageBucket: "komunikator-dc4a1.appspot.com",
    messagingSenderId: "21141771736"
  };
var Fire = firebase.initializeApp(config);
export default Fire;