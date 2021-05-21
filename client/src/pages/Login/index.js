import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
        <div className={classes.contentsBox}></div>
      </div>
    </div>
  );
}

export default Login;
