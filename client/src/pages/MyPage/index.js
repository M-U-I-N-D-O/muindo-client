import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { dialogMode, userName, userEmail } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Slide from '@material-ui/core/Slide';

import firebase from 'firebase';

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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function MyPage() {
  const classes = useStyles();
  const mode = useSelector((state) => state.dialog.mode);
  const name = useSelector((state) => state.login.name);
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClose = () => {
    dispatch(dialogMode(0));
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('Successfully Signed Out');
        dispatch(userName(''));
        dispatch(userEmail(''));
        dispatch(dialogMode(-1));
        localStorage.removeItem('token');
        history.push('/main');
      })
      .catch(function () {
        console.log('Error!');
      });
  };

  return (
    <div>
      <Dialog fullScreen open={mode === 2} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {name ? (
          <Container>
            <MainText>{name}님</MainText>
            <SubText>{email}</SubText>
            <SubText>반갑습니다 :)</SubText>
          </Container>
        ) : (
          <Container onClick={() => dispatch(dialogMode(1))}>
            <MainText>로그인하세요</MainText>
            <SubText>
              무인도 회원등록하고 <br />
              본인의 패션 룩을 등록해보세요 :)
            </SubText>
          </Container>
        )}

        <List>
          <ListItem
            button
            onClick={() => {
              dispatch(dialogMode(-1));
              history.push('/about');
            }}
          >
            <ListText>About MUINDO</ListText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => console.log('내 옷장 확인하기')}>
            <ListText>내 옷장 확인하기</ListText>
          </ListItem>
        </List>

        {name && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LogoutButton onClick={signOut}>
              <LogoutButtonText>로그아웃</LogoutButtonText>
            </LogoutButton>
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 240px;
  background-color: black;
`;
const MainText = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin: 0;
  padding-left: 15px;
`;
const SubText = styled.p`
  font-size: 18px;
  font-weight: lighter;
  color: white;
  padding-left: 15px;
  margin: 20px 0;
`;
const ListText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
const LogoutButton = styled.button`
  position: absolute;
  bottom: 5%;
  width: 100px;
  border: 2px solid black;
  margin: 0 auto;
  background-color: none;
`;
const LogoutButtonText = styled.h3`
  margin: 1vh;
`;
