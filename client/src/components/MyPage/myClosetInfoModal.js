import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { ModalContext } from '../../App';
import { ClothesPriceContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '30px',
    paddingBottom: '66px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '91vh',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    height: '70vh',
    width: '100vw',
    flexDirection: 'column',
    marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
  },
  modalCloseBtn: {
    width: '25px',
    height: '25px',
  },
  modalTopContents: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hiddenBtn: {
    visibility: 'hidden',
    width: '25px',
    height: '25px',
  },
  clothesBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '300px',
  },
  infoContainer: {
    display: 'flex',
    width: '300px',
    alignItems: 'center',
    margin: '7px',
  },
  infoImg: {
    width: '80px',
    height: '90px',
  },
  infoBox: {
    marginLeft: '15px',
    display: 'flex',
    fontSize: '16px',
    flexDirection: 'column',
  },
  closetPriceBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GmarketSansMedium',
    fontWeight: 'bold',
    fontSize: '17px',
    marginTop: '10px',
    width: '200px',
    height: '50px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MyClosetInfo(props) {
  const classes = useStyles();
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);
  const { closetDetailInfo, setClosetDetailInfo } = useContext(ModalContext);
  // const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);

  const handleClosetInfoModalClose = () => {
    setOpenClosetInfoModal(false);
  };
  return (
    <div>
      <Dialog className={classes.root} open={openClosetInfoModal} TransitionComponent={Transition} keepMounted onClose={handleClosetInfoModalClose}>
        <DialogContent>
          <div className={classes.clothesBox}>
            {closetDetailInfo &&
              closetDetailInfo.map(function (item, i) {
                return (
                  <Paper elevation={2} className={classes.infoContainer}>
                    <img className={classes.infoImg} src={item['url']} alt="infoImg" />
                    <div className={classes.infoBox}>
                      <a
                        href={item['musinsa']}
                        style={{ color: '#6C49B8', textDecoration: 'none' }}
                        target="_blank"
                        rel="noreferrer"
                        title="무신사에서 상품 보기"
                      >
                        <div style={{ color: '#000000', fontWeight: 'bold' }}> {item['brand']}</div>
                        <div> {item['name']}</div>
                        <div> {item['price']}원</div>
                      </a>
                    </div>
                  </Paper>
                );
              })}
            <Paper elevation={4} className={classes.closetPriceBox}>
              {'총 금액💰 : '} {props.price}\
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosetInfoModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  height: 65px;
  width: 100px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 800;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: black;
  border-radius: 0;
  transition: all 0.25s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 15px 5px 15px;
  border: 4px solid;
  :hover {
    color: black;
    border: 7px solid;
  }
  :disabled {
    color: gray;
    border: 1px solid;
    cursor: default;
  }
`;
