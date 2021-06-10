import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userName, userEmail, bottomNavMode } from '../../actions';
import { navbarMode } from '../../actions';
import firebase from 'firebase';

function Intro() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log('firebase 로그아웃 실패');
        console.log(err);
      });
    dispatch(navbarMode(0));
    localStorage.removeItem('token');
    dispatch(userName(''));
    dispatch(userEmail(''));
    dispatch(bottomNavMode(-1));
    setTimeout(() => {
      dispatch(navbarMode(1));
      history.push('/main');
    }, 3000);
  });

  return (
    <Container>
      <TextContainer>
        <div>
          <IntroMainText>
            무 <IntroSubText>지하게 옷을</IntroSubText>
          </IntroMainText>
        </div>
        <div>
          <IntroMainText>
            인 <IntroSubText>간적으로 입고싶은 사람들</IntroSubText>
          </IntroMainText>
        </div>
        <div>
          <IntroMainText>
            도 <IntroSubText>와주는 곳</IntroSubText>
          </IntroMainText>
        </div>
      </TextContainer>

      <IntroImageContainer>
        <img src="/images/intro/ball.gif" alt="ball.gif" />
      </IntroImageContainer>

      <BottonContainer>
        <IntroSubText>MUINDO</IntroSubText>
      </BottonContainer>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  background-color: #000;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;
const TextContainer = styled.div`
  padding-top: 30px;
  padding-left: 25px;
`;
const IntroMainText = styled.h1`
  font-size: 36px;
  color: #fff;
  margin: 0;
`;
const IntroSubText = styled.span`
  font-size: 22px;
  color: #fff;
  margin: 0;
`;
const IntroImageContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 15%;
`;
const BottonContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 5%;
`;
