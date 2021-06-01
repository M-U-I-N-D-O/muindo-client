import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import ClosetModal from '../../components/Closet/closetModal';
import axios from 'axios';
import { useHistory } from 'react-router';

import { ModalContext } from '../../App';

import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80vw',
    maxWidth: '1024px',
    minHeight: ' calc(100vh - 8.5rem)',
    // height: '80vw',
  },
  title: {
    marginTop: '25px',
    marginBottom: '5px',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    // border: 'solid 10px',
    flexDirection: 'column',
    width: '65vw',
    maxWidth: '900px',
    height: '62vh',
    overflow: 'auto',
  },
  titleContainer: {
    marginTop: '20px',

    width: '65vw',
    maxWidth: '830px',
    height: '5vh',
  },
  bodyContainer: {
    marginTop: '30px',
    width: '65vw',
    maxWidth: '830px',
    height: '5vh',
  },
}));

export default function ClosetForm() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <TopComment comment={'당신의 옷장을 공유하세요.'} />
      </div>
      <form className={classes.formContainer} method="post" action="">
        <div className={classes.titleContainer}>
          <TextField placeholder="제목을 입력하세요." fullWidth variant="outlined" />
        </div>
        <div className={classes.bodyContainer}>
          <TextField placeholder="게시글을 작성하세요" fullWidth variant="outlined" rows="28" multiline="true" />
        </div>
      </form>
      <div>
        <LuxuryBtn
          onClick={() => {
            history.push('/closet/look_book');
          }}
        >
          {'뒤로 가기'}
        </LuxuryBtn>
        <LuxuryBtn
          onClick={() => {
            history.push('/closet');
          }}
        >
          {'옷 바꾸기'}
        </LuxuryBtn>
        <LuxuryBtn>{'업로드 하기'}</LuxuryBtn>
      </div>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 190px;
  min-width: 170px;
  width: 8vw;
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
  white-space: pre-wrap;
  text-align: center;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 20px 15px 30px 15px;
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
