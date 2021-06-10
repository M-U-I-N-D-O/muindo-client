import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { dialogMode } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import GoogleLogin from '../../components/LoginDialog/googleLogin';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
    height: '60px',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  divider: {
    backgroundColor: 'white',
    marginBottom: '1vh',
  },
  caption: {
    color: 'white',
    display: 'block',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LoginDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.dialog.mode);
  const history = useHistory();

  const handleClose = () => {
    dispatch(dialogMode(0));
  };

  return (
    <div>
      <Dialog fullScreen open={mode === 1} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container>
          <PageName>MUINDO</PageName>

          <ButtonContainer>
            <Divider className={classes.divider} variant="middle" />
            <Typography className={classes.caption} variant="caption">
              간편로그인
            </Typography>

            <GoogleLogin />

            <Typography className={classes.caption} variant="caption">
              미리보기
            </Typography>
          </ButtonContainer>
        </Container>
      </Dialog>
    </div>
  );
}

export default LoginDialog;

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
const PageName = styled.h1`
  font-size: 36px;
  color: white;
`;
const ButtonContainer = styled.div`
  padding-top: 40vh;
`;
