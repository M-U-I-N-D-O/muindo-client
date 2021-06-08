import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
    paddingTop: '60px',
    paddingBottom: '56px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    // width: '80vw',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // // height: '80vw',
  },
  title: {
    // marginTop: '25px',
    // marginBottom: '5px',
  },
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },

  closetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '340px',
    minWidth: '310px',
    width: '90vw',
    height: '650px',
    border: 'solid 5px',
    minHeight: '57vh',
  },
  btnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '140px',
  },
  leftClothesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // maxWidth: '150px',
    // minWidth: '130px',
    width: '150px',

    marginRight: '15px',
  },
  hatContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',

    // minWidth: '70px',
    // minHeight: '90px',
    // width: '40vw',
    width: '90px',
    height: '80px',

    justifyContent: 'center',
    border: 'solid 3px',
    margin: '15px 0px',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    // maxWidth: '120px',

    // minWidth: '90px',
    // minHeight: '150px',
    width: '130px',
    height: '150px',

    justifyContent: 'center',
    border: 'solid 3px',
    margin: '15px 0px',
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '120px',
    // minWidth: '90px',
    // minHeight: '150px',
    // width: '30vw',

    width: '120px',
    height: '150px',

    justifyContent: 'center',
    border: 'solid 3px',
    margin: '15px 0px',
  },
  shoesContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',
    // minWidth: '70px',
    // minHeight: '90px',
    // width: '30vw',

    width: '90px',
    height: '80px',

    justifyContent: 'center',
    border: 'solid 3px',
    margin: '15px 0px',
  },
  bagContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',
    // minWidth: '70px',
    // minHeight: '100px',
    // width: '30vw',

    width: '90px',
    height: '120px',

    justifyContent: 'center',
    border: 'solid 3px',
    margin: '15px 0px',
  },
  clothesText: {
    fontSize: '23.5px',
  },
}));

function Closet() {
  const history = useHistory();

  const classes = useStyles();

  const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  useEffect(() => {
    setClosetImg({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
  }, []);

  const handleClothesContainerClick = (event) => {
    setModalMode(event.target.id);
    setOpenClosetModal(true);
    console.log(modalMode);
    console.log(closetImg);
    console.log(Object.values(closetImg));
  };

  const handleEraseAllButtonClick = () => {
    setClosetImg({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
  };

  return (
    <div className={classes.root}>
      {modalMode !== '' && <ClosetModal data={modalMode} />}

      <div className={classes.title}>
        <TopComment comment={'옷장에 옷을 넣어보세요.'} />
      </div>
      <div className={classes.closetContainer}>
        <div className={classes.leftClothesContainer}>
          <div className={classes.hatContainer} onClick={handleClothesContainerClick} id="hat">
            {closetImg['hat'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['hat']} id="hat" />
            ) : (
              <h2 style={{ fontSize: '18.5px', whiteSpace: 'pre-wrap' }} id="hat">
                {'모자 / \n안경'}
              </h2>
            )}
          </div>
          <div className={classes.topContainer} onClick={handleClothesContainerClick} id="top">
            {closetImg['top'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['top']} id="top" />
            ) : (
              <h2 className={classes.clothesText} id="top">
                상의
              </h2>
            )}
          </div>
          <div className={classes.bottomContainer} onClick={handleClothesContainerClick} id="bottom">
            {closetImg['bottom'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bottom']} id="bottom" />
            ) : (
              <h2 className={classes.clothesText} id="bottom">
                하의
              </h2>
            )}
          </div>
          <div className={classes.shoesContainer} onClick={handleClothesContainerClick} id="shoes">
            {closetImg['shoes'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['shoes']} id="shoes" />
            ) : (
              <h2 className={classes.clothesText} id="shoes">
                신발
              </h2>
            )}
          </div>
        </div>
        <div className={classes.rightClothesContainer}>
          <div className={classes.bagContainer} onClick={handleClothesContainerClick} id="bag">
            {closetImg['bag'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bag']} id="bag" />
            ) : (
              <h2 className={classes.clothesText} id="bag">
                가방
              </h2>
            )}
          </div>
        </div>
      </div>

      <div className={classes.btnBox}>
        <LuxuryBtn onClick={handleEraseAllButtonClick}>모두 지우기</LuxuryBtn>
        <LuxuryBtn
          onClick={() => {
            history.push('/loading');
            setTimeout(function () {
              history.push('/closet/look_book');
            }, 0);
          }}
          disabled={!(closetImg['hat'] || closetImg['top'] || closetImg['bottom'] || closetImg['shoes'] || closetImg['bag'])}
        >
          {'LOOKBOOK \n만들기'}
        </LuxuryBtn>
      </div>
    </div>
  );
}

export default Closet;

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 150px;
  min-width: 130px;
  height: 80px;
  width: 90vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 800;
  font-family: GmarketSansMedium;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: black;
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.25s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  /* background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0)); */
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 30px 15px 30px 15px;
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
