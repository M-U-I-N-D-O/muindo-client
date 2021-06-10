import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dialogMode, userName, userEmail } from '../../actions';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from 'axios';
import url from '../../url';

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

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

const JWT_EXPIRY_TIME = 3600 * 1000;

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = (response, user) => {
    console.log('post 결과 : ', response);
    console.log('user :', user);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
    console.log('access token : ', localStorage.getItem('token'));
    console.log('refresh token : ', localStorage.getItem('refresh'));

    setTimeout(() => {
      onSilentRefresh();
    }, 5000);
    dispatch(userName(user.name));
    dispatch(userEmail(user.email));
    dispatch(dialogMode(-1));
  };

  const onSilentRefresh = () => {
    const json = JSON.stringify(localStorage.getItem('refresh'));
    try {
      axios
        .post('/auth/refresh', json, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('refresh')}`,
          },
        })
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);

          console.log('new_access_token : ', response.data.access_token);
          console.log('new_refresh_token : ', response.data.refresh_token);
        });
    } catch (err) {
      console.log(err);
      history.push('/error');
    }
  };

  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      // console.log('user info', user);
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
          const json = JSON.stringify(userInfo);
          axios
            .post('auth/access-token', json, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((res) => onLoginSuccess(res, userInfo));
        } catch (err) {
          console.log(err);
        }
        console.log('firebase auth : ', firebase.auth());
      }
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
