import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
  return (
    <Container>
      <LightText>
        About <BoldText>MUINDO</BoldText>
      </LightText>

      <DescriptionText>
        <DescriptionSubText>MUINDO </DescriptionSubText>는
        <br />
        "무지하게 옷을 인간적으로 입고 싶은 사람을 <br />
        도와주는 곳"입니다.
        <br />
        <br />
        옷에 큰 에너지를 쏟고 싶진 않지만
        <br />
        패션 테러리스트가 되고 싶지도 않은,
        <br /> 그저 '사람답게'만 입고 싶은 사람들을 위한 <br />
        서비스입니다.
      </DescriptionText>

      <ImgBoxText>Contributor</ImgBoxText>
      <ImgBox>
        <ImgBoxItem>
          <img src="/images/about/1.png" alt="minoj" width="120px" height="120px" />
          <ImgNameText>정성헌</ImgNameText>
          <ImgRoleText>BE / AI</ImgRoleText>
          <ImgLink href="https://github.com/Heon4856" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </ImgLink>
        </ImgBoxItem>
        <ImgBoxItem>
          <img src="/images/about/2.png" alt="minoj" width="120px" height="120px" />
          <ImgNameText>김수람</ImgNameText>
          <ImgRoleText>BE</ImgRoleText>
          <ImgLink href="https://github.com/su-ram" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </ImgLink>
        </ImgBoxItem>
      </ImgBox>
      <ImgBox>
        <ImgBoxItem>
          <img src="/images/about/3.png" alt="minoj" width="120px" height="120px" />
          <ImgNameText>민유지</ImgNameText>
          <ImgRoleText>FE</ImgRoleText>
          <ImgLink href="https://github.com/nvrtmd" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </ImgLink>
        </ImgBoxItem>
        <ImgBoxItem>
          <img src="/images/about/4.png" alt="minoj" width="120px" height="120px" />
          <ImgNameText>위영민</ImgNameText>
          <ImgRoleText>FE</ImgRoleText>
          <ImgLink href="https://github.com/youngminss" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </ImgLink>
        </ImgBoxItem>
      </ImgBox>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding-top: 70px;
  padding-bottom: 60px;
  margin: auto 0;
  text-align: center;
`;
const LightText = styled.h3`
  font-size: 22px;
`;
const BoldText = styled.span`
  font-size: 24px;
`;
const DescriptionText = styled.p`
  font-size: 16px;
`;
const DescriptionSubText = styled.span`
  font-size: 16px;
`;
const ImgBoxText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 36px;
  margin-bottom: 0;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgBoxItem = styled.div`
  margin: 0 5vw;
`;
const ImgNameText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
const ImgRoleText = styled.p`
  font-size: 16px;
  margin: 0;
`;
const ImgLink = styled.a`
  text-decoration: none;
`;
