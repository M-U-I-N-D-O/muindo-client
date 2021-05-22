import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '3.5rem',
    paddingTop: '5rem',
    backgroundColor: 'white',
    width: '80vw',
    maxWidth: '768px',
    overflow: 'auto',
  },
  logoImg: {
    minHeight: '90px',
    minWidth: '70px',
    maxHeight: '105px',
    maxWidth: '90px',
    height: '14vh',
    width: '11vw',
    marginBottom: '3vh',
  },
  logInForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
    minWidth: '500px',
    maxHeight: '150px',
    maxWidth: '130px',
    height: '15vh',
    width: '12vw',
  },
  label: {
    display: 'inline-block',
    textAlign: 'right',
    width: '80px',
  },
  id: {
    minHeight: '40px',
    minWidth: '215px',
    maxHeight: '40px',
    maxWidth: '250px',
    height: '1vh',
    width: '3vw',
  },
  password: {
    minHeight: '40px',
    minWidth: '215px',
    maxHeight: '40px',
    maxWidth: '250px',
    height: '1vh',
    width: '3vw',
  },
  signInContents: {
    display: 'inline-block',
  },
}));

function Password() {
  const classes = useStyles();

  const [values, setValues] = useState({
    id: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClick = () => {
    console.log(values.id);
    console.log(values.password);
  };

  return (
    <div>
      <form className={classes.logInForm}>
        <FormControl>
          <InputLabel>ID</InputLabel>
          <Input
            value={values.id}
            onChange={handleChange('id')}
            className={classes.id}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            className={classes.password}
          />
        </FormControl>
        <br />

        <button
          className={classes.logInBtn}
          type="submit"
          onClick={handleClick}
          disabled={!values.id || !values.password}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contentsBox}>
          <img
            className={classes.logoImg}
            alt=""
            src="/images/login/login_logo.png"
          />
          <div>
            <Password />

            <LogIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
