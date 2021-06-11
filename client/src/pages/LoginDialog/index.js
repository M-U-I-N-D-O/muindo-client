import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import url from '../../url';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { dialogMode, userName, userEmail } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// import GoogleLogin from '../../components/LoginDialog/googleLogin';
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

const JWT_EXPIRY_TIME = 3600 * 1000;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
    height: '60px',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  divider: {
    backgroundColor: 'white',
    marginBottom: '1vh',
  },
  caption: {
    color: 'white',
    display: 'block',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LoginDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const mode = useSelector((state) => state.dialog.mode);

  const handleClose = () => {
    dispatch(dialogMode(0));
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
      // console.log(err);
      history.push('/error');
    }
  };

  const onLoginSuccess = (response) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh', response.data.refresh_token);

    setTimeout(() => {
      onSilentRefresh();
    }, JWT_EXPIRY_TIME - 60000);
    dispatch(userName('GUEST'));
    dispatch(userEmail('GUEST@elice.com'));
    dispatch(dialogMode(-1));
    history.push('/confirm');
  };

  const handleClick = () => {
    try {
      axios.get('auth/access-token-guest').then((response) => {
        onLoginSuccess(response);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Dialog fullScreen open={mode === 1} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container>
          <PageName>MUINDO</PageName>

          <ButtonContainer>
            <Divider className={classes.divider} variant="middle" />
            <Typography className={classes.caption} variant="caption">
              간편로그인
            </Typography>

            {/* <GoogleLogin /> */}
            <LoginButton onClick={() => handleClick()}>
              <LoginBtnText>Guest 로그인하기</LoginBtnText>
            </LoginButton>

            <Typography className={classes.caption} variant="caption">
              미리보기
            </Typography>
          </ButtonContainer>
        </Container>
      </Dialog>
    </div>
  );
}

export default LoginDialog;

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
const PageName = styled.h1`
  font-size: 36px;
  color: white;
`;
const ButtonContainer = styled.div`
  padding-top: 40vh;
`;
const LoginButton = styled.button`
  margin: 2vh 0;
`;
const LoginBtnText = styled.h2`
  font-weight: bold;
  font-size: 16px;
  margin: 8px 2px;
`;
