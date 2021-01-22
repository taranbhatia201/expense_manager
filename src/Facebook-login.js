import React, {useState,useEffect} from 'react';
import firebase from "firebase";

const Facebook_login = () => {
    const onSubmit = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            var credential = result.credential;
            var user = result.user;
            var accessToken = credential.accessToken;
          })
          .catch((error) => {
              console.log(error);
          });
    }
    const authListener = () =>{
        firebase.auth().onAuthStateChanged(user => {
          if(user)
          {
            console.log(user);
          }
          else{
            console.log("not logedin");
          }
        });
      };
    
    useEffect(() => {
        authListener();
    },[]);
    return(
        <div className="social-auth">
            <button onClick={onSubmit}>Facebook login</button>
        </div>
    );
}

export default Facebook_login;