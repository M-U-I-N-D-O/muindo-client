import React from 'react';
// import whiteBrick from '../../../public/images/intro/white_brick.jpg';

// import whiteBrick from '';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/intro/white_brick6.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    height: '100vh',
  },
}));

function Intro() {
  const classes = useStyles();

  return <div className={classes.root}>ㅎㅇㅎㅇㅎㅇ</div>;
}

export default Intro;
