  
import React from 'react'
import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpUXt58f0VoH5v0F2CZbkViUO9aKPus5s",
    authDomain: "todo-redux-a1.firebaseapp.com",
    projectId: "todo-redux-a1",
    storageBucket: "todo-redux-a1.appspot.com",
    messagingSenderId: "933232695506",
    appId: "1:933232695506:web:3177caa545cd1548a3350b"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)