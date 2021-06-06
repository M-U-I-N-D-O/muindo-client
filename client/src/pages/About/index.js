import React, { useEffect } from 'react';
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
        저희 <DescriptionSubText>MUINDO </DescriptionSubText>는
        <br />
        "무지하게 패션 인싸 되고싶은사람 도와주는 곳"으로
        <br />
        패션가치관이 확립되지 않은 모두가
        <br />
        자신의 패션 룩을 등록하고 컨펌받으면서
        <br />
        서로의 패션가치관을 확인 할 수 있는 공간입니다.
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
