import React, { useState, createContext, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import { ModalContext } from '../../App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Data } from '../../data/data.json';
// import { Data } from '../../../public/images/closet/closet_bag.jpg';
// import {  } from '../Closet/closet_bag.jpg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e2b063',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    // flexDirection: 'column',
    alignItems: 'center',
    // width: '100px',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // backgroundColor: '#ececec',
    // height: '80vw',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '800px',
    minWidth: '70px',
    minHeight: '68vh',
    width: '66vw',
    // marginRight: '25px',
    marginTop: '50px',
  },
  modalCloseBtn: {},
}));

function ModalCloseBtn() {
  const classes = useStyles();
  const { setOpenModal } = useContext(ModalContext);
  const { setModalMode } = useContext(ModalContext);
  const handleClose = () => {
    setOpenModal(false);
  };
  //   console.log({ modalMode });

  return (
    <ThemeProvider theme={theme}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </ThemeProvider>
  );
}

export default function ClosetModal({ data }) {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);

  // console.log(Data[modalMode]);
  //   const [openModal, setOpenModal] = useState(false);
  //   const handleOpen = () => {
  //     setOpenModal(true);
  //   };
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log(modalMode);
  const handleImageSelect = (event) => {
    setClosetImg({
      ...closetImg,
      [modalMode]: event.target.src,
    });
    console.log(closetImg);
  };

  return (
    <div>
      <Modal
        className={classes.root}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Fade in={openModal}> */}
        <div className={classes.modal}>
          <div>{modalMode}</div>
          <div>{Data[modalMode]}</div>
          {modalMode ? (
            <div>
              <img alt="" src={Data[modalMode][0]} style={{ width: '50px', height: '50px' }} onClick={handleImageSelect} />
              <img alt="" src={Data[modalMode][1]} style={{ width: '50px', height: '50px' }} onClick={handleImageSelect} />
            </div>
          ) : (
            <div>ㅎㅇㅎㅇ</div>
          )}
          <div className={classes.modalCloseBtn}>
            <ModalCloseBtn />
          </div>
        </div>
        {/* </Fade> */}
      </Modal>
    </div>
  );
}
