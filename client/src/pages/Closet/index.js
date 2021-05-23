import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Closet() {
  const classes = useStyles();

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default Closet;
