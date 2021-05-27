import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import ClosetModal from '../../components/Closet/closetModal';
import ColorChangeModal from '../../components/Closet/lookBookColorModal';
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
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },

  closetContainer: {
    // backgroundColor: '#ced3e3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '600px',
    minWidth: '90px',
    width: '50vw',
    border: 'solid 1px',
    minHeight: '57vh',
  },
  btnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '40vw',
  },
  leftClothesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '25px',
  },
  modalImgContainer: {
    // border: 'solid 5px',
    width: '30vw',
    height: '48vh',
    position: 'relative',
  },
  modalImgHat: {
    position: 'absolute',
    top: '2.5vh',
    left: '3vw',
    zIndex: 10,
  },
  modalImgTop: {
    position: 'absolute',
    top: '9vh',
    left: '8vw',
    zIndex: 9,
  },
  modalImgBottom: {
    position: 'absolute',
    bottom: '0.5vh',
    left: '2vw',
  },
  modalImgShoes: {
    position: 'absolute',
    bottom: '3vh',
    right: '6vw',
  },
  modalImgBag: {
    position: 'absolute',
    top: '18vh',
    right: '2vw',
  },
}));

function ClosetLookBook() {
  const classes = useStyles();
  const history = useHistory();
  const { lookBookColorSelect, setLookBookColorSelect } = useContext(ModalContext);

  const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  const { lookBookColorModal, setLookBookColorModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const captureRef = useRef();

  // const handleOpen = () => {
  //   setOpenModal(true);
  // };

  const handleColorChangeClick = (event) => {
    // setModalMode(event.target.id);
    setLookBookColorModal(true);
    // console.log(lookBookColorModal);
    // console.log(modalMode);
    // console.log(closetImg);
  };

  //   const handleEraseAllButtonClick = () => {
  //     setClosetImg({
  //       hat: '',
  //       top: '',
  //       bottom: '',
  //       shoes: '',
  //       bag: '',
  //     });
  //   };

  const handleImageDownloadClick = async () => {
    // setOpenImgDownloadModal(true);
    console.log(captureRef.current);

    // setTimeout(function () {
    //   setOpenImgDownloadModal(false);
    // }, 3500);
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
    <div className={classes.root}>
      {/* <ClosetModal data={modalMode} /> */}
      <ColorChangeModal />

      <div className={classes.title}>
        <TopComment comment={'옷장에 옷을 넣어보세요.'} />
      </div>
      <div className={classes.closetContainer} style={{ backgroundColor: lookBookColorSelect }} ref={captureRef}>
        <div className={classes.modalImgContainer}>
          <div className={classes.modalImgHat}>
            {closetImg['hat'] ? <img style={{ width: '8vw', height: '11vh' }} alt="" src={closetImg['hat']} id="hat" /> : <div></div>}
          </div>
          <div className={classes.modalImgTop}>
            {closetImg['top'] ? <img style={{ width: '13vw', height: '21vh' }} alt="" src={closetImg['top']} id="top" /> : <div></div>}
          </div>
          <div className={classes.modalImgBottom}>
            {closetImg['bottom'] ? <img style={{ width: '10vw', height: '23vh' }} alt="" src={closetImg['bottom']} id="bottom" /> : <div></div>}
          </div>
          <div className={classes.modalImgShoes}>
            {closetImg['shoes'] ? <img style={{ width: '8vw', height: '12vh' }} alt="" src={closetImg['shoes']} id="shoes" /> : <div></div>}
          </div>
          <div className={classes.modalImgBag}>
            {closetImg['bag'] ? <img style={{ width: '8vw', height: '17vh' }} alt="" src={closetImg['bag']} id="bag" /> : <div></div>}
          </div>
        </div>
      </div>

      <div className={classes.btnBox}>
        <LuxuryBtn
          onClick={() => {
            history.push('/closet');
          }}
        >
          수정하기
        </LuxuryBtn>
        <LuxuryBtn onClick={handleImageDownloadClick}>{'이미지 \n 다운로드'}</LuxuryBtn>
        <LuxuryBtn onClick={handleColorChangeClick}>{'배경 색상 \n 변경하기'}</LuxuryBtn>
        <LuxuryBtn>{'커뮤니티 \n등록'}</LuxuryBtn>
        <LuxuryBtn>{'카카오톡 \n공유하기'}</LuxuryBtn>
      </div>
    </div>
  );
}

export default ClosetLookBook;

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
  margin: 30px 15px 30px 20px;
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
