import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  position: Fixed;
  display: flex;
  width: 100%;
  height: 3.5rem;
  background-color: #323b48;
  bottom: 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.p`
  color: #e2b063;
  font-size: 1.2vh;
  margin: 2px 0;
`;

function Footer() {
  return (
    <FooterBox>
      <div>
        <FooterText>Contact: youngminieo1005@gmail.com</FooterText>
        <FooterText>
          Copyright 2021 Team 어쩌다 삼국지 All rights reserved.
        </FooterText>
      </div>
    </FooterBox>
  );
}

export default Footer;
