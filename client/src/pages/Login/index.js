import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LogIn from './logIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/home/sherlock_wall.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  contentsBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '3.5rem',
    paddingTop: '5rem',
    backgroundColor: 'white',
    width: '80vw',
    maxWidth: '768px',
    overflow: 'hidden',
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contentsBox}>
          <form>
            <input type="text" placeholder="아이디를 입력하세요" />
            <input type="password" placeholder="비밀번호를 입력하세요" />
            <div>
              <button type="submit">로그인</button>
            </div>
            <div>
              <LogIn />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
