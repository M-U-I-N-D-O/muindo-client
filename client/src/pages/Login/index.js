import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import FirebaseLogIn from './logIn';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
    // backgroundImage: `url(${'/images/home/sherlock_wall.png'})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // container: {
  //   display: 'flex',
  //   height: '100%',
  //   justifyContent: 'center',
  // },
  // contentsBox: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingBottom: '3.5rem',
  //   paddingTop: '5rem',
  //   backgroundColor: 'white',
  //   width: '80vw',
  //   maxWidth: '1024px',
  //   overflow: 'auto',
  // },
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
  subLink: {
    textDecoration: 'none',
    fontSize: '13px',
    color: 'grey',
  },
}));

function SelfLogin() {
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
          <Input value={values.id} onChange={handleChange('id')} className={classes.id} />
        </FormControl>

        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
              </InputAdornment>
            }
            className={classes.password}
          />
        </FormControl>
        <div>
          <Link to="/home" className={classes.subLink}>
            아이디/
          </Link>
          <Link to="/" className={classes.subLink}>
            비밀번호 찾기
          </Link>
          &nbsp;&nbsp;
          <Link to="/signup" className={classes.subLink}>
            회원가입
          </Link>
        </div>
        <br />
        <LuxuryBtn htmlFor="submit" className={classes.logInBtn} type="submit" onClick={handleClick} disabled={!values.id || !values.password}>
          로그인
        </LuxuryBtn>
      </form>
    </div>
  );
}

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logoImg} alt="" src="/images/login/login_logo.png" />
      <br />
      <br />
      <br />

      <div>
        <SelfLogin />
      </div>
      <br />
      <br />
      <br />
      <div>
        <FirebaseLogIn />
      </div>
    </div>
    // <div className={classes.root}>
    //   <div className={classes.container}>
    //     <div className={classes.contentsBox}>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 240px;
  min-width: 190px;
  width: 15vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0.3em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  cursor: pointer;

  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
  :disabled {
    background-position: 1% 50%;
    color: rgba(223, 190, 106, 0.7);
    border: 1px solid rgba(223, 190, 106, 0.3);
    cursor: default;
  }
`;
