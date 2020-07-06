import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDyX2MVPw0HvF4tO_XG-hpF_RCC8clVC6I",
    authDomain: "cart-ab772.firebaseapp.com",
    databaseURL: "https://cart-ab772.firebaseio.com",
    projectId: "cart-ab772",
    storageBucket: "cart-ab772.appspot.com",
    messagingSenderId: "460071741316",
    appId: "1:460071741316:web:a98cde3c8aa26fc97f1fd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root')

);

