import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));
function Main() {
  const classes = useStyles();

  return <h1>This is Main Page</h1>;
}

export default Main;
