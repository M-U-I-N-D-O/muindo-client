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
import Paper from '@material-ui/core/Paper';

import firebase from 'firebase/app';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
    height: '60px',
  },
  paper: {
    border: '5px soild red',
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
  const shareByKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
        console.log(window.Kakao.isInitialized());
      }
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'MUINDO에서 초대장이 도착했어요!',
          description: '쉽고 편한 룩북 컨펌 서비스, MUINDO',
          imageUrl: 'https://ifh.cc/g/6R44lA.png',
          link: {
            mobileWebUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com/`,
            webUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com/`,
            // mobileWebUrl: window.location.href,
            // webUrl: window.location.href,
          },
        },

        buttons: [
          {
            title: '나도 룩북 만들기',
            link: {
              mobileWebUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com/`,
              webUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com/`,
            },
          },
        ],
      });
    }
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
        {localStorage.getItem('token') ? (
          <Container>
            <MainText>{name}님</MainText>
            <SubText>{email}</SubText>
            <SubText>반갑습니다 :)</SubText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LogoutButton onClick={signOut}>
                <Paper className={classes.paper} elevation={3}>
                  <LogoutButtonText>로그아웃</LogoutButtonText>
                </Paper>
              </LogoutButton>
            </div>
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

        <List style={{ padding: '0px' }}>
          <ListItem
            button
            onClick={() => {
              if (localStorage.getItem('token')) {
                dispatch(dialogMode(-1));
                history.push('/my_page_closet_list');
              } else {
                dispatch(dialogMode(1));
              }
            }}
          >
            <ListText>나의 룩북 리스트</ListText>
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              if (localStorage.getItem('token')) {
                dispatch(dialogMode(-1));
                history.push('/my_page_like_list');
              } else {
                dispatch(dialogMode(1));
              }
            }}
          >
            <ListText>저장한 룩북 리스트</ListText>
          </ListItem>
          <Divider />
          <Helmet>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          </Helmet>

          <ListItem button onClick={shareByKakao}>
            <ListText>카카오로 공유하기</ListText>
          </ListItem>
          <Divider />

          <ListItem
            button
            onClick={() => {
              dispatch(dialogMode(-1));
              history.push('/about');
            }}
          >
            <ListText>About MUINDO</ListText>
          </ListItem>
        </List>

        {/* {localStorage.getItem('token') && (
          
        )} */}
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
  /* position: absolute;
  bottom: 5%; */
  width: 100px;
  border: none;
  margin: 0 auto;
  background-color: black;
`;
const LogoutButtonText = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4vh;
  margin-top: 3vh;
  margin-bottom: 0;
`;
