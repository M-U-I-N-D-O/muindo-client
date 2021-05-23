import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop: '20px',
  },
  closetImg: {
    width: '700px',
  },
}));

function Closet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <TopComment comment={'옷장을 클릭해 열어보세요.'} />
      </div>
      <img className={classes.closetImg} alt="" src="/images/closet/closet_open.jpg" />

      {/* <div>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
      </div>
      <div>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
        <h1>This is Closet Page</h1>
      </div> */}
    </div>
  );
}

export default Closet;
