import React, { useState, useCallback, useContext, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import TopComment from '../AnalysisClothes/topComment';

// import ColorSelect from './colorPalette';
import { ModalContext } from '../../App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SketchPicker, CirclePicker } from 'react-color';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e2b063',
    },
  },
});

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
    // backgroundColor: 'white',
    // maxWidth: '800px',
    // minWidth: '70px',
    // minHeight: '73vh',
    // height: '78vh',
    // width: '66vw',
    // flexDirection: 'column',
    // marginTop: '50px',
    // border: 'solid 3px',
    // borderRadius: '25px',
    // // overflow: 'auto',
    backgroundColor: 'white',
    maxWidth: '350px',
    // minWidth: '340px',
    // minHeight: '73vh',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    // marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
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
  modalMiddleContents: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    // width: '40vw',
    height: '500px',
    // border: 'solid 1px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBottomContents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2vw',
  },
  colorCircleBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '250px',
    height: '170px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ColorChangeModal({ data }) {
  const classes = useStyles();
  const { lookBookColorModal, setLookBookColorModal } = useContext(ModalContext);
  const { lookBookColorSelect, setLookBookColorSelect } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);

  useEffect(() => {
    setLookBookColorSelect('#fff');
  }, []);

  const handleLookBookColorClose = () => {
    setLookBookColorModal(false);
    console.log(lookBookColorModal);
  };

  const handleLookBookColorReset = () => {
    setLookBookColorSelect('#fff');
    setLookBookColorModal(false);
    console.log(lookBookColorModal);
  };

  const handleLookBookColorChange = (color) => {
    setLookBookColorSelect(color.hex);
  };

  return (
    <div>
      <Dialog className={classes.root} open={lookBookColorModal} TransitionComponent={Transition} keepMounted onClose={handleLookBookColorClose}>
        <DialogContent>
          <div className={classes.colorCircleBox}>
            <CirclePicker color="#fff" onChangeComplete={handleLookBookColorChange} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLookBookColorReset} color="primary">
            Reset
          </Button>
          <Button onClick={handleLookBookColorClose} color="primary">
            결정
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 160px;
  min-width: 100px;
  width: 8vw;
  /* height: 5vh; */
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
  margin: 5px 15px 5px 15px;
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
