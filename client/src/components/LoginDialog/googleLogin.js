import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogMode, userName, userEmail } from '../../actions';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from 'axios';

var uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID],
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

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('Successfully Signed Out');
        dispatch(userName(''));
        dispatch(userEmail(''));
      })
      .catch(function () {
        console.log('Error!');
      });
  };
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log('user info', user);
      if (user) {
        // console.log('provide_Id : ', user.providerData[0].providerId);
        // console.log('user name : ', user.providerData[0].displayName);
        // console.log('user email : ', user.providerData[0].email);
        // console.log('user uid : ', user.providerData[0].uid);

        const userInfo = {
          provider: user.providerData[0].providerId,
          name: user.providerData[0].displayName,
          email: user.providerData[0].email,
          uid: user.uid,
        };
        try {
          const url = 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/auth/access-token';
          const json = JSON.stringify(userInfo);
          axios
            .post(url, json, {
              headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
              },
            })
            .then((response) => {
              console.log('post 결과 : ', response);
              localStorage.setItem('token', response.data.access_token);
            });
        } catch (err) {
          console.log(err);
        }
        dispatch(userName(user.providerData[0].displayName));
        dispatch(userEmail(user.providerData[0].email));
        dispatch(dialogMode(-1));
      }
      console.log('firebase auth : ', firebase.auth());
    });
    return authObserver;
  }, []);

  return (
    <>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};

export default GoogleLogin;
