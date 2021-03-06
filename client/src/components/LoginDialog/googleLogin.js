import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dialogMode, userName, userEmail } from '../../actions';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from 'axios';
import url from '../../url';
import firebase from 'firebase/app';
import 'firebase/auth';

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
        } catch (e) {
          console.log(e.message);
        }
      }
      return false;
    },
  },
};

const JWT_EXPIRY_TIME = 3600 * 1000;

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = (response, user) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);
  
    setTimeout(() => {
      onSilentRefresh();
    }, JWT_EXPIRY_TIME - 60000);
    dispatch(userName(user.name));
    dispatch(userEmail(user.email));
    dispatch(dialogMode(-1));
    history.push('/confirm');
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
        });
    } catch (err) {
      history.push('/error');
    }
  };

  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
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
        } catch (e) {
          console.log(e.message);
        }
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
