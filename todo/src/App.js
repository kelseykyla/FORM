import React, { useState } from 'react';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import { createContext } from 'react';
import Dashboard from './dashboad/dash';

//context
export const UserContext = React.createContext();

firebase.initializeApp({
  apiKey: "AIzaSyBCOXNCELsV_hq9tdhNjv-jZheMZrRSi2k",
  authDomain: "farm-7541a.firebaseapp.com",
  databaseURL: "https://farm-7541a.firebaseio.com",
  projectId: "farm-7541a",
  storageBucket: "farm-7541a.appspot.com",
  messagingSenderId: "597875088314",
  appId: "1:597875088314:web:f301d8362ec21eec63db83"
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()


function App() {
  const [googleUser, setGoogleUser] = useState(null)

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .then((res) => {
      
      console.log(res.user)
      setGoogleUser(res.user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
  return (
    <>
      <UserContext.Provider value={{ user: googleUser }}>
        {
          googleUser !== null ? <Dashboard /> :      <>
          <div className="container">
            <form className="form" id="login">
              <div className="form-message form-message-error"></div>
              <div className="form-input-group" >
                <i className="fa fa-user-circle icon" aria-hidden="true"></i>
                <input type="text" className="form-input" placeholder="Full Name" />
                <div className="form-input-error-message"></div>
  
              </div>
  
              <div className="form-input-group">
                <i className="fa fa-at icon" aria-hidden="true"></i>
                <input type="email" className="form-input" placeholder="Email" />
                <div className="form-input-error-message"></div>
  
              </div>
              <div className="form-input-group">
                <i className="fa fa-key icon" aria-hidden="true"></i>
                <input type="password" className="form-input form" placeholder="Password" />
                <div className="form-input-error-message"></div>
  
              </div>
              <div className="form-input-group">
                <i className="fa fa-key icon" aria-hidden="true"></i>
                <input type="password" className="form-input" placeholder="Confirm Password" />
                <div className="form-input-error-message"></div>
  
              </div>
  
              <div style={{ textAlign: 'center' }}>
                <input type="submit" value="Sign Up" className="btn-solid" />
              </div>
              <div className="social-media" style={{ textAlign: 'center' }}>
                <button type='button' className="social-icon" onClick={
                  () => signInWithGoogle()
                }>
                  <i className="fa fa-google fa-10x" aria-hidden="true"></i>
                </button>
              </div>
  
            </form>
          </div>
          <div className="right-container">
            <p>create account</p>
          </div>
          </>
        }
  
      </UserContext.Provider>
    </>

  );
}

export default App;
