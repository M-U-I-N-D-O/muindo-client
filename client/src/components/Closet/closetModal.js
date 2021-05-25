import React, { useState, createContext, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import { ModalContext } from '../../App';

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
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );
}

export default function ClosetModal({ data }) {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(ModalContext);

  //   const [openModal, setOpenModal] = useState(false);
  //   const handleOpen = () => {
  //     setOpenModal(true);
  //   };
  const handleClose = () => {
    setOpenModal(false);
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
          <div>{}</div>
          <div className={classes.modalCloseBtn}>
            <ModalCloseBtn />
          </div>
        </div>
        {/* </Fade> */}
      </Modal>
    </div>
  );
}
