import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/analytics';

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyCCKsPhC-6UTLZhabWRRO8QwlX9eJLjop4",
    authDomain: "nuxt-auth-example-4f952.firebaseapp.com",
    databaseURL: "https://nuxt-auth-example-4f952.firebaseio.com",
    projectId: "nuxt-auth-example-4f952",
    storageBucket: "nuxt-auth-example-4f952.appspot.com",
    messagingSenderId: "1082090427838",
    appId: "1:1082090427838:web:a2d7e6cdf82d30c2b915ef",
    measurementId: "G-STZZHQSE2W"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase;