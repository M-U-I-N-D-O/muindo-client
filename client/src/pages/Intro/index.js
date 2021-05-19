import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/intro/white_brick6_3.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  introElements: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '200px',
  },
  signBox: {
    display: 'flex',
    marginTop: '70px',
    width: '400px',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323B48',
    position: 'fixed',
    bottom: '580px',
  },
  signText: {
    fontFamily: 'Lobster',
    fontSize: '55px',
    color: '#E2B063',
  },
  door: {
    width: '250px',
    height: '500px',
    position: 'fixed',
    bottom: '40px',
  },
  doorBottom: {
    width: '360px',
    height: '40px',
    backgroundColor: '#29303A',
    position: 'fixed',
    bottom: '0',
  },
}));

function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.introElements} to="/main">
        <div className={classes.signBox}>
          <h1 className={classes.signText}>Sherlock Odd</h1>
          <img
            className={classes.door}
            alt=""
            src="/images/intro/intro_door.jpg"
          />
          <div className={classes.doorBottom}></div>
        </div>
      </Link>
    </div>
  );
}

export default Intro;
