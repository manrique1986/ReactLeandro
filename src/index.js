import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-CPBZslFLGfLYdf1X4KQz1R_GBY1a0q4",
  authDomain: "halsey-ameghino.firebaseapp.com",
  projectId: "halsey-ameghino",
  storageBucket: "halsey-ameghino.appspot.com",
  messagingSenderId: "842499506682",
  appId: "1:842499506682:web:fd8c517c765b8889e26443"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
