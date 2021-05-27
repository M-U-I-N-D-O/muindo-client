import React, { useState, useCallback, useContext, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import TopComment from '../../components/AnalysisClothes/topComment';

import { ModalContext } from '../../App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import html2canvas from 'html2canvas';

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
    minHeight: '73vh',
    height: '78vh',
    width: '66vw',
    flexDirection: 'column',
    marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
    // overflow: 'auto',
  },
  modalCloseBtn: {
    width: '3vw',
    height: '3vh',
  },
  modalTopContents: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hiddenBtn: {
    visibility: 'hidden',
  },
  modalBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  modalBottomContent: {
    display: 'flex',
    flexDirection: 'column',
    // overflow: 'auto',
    // width: '40vw',
    height: '55vh',
    border: 'solid 1px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImgContainer: {
    // border: 'solid 5px',
    width: '30vw',
    height: '48vh',
    position: 'relative',
  },
  modalImgHat: {
    width: '6vw',
    height: '9vh',
    position: 'absolute',
    top: '6vh',
    left: '6vw',
    // zIndex: 10,
  },
  modalImgTop: {
    width: '9vw',
    height: '16vh',
    position: 'absolute',
    top: '11vh',
    left: '10.5vw',
    // margin: '0 0 0 100px',
  },
  modalImgBottom: {
    width: '7vw',
    height: '20vh',
    position: 'absolute',
    bottom: '4vh',
    left: '5vw',
  },
  modalImgShoes: {
    width: '7vw',
    height: '10vh',
    position: 'absolute',
    bottom: '6.5vh',
    right: '8vw',
  },
  modalImgBag: {
    width: '6.5vw',
    height: '13vh',
    position: 'absolute',
    top: '19vh',
    right: '4.5vw',
  },
}));

function ModalCloseBtn() {
  const classes = useStyles();
  const { openImgDownloadModal, setOpenImgDownloadModal } = useContext(ModalContext);
  const { setModalMode } = useContext(ModalContext);

  const handleClose = () => {
    setOpenImgDownloadModal(false);
    console.log(openImgDownloadModal);
  };
  //   console.log({ modalMode });

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={handleClose}>
        <CloseIcon className={classes.modalCloseBtn} />
      </IconButton>
    </ThemeProvider>
  );
}

export default function ImageDownloadModal({ data }) {
  const classes = useStyles();
  const { openImgDownloadModal, setOpenImgDownloadModal } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const captureRef = useRef();
  const [button, setbutton] = useState(false);
  //   const { modalMode, setModalMode } = useContext(ModalContext);
  //   const { closetImg, setClosetImg } = useContext(ModalContext);

  // console.log(Data[modalMode]);
  //   const [openModal, setOpenModal] = useState(false);
  //   const handleOpen = () => {
  //     setOpenModal(true);
  //   };
  const handleClose = () => {
    setOpenImgDownloadModal(false);
  };
  //   console.log(modalMode);
  //   const handleImageSelect = (event) => {
  //     setClosetImg({
  //       ...closetImg,
  //       [modalMode]: event.target.src,
  //     });
  //     console.log(closetImg);
  //     setOpenImgDownloadModal(false);
  //   };
  const captureImg = async () => {
    function downloadURI(uri, name) {
      var link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      console.log(link);
    }
    window.scrollTo(0, 0);
    let url = '';
    await html2canvas(captureRef.current).then(async (canvas) => {
      url = await canvas.toDataURL('image/jpg');
      console.log(url);
      downloadURI(url, 'baker_closet.jpg');
    });
  };

  return (
    <div>
      <Modal
        className={classes.root}
        open={openImgDownloadModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openImgDownloadModal}>
          <div className={classes.modal}>
            {/* <div>{modalMode}</div>
            <div>{Data[modalMode]}</div> */}

            <div className={classes.modalTopContents}>
              <div className={classes.hiddenBtn}>
                <ModalCloseBtn />
              </div>
              <TopComment comment={'마음에 드는 옷을 골라보세요.'} />
              <div>
                <ModalCloseBtn />
              </div>
            </div>
            <LuxuryBtn onClick={captureImg}>{'커뮤니티 \n등록'}</LuxuryBtn>

            <div className={classes.modalBottomContent}>
              <div className={classes.modalImgContainer}>
                <div className={classes.modalImgHat}>
                  {closetImg['hat'] ? <img style={{ width: '6vw', height: '9vh' }} alt="" src={closetImg['hat']} id="hat" /> : <div>모자</div>}
                </div>
                <div className={classes.modalImgTop}>
                  {closetImg['top'] ? <img style={{ width: '9vw', height: '16vh' }} alt="" src={closetImg['top']} id="top" /> : <div>모자</div>}
                </div>
                <div className={classes.modalImgBottom}>
                  {closetImg['bottom'] ? (
                    <img style={{ width: '7vw', height: '20vh' }} alt="" src={closetImg['bottom']} id="bottom" />
                  ) : (
                    <div>모자</div>
                  )}
                </div>
                <div className={classes.modalImgShoes}>
                  {closetImg['shoes'] ? <img style={{ width: '7vw', height: '10vh' }} alt="" src={closetImg['shoes']} id="shoes" /> : <div>모자</div>}
                </div>
                <div className={classes.modalImgBag}>
                  {closetImg['bag'] ? <img style={{ width: '6.5vw', height: '13vh' }} alt="" src={closetImg['bag']} id="bag" /> : <div>모자</div>}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 160px;
  min-width: 100px;
  width: 5vw;
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
