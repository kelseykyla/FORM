import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
const config =  {
  apiKey: "AIzaSyAWWfdnT40OehYf_TtBsCzvDlMbtUGiHZ8",
  authDomain: "to-do-dc857.firebaseapp.com",
  databaseURL: "https://to-do-dc857.firebaseio.com",
  projectId: "to-do-dc857",
  storageBucket: "to-do-dc857.appspot.com",
  messagingSenderId: "78969355456",
  appId: "1:78969355456:web:ee8b6ba51e00f07ea88125",
  measurementId: "G-2JBD1Y9SFK"
};
 firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
