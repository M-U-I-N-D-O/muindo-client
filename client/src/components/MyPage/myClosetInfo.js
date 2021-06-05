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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { ModalContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // // flexDirection: 'column',
    // alignItems: 'center',
    // // width: '100px',
    // // maxWidth: '1024px',
    // // minHeight: ' calc(100vh - 8.5rem)',
    // // backgroundColor: '#ececec',
    // // height: '80vw',

    display: 'flex',
    paddingTop: '70px',
    paddingBottom: '66px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    // minWidth: '340px',
    // minHeight: '73vh',
    height: '70vh',
    width: '100vw',
    flexDirection: 'column',
    marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
    // alignItems: 'center',
    // justifyContent: 'center',

    // overflow: 'auto',
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalCloseBtn() {
  const classes = useStyles();
  // const { lookBookColorSelect, setLookBookColorSelect } = useContext(ModalContext);

  // const { lookBookColorModal, setLookBookColorModal } = useContext(ModalContext);
  // const { setModalMode } = useContext(ModalContext);
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);

  const handleClosetInfoModalClose = () => {
    setOpenClosetInfoModal(false);
    // console.log(lookBookColorModal);
  };

  return (
    <IconButton onClick={handleClosetInfoModalClose}>
      <CloseIcon className={classes.modalCloseBtn} />
    </IconButton>
  );
}

export default function MyClosetInfo({ data }) {
  const classes = useStyles();
  // const { lookBookColorModal, setLookBookColorModal } = useContext(ModalContext);
  // const { lookBookColorSelect, setLookBookColorSelect } = useContext(ModalContext);
  // const { closetImg, setClosetImg } = useContext(ModalContext);
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);

  const [closetInfo, setClosetInfo] = useState([]);

  const handleClosetInfoModalClose = () => {
    setOpenClosetInfoModal(false);
    // console.log(lookBookColorModal);
  };

  // const fetchClothesData = useCallback(async () => {
  //   try {
  //     await axios.get('http://localhost:3000/data/closet.json').then((res) => {
  //       let result = res.data.data;
  //       // console.log(modalMode);
  //       // console.log(result[modalMode]);
  //       // let arr = [];
  //       // for (var i = 0; i < result[modalMode]; i++) {
  //       //   console.log(result[modalMode[i]]);
  //       //   //   var newArray = appendObjTo(arr, result[modalMode[i]])
  //       // }
  //       // console.log(arr);
  //       setClosetInfo(result);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // useEf

  // useEffect(() => {
  //   try {
  //     axios.get('http://localhost:3000/data/closet.json').then((res) => {
  //       let result = res.data.data;
  //       // // console.log(modalMode);
  //       console.log(result.hat);

  //       // console.log(res.data.data['bag']);
  //       // console.log(res.data.data[modalMode]);
  //       // console.log(typeof [1, 2, 3]);
  //       setClosetInfo(result['hat']);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // return clothesList;
  // }, []);
  // console.log(modalMode);

  // console.log(setClosetInfo);

  return (
    <div>
      {/* <Modal
        className={classes.root}
        open={openClosetInfoModal}
        onClose={handleClosetInfoModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openClosetInfoModal}>
          <div className={classes.modal}>
            <div className={classes.modalTopContents}>
              <div className={classes.hiddenBtn}>
                <ModalCloseBtn />
              </div>
              <div>
                <ModalCloseBtn />
              </div>
            </div>
            <div className={classes.clothesBox}>
              <LuxuryBtn>{'모자 & \n 선글라스'}</LuxuryBtn>
              <LuxuryBtn>{'상의'}</LuxuryBtn>
              <LuxuryBtn>{'하의'}</LuxuryBtn>
              <LuxuryBtn>{'신발'}</LuxuryBtn>
              <LuxuryBtn>{'가방'}</LuxuryBtn>
            </div>
          </div>
        </Fade>
      </Modal> */}
      <Dialog className={classes.root} open={openClosetInfoModal} TransitionComponent={Transition} keepMounted onClose={handleClosetInfoModalClose}>
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
          <div className={classes.clothesBox}>
            <LuxuryBtn>{'모자 & \n 선글라스'}</LuxuryBtn>
            <LuxuryBtn>{'상의'}</LuxuryBtn>
            <LuxuryBtn>{'하의'}</LuxuryBtn>
            <LuxuryBtn>{'신발'}</LuxuryBtn>
            <LuxuryBtn>{'가방'}</LuxuryBtn>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosetInfoModalClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClosetInfoModalClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  /* max-width: 150px;
  min-width: 130px; */
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
  /* padding: 15px 20px 15px 20px; */
  transition: all 0.25s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  /* background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0)); */
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 15px 5px 15px;
  border: 4px solid;
  :hover {
    color: black;
    border: 7px solid;
    /* color: $white; */
    /* background-position: 99% 50%; */
  }
  :disabled {
    /* background-position: 1% 50%; */
    /* color: rgba(223, 190, 106, 0.7); */
    color: gray;
    border: 1px solid;
    cursor: default;
  }
`;
