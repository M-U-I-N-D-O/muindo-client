import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <FooterBox>
      <div className={classes.root}>
        <FooterText>Contact: youngminieo1005@gmail.com</FooterText>
        <FooterText>
          Copyright 2021 Team 어쩌다 삼국지 All rights reserved.
        </FooterText>
      </div>
    </FooterBox>
  );
}

export default Footer;
