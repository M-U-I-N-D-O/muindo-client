import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

var uiConfig = {
  signInFlow: 'popup',

  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === 'password') {
        try {
          await authResult.user.sendEmailVerification();
          console.log('Check Email');
        } catch (e) {
          console.log('Error!');
        }
      }
      return false;
    },
  },
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log('Successfully Signed Out');
    })
    .catch(function () {
      console.log('Errror!');
    });
};

const LogIn = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return authObserver;
  });

  console.log('user', user);

  if (user) {
    return (
      <>
        <p>
          Welcome! {user.displayName}
          <br />
          <small>{user.email}</small> <br />
          <button onClick={signOut}>Log out</button>
        </p>
      </>
    );
  } else {
    return (
      <>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    );
  }
};

export default LogIn;
