import React, { useState, createContext, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import TopComment from '../../components/AnalysisClothes/topComment';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

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
    // overflow: 'hidden',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    // minWidth: '340px',
    // minHeight: '73vh',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    // marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '15px',
    // overflow: 'auto',
  },
  modalCloseBtn: {
    // width: '25px',
    // height: '25px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalTopContents: {
    display: 'flex',
    justifyContent: 'center',
  },
  hiddenBtn: {
    visibility: 'hidden',
    width: '25px',
    height: '25px',
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
    marginTop: '15px',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  box: { overflow: 'auto', width: '100%' },

  modalClothesContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    // height: '70vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
    // width: '100%',
    // flexDirection: 'column',
  },
  individualClothesContainer: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: 'solid 2px',
    fontSize: '18px',
    width: '160px',
    height: '300px',
    margin: '5px',
  },
  modalImg: {
    display: 'flex',

    width: '100%',
    height: '100%',
  },
  clothesThumbnailBox: {
    display: 'flex',
    justifyContent: 'center',

    width: '160px',
    height: '160px',
    marginBottom: '5px',
  },
  clothesInfoBox: {
    flexWrap: 'wrap',
    marginLeft: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
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
  // const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  // const { modalMode, setModalMode } = useContext(ModalContext);
  // const { closetImg, setClosetImg } = useContext(ModalContext);
  // const { clothesList, setClothesList } = useContext(ModalContext);
  // const { condition, setCondition } = useContext(ModalContext);
  // const [filteredClothes, setFilteredClothes] = useState({});
  const PAGE_NUMBER = 1;

  const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const { closetClothesId, setClosetClothesId } = useContext(ModalContext);
  const { clothesList, setClothesList } = useContext(ModalContext);
  const { condition, setCondition } = useContext(ModalContext);
  const [filteredClothes, setFilteredClothes] = useState({});
  const [page, setPage] = useState(PAGE_NUMBER);

  const [lastClothesId, setLastClothesId] = useState('1');
  //중요한 코드!!!!!!!!
  // useEffect(() => {
  //   try {
  //     axios
  //       .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/looks/items?type=${modalMode}`, {
  //         headers: { Authorization: 'Bearer ' + window.localStorage.token },
  //       })
  //       .then((res) => {
  //         setClothesList(res.data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // return clothesList;
  // }, [modalMode]);
  // console.log(clothesList);
  // console.log(modalMode);

  useEffect(() => {
    console.log(closetClothesId);

    try {
      axios
        .get(
          `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${modalMode}&itemid=11000`,
          // {
          //   headers: { Authorization: 'Bearer ' + window.localStorage.token },
          // },
          // {
          //   headers: { withCredentials: true },
          // },

          // {
          //   headers: {
          //     'X-CSRF-TOKEN': getCookie('csrf_access_token'),
          //   },
          // },
        )
        .then((res) => {
          setClothesList(res.data);
          // setLastClothesId(res.data[res.data.length - 1]['id']);
        });
    } catch (err) {
      console.log(err);
    }
    // setLastClothesId(clothesList[clothesList.length - 1]['id']);

    // return clothesList;
  }, [modalMode, condition]);
  console.log(clothesList);

  // console.log(lastClothesId);

  const scrollToEnd = () => {
    console.log('마지막');
    setTimeout(() => {
      setPage(page + 1);
      axios
        .get(
          `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${modalMode}&itemid=1`,
          // {
          //   headers: { Authorization: 'Bearer ' + window.localStorage.token },
          // }
        )
        .then((res) => {
          setClothesList([...clothesList, ...res.data]);
          // setLastClothesId(res.data[res.data.length - 1]['id']);
        });
    }, 1000);
  };

  const handleClose = () => {
    setClothesList([]);
    console.log(clothesList);
    setOpenClosetModal(false);
    var newCondition = { ...condition };
    newCondition['middleCategory'] = '';
    newCondition['subCategory'] = '';
    newCondition['brand'] = '';
    // setConditionNum(10000);
    setCondition(newCondition);
  };

  const handleImageSelect = (event) => {
    setClosetImg({
      ...closetImg,
      [modalMode]: event.target.src,
    });
    setClosetClothesId({ ...closetClothesId, [modalMode]: event.target.alt });
    console.log(event.target);
    console.log(closetClothesId);

    setClothesList([]);
    setOpenClosetModal(false);
    setModalMode('');
  };
  console.log(closetClothesId);

  return (
    <div>
      <Modal
        className={classes.root}
        open={openClosetModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 750,
        }}
      >
        <Fade in={openClosetModal}>
          <div className={classes.modal}>
            <div className={classes.modalTopContents}>
              <div className={classes.modalBtnContainer}>
                <GroupSelector />
              </div>
            </div>

            {modalMode ? (
              <div className={classes.modalBottomContent}>
                <div className={classes.box} id="scrollableDiv">
                  <InfiniteScroll
                    className={classes.modalClothesContainer}
                    dataLength={clothesList.length}
                    next={() => scrollToEnd()}
                    hasMore={true}
                    loader={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}
                    scrollableTarget="scrollableDiv"
                  >
                    {Array.isArray(clothesList) &&
                      clothesList.map(function (image, i) {
                        return (
                          <div className={classes.individualClothesContainer}>
                            <div className={classes.clothesThumbnailBox}>
                              <img className={classes.modalImg} alt={clothesList[i]['id']} src={clothesList[i]['url']} onClick={handleImageSelect} />
                            </div>
                            <div className={classes.clothesInfoBox}>
                              <a
                                href={clothesList[i]['musinsa']}
                                target="_blank"
                                style={{ color: '#6C49B8', textDecoration: 'none' }}
                                title="무신사에서 상품 보기"
                                rel="noreferrer"
                              >
                                <div style={{ fontSize: '14px' }}>{clothesList[i]['brand']}</div>
                                <div>{clothesList[i]['name'].slice(0, 18)}...</div>
                                <div style={{ fontSize: '16px' }}>{clothesList[i]['price']}\</div>
                              </a>
                            </div>
                          </div>
                        );
                      })}

                    {filteredClothes.length === 0 ? <div>결과가 없습니다</div> : <></>}
                  </InfiniteScroll>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={classes.modalCloseBtn}>
              <Button onClick={handleClose} color="primary">
                닫기
              </Button>
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
