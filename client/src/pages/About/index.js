import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function Members(props) {
  return (
    <ImgBoxItem>
      <img src={props.profileImg} alt="member" width="120px" height="120px" />
      <ImgNameText>{props.name}</ImgNameText>
      <ImgRoleText>{props.role}</ImgRoleText>
      <ImgLink href={props.gitHubLink} target="_blank">
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </ImgLink>
      <ImgLink href={props.notionLink} target="_blank">
        <IconButton>
          <AccountCircleRoundedIcon style={{ fontSize: '29px' }} />
        </IconButton>
      </ImgLink>
    </ImgBoxItem>
  );
}

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
        <Members
          name="정성헌"
          role="BE / AI"
          profileImg="/images/about/1.png"
          gitHubLink="https://github.com/Heon4856"
          notionLink="https://www.notion.so/gosi/65853100963a459faa486fa881a4112c"
        />
        <Members
          name="김수람"
          role="BE"
          profileImg="/images/about/2.png"
          gitHubLink="https://github.com/su-ram"
          notionLink="https://www.notion.so/gosi/65853100963a459faa486fa881a4112c"
        />
      </ImgBox>
      <ImgBox>
        <Members
          name="민유지"
          role="FE"
          profileImg="/images/about/3.png"
          gitHubLink="https://github.com/nvrtmd"
          notionLink="https://www.notion.so/FrontEnd-Engineer-166a3ec16a834a9c9c0532ece9bc2f8d"
        />
        <Members
          name="위영민"
          role="FE"
          profileImg="/images/about/4.png"
          gitHubLink="https://github.com/youngminss"
          notionLink="https://www.notion.so/a5318dc83cf7495cab136272b451ed6b"
        />
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
