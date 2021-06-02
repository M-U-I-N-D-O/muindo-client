import React, { useState, useCallback, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import TopComment from '../../components/AnalysisClothes/topComment';
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import GroupSelector from './groupSelector';
import { ModalContext } from '../../App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
    height: '62vh',

    // justifyContent: 'center',
    alignItems: 'center',
  },
  modalClothesContainer: {
    display: 'flex',
    overflow: 'auto',
    width: '63vw',
    maxWidth: '800px',

    // height: '70vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
    // width: '100%',
    // flexDirection: 'column',
  },
  modalImg: {
    width: '8vw',
    height: '11vh',
    margin: '30px 40px',
  },
}));

function ModalCloseBtn() {
  const classes = useStyles();
  const { setOpenClosetModal } = useContext(ModalContext);
  const { setModalMode } = useContext(ModalContext);
  const handleClose = () => {
    setOpenClosetModal(false);
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

export default function ClosetModal() {
  const classes = useStyles();
  const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const { clothesList, setClothesList } = useContext(ModalContext);
  const { condition, setCondition } = useContext(ModalContext);
  const [filteredClothes, setFilteredClothes] = useState({});

  // const [condition, setCondition] = useState({
  //   // category: '캡/야구 모자',
  //   color: '검정색',
  //   price: 33000,
  // });
  useEffect(() => {
    setCondition({});
  }, [modalMode, openClosetModal]);

  // const fetch = useEffect(() => {
  //   try {
  //     axios.get('http://localhost:3000/data/closet.json').then((res) => {
  //       let result = res.data.data;
  //       setClothesList(result);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const fetchClothesData = useCallback(async () => {
    try {
      await axios.get('http://localhost:3000/data/closet.json').then((res) => {
        let result = res.data.data;
        setClothesList(result);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchClothesData();
  }, [fetchClothesData]);

  const handleClose = () => {
    setOpenClosetModal(false);
  };

  const handleImageSelect = (event) => {
    setClosetImg({
      ...closetImg,
      [modalMode]: event.target.src,
    });
    console.log(event.target.alt);
    console.log(event.target);
    setOpenClosetModal(false);
  };

  const a = (event) => {
    console.log(event.target);
  };

  useEffect(() => {
    var subFilteredClothes = clothesList[modalMode]
      ? clothesList[modalMode].filter(function (item) {
          for (var key in condition) {
            if (item[key] === undefined || item[key] !== condition[key]) return false;
          }
          return true;
        })
      : [];
    setFilteredClothes(subFilteredClothes);
  }, [clothesList[modalMode], condition]);

  return (
    <div>
      <Modal
        className={classes.root}
        open={openClosetModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openClosetModal}>
          <div className={classes.modal}>
            <div className={classes.modalTopContents}>
              <div className={classes.hiddenBtn}>
                <ModalCloseBtn />
              </div>
              <TopComment comment={'마음에 드는 옷을 골라보세요.'} />
              <div>
                <ModalCloseBtn />
              </div>
            </div>

            {modalMode ? (
              <div className={classes.modalBottomContent}>
                <div className={classes.modalBtnContainer}>
                  {/* <LuxuryBtn onClick={handleInitializeClick}>초기화</LuxuryBtn> */}
                  <GroupSelector />
                </div>
                <div className={classes.modalClothesContainer}>
                  {Object.keys(condition).length !== 0
                    ? filteredClothes.map(function (image, i) {
                        return (
                          <div>
                            <div className={filteredClothes[i]['item_url']} onClick={a}>
                              <img
                                className={classes.modalImg}
                                alt={filteredClothes[i]['shop_url']}
                                src={filteredClothes[i]['img_url']}
                                onClick={handleImageSelect}
                              />
                            </div>
                            <a href={filteredClothes[i]['shop_url']} target="_blank" title="무신사에서 상품 보기" rel="noreferrer">
                              <div>{filteredClothes[i]['brand']}</div>
                              <div>{filteredClothes[i]['item_name']}</div>
                              <div>{filteredClothes[i]['price']}</div>
                            </a>
                          </div>
                        );
                      })
                    : clothesList[modalMode].map(function (image, i) {
                        return (
                          <div>
                            <div className={clothesList[modalMode][i]['item_url']} onClick={a}>
                              <img
                                className={classes.modalImg}
                                alt={clothesList[modalMode][i]['shop_url']}
                                src={clothesList[modalMode][i]['img_url']}
                                onClick={handleImageSelect}
                              />
                            </div>
                            <a href={clothesList[modalMode][i]['shop_url']} target="_blank" title="무신사에서 상품 보기" rel="noreferrer">
                              <div>{clothesList[modalMode][i]['brand']}</div>
                              <div>{clothesList[modalMode][i]['item_name']}</div>
                              <div>{clothesList[modalMode][i]['price']}</div>
                            </a>
                          </div>
                        );
                      })}
                  {filteredClothes.length === 0 ? <div>결과가 없습니다</div> : <></>}
                </div>
              </div>
            ) : (
              <div></div>
            )}
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
