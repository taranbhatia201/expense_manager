import React from "react";
import firebase from "firebase";

const Google_login = () =>{

    const onSubmit = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
         .signInWithPopup(provider)
         .then((result) => {
             var credential = result.credential;
             var token = result.token;
             var user = result.user;
         })
         .catch((error) => {
             console.log(error);
         });
    }
    return(
        <div className="social-auth">
           <button onClick={onSubmit}>Google Signin</button>
        </div>
        
    );
}

export default Google_login;