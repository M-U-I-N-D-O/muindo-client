import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarMode } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/intro/white_brick6_3.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signBox: {
    display: 'flex',
    // marginTop: '70px',
    width: '35vw',
    height: '15vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323B48',
    position: 'fixed',
    top: '9vh',
  },
  signText: {
    fontFamily: 'Lobster',
    fontSize: '5vw',
    color: '#E2B063',
  },
  door: {
    // flexGrow: 1,
    width: '26vw',
    height: '65vh',
    position: 'fixed',
    bottom: '4vh',
  },
  doorBottom: {
    width: '35vw',
    height: '4vh',
    backgroundColor: '#29303A',
    position: 'fixed',
    bottom: '0',
  },
}));

function Intro() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNavbarMode = () => {
    dispatch(navbarMode(1));
  };
  return (
    <div className={classes.root}>
      <Link className={classes.container} to="/home">
        <div className={classes.signBox}>
          <h1 className={classes.signText}>Sherlock Odds</h1>
          <img
            className={classes.door}
            alt=""
            src="/images/intro/intro_door.jpg"
            onClick={handleNavbarMode}
          />
          <div className={classes.doorBottom}></div>
        </div>
      </Link>
    </div>
  );
}

export default Intro;
