import firebase from 'firebase/app';
import "firebase/database"

      // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCkj2n4yR5b0TB0rPB1VsRHfzyeKdi7Yzw",
    authDomain: "firstapp-ae03a.firebaseapp.com",
    databaseURL: "https://firstapp-ae03a.firebaseio.com",
    projectId: "firstapp-ae03a",
    storageBucket: "firstapp-ae03a.appspot.com",
    messagingSenderId: "483354829706",
    appId: "1:483354829706:web:4bef2a119edcb3705fde73"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase