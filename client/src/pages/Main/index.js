import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/main/sherlock_wall.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  contentsBox: {
    backgroundColor: 'white',
    width: '768px',
    justifyContent: 'center',
  },
  navBar: {
    position: 'sticky',
    top: '0',
    backgroundColor: 'black',
    height: '65px',
  },
  footer: {
    backgroundColor: 'grey',
    height: '65px',
    position: 'fixed',
    width: '768px',
    bottom: '0',
  },
}));
function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contentsBox}>
          <div className={classes.navBar}></div>
          <div className={classes.footer}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
