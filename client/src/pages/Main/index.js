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
    height: '100%',
    justifyContent: 'center',

    // backgroundColor: 'red',
  },
  contentsBox: {
    display: 'flex',
    backgroundColor: 'white',
    width: '768px',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  navBar: {
    position: 'fixed',
    width: '768px',
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
  menuButton: {
    width: '220px',
    height: '220px',
    backgroundColor: 'blue',
    margin: '60px 30px',
  },
}));

function MenuButton() {
  const classes = useStyles();
  return (
    <div className={classes.menuButton}>
      <h1>버튼</h1>
    </div>
  );
}

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contentsBox}>
          <div className={classes.navBar}></div>
          <div>
            <MenuButton />
            <MenuButton />
          </div>
          <div>
            <MenuButton />
            <MenuButton />
          </div>
          <div className={classes.footer}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
